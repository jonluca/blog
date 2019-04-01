---
title: "Identifying non-default global variables in JavaScript"
date: 2019-03-31 18:22:31 -0700
header-img: "/images/lyft-api-network.png"
---
<style>
    {%  include main.css  %}
</style>

With the transition to [single page apps](https://en.wikipedia.org/wiki/Single-page_application), a lot of websites now store core information in actual stateful JavaScript rather than in text in HTML.

## Comparing Windows

Web JavaScript stores its global variables within the `window` object (node, on the other hand, stores them in `global`).

The easiest and most straightforward way is to get all the default global variables in an empty page in Chrome and compare them to that of any other website we might want to check.

We can open up a new tab in Chrome and type:

```js
Object.keys(window);
```

This'll return a large array with all the default keys in the `window` namespace.

```js
["postMessage", "blur", "focus", "close", "parent", ...]
```

From here we can write a quick function that checks what keys in a site aren't included.

```js
function checkGlobal() {
  const currWindowKeys = Object.keys(window);
  const windowKeys = [...];
  return currWindowKeys.filter(value => !windowKeys.includes(value));
}
```

We can try our first check with a site like GitHub. Running `checkGlobal()` returns the following:

```
["System", "u2f", "ga", "gaplugins", "IncludeFragmentElement", "AutocompleteElement", "DetailsMenuElement", "GEmojiElement", "ImageCropElement", "MarkdownHeaderButtonElement", "MarkdownBoldButtonElement", "MarkdownItalicButtonElement", "MarkdownQuoteButtonElement", "MarkdownCodeButtonElement", "MarkdownLinkButtonElement", "MarkdownUnorderedListButtonElement", "MarkdownOrderedListButtonElement", "MarkdownTaskListButtonElement", "MarkdownMentionButtonElement", "MarkdownRefButtonElement", "MarkdownToolbarElement", "TabContainerElement", "TaskListsElement", "LocalTimeElement", "RelativeTimeElement", "TimeAgoElement", "TimeUntilElement", "ClipboardCopyElement", "DetailsDialogElement", "AutoCheckElement", "PollIncludeFragmentElement", "FileAttachmentElement", "FuzzyListElement", "FilterableInputElement", "_octo", "EmojiSuggesterElement", "checkGlobal"]
```


This was a somewhat naive check - we're just comparing key names, the check function does not compare overloaded or renamed, functions, or differences at nested depths. However, we're able to actually extract quite a bit of information. We can guess that the `ga` and `gaplugins` keys are for Google Analytics. The first key that pops out of interest is clearly `_octo` - we can then check out the object, and figure out what they're storing there. Oftentimes this'll include core state of the application, and make it so we don't actually need to scrape the webpage.


## Deeper comparisons

We'd also like to define some sort of check for whether a variable has been overriden or renamed. All of the `window` variables can be renamed, so we want to make sure that we catch any changes a web page makes. There's an npm packaged called [object-hash](https://www.npmjs.com/package/object-hash) that defines per-object unique hashes. We can import this and pre-hash all the default window varialbes. We can then compare the hashes of any given pages global variables to the known ones. We'll run into some small issues (`window.pageYOffset`, for instance, is a variable that changes based on each site, and as such the hash will always be different) but for the most part it'll be a good indicator for any changes.

We can do that like so:

```js
function checkGlobal() {
  const currWindowKeys = Object.keys(window);
  const unique = currWindowKeys.filter(value => !Object.keys(originalWindowKeys).includes(value));
  const diffHash = [];
  for (const key of currWindowKeys) {
    if (Object.keys(originalWindowKeys).includes(key)) {
      try {
        // if hashes don't match and the hash isn't an unhashable (marked with _ above)
        if (objectHash.sha1(window[key]) !== originalWindowKeys[key] && originalWindowKeys[key] !== '_') {
          diffHash.push(key);
        }
      } catch (e) {
        // do nothing, fail silently
      }
    }
  }
  return {
    unique,
    diffHash
  };
}
```

I made a small [chrome extension](https://github.com/jonluca/Window-Differ) that does this for you - it compares unique keys, and hash keys, and logs them to the console for any given page.

This works well - clicking the chrome extension icon immediately shows me the differet global variables, which for my site are different analytics modules.

<picture class="centered-image">
  <source srcset="/images/lyft-api-network.webp" type="image/webp">
  <source srcset="/images/global-var-diff.png" type="image/png">
  <img alt="Personal sites different global vars" class="centered-image" src="/images/global-var-diff.png">
</picture>
<p class="footnote">My personal sites global variable differences</p>


## Future work

In the future I hope to do recursive object checks (for instance, verify that `window.Array` doesn't have any appended keys) as well as smarter hashes of objects. The library we're using now is ok but it still fails to hash a non-trivial amount of objects.
