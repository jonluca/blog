---
title: Disambiguating language type systems
date: 2018-04-19 11:18:17 -0700
---

<link
  rel="stylesheet"
  type="text/css"
  href="{{ site.url }}/stylesheets/table.css"
/>
A common mistake people make is conflating _strong_ typing with _static_ typing.

There are four key terms when discussing a languages type system:

- Strong typing
- Weak typing
- Static typing
- Dynamic typing

A _strongly_ typed language is one in which the type of a variable is explicitly declared, like in C++:

```c++
int mNum = 3;
char mWord = "hello";
```

A _weakly_ typed language is one in which the type is _not_ explicitly declared, like in Python or JavaScript.

```js
let mNum = 3;
let mWord = "hello";
```

A _statically_ typed language is one in which the type of an object cannot change, such as in Java. Once an object is declared with that type, they are bound for the lifetime of that object. This information is used by a static type checker to guarantee certain properties about the code. It verifies that an object declared in one type can't be redeclared in another.

```java
int mNum = 3;
String mString = "Hello";
mString = 2; // Error!
```

A _dynamically_ typed language is one in which the type of the object _can_ change, like in JavaScript:

```js
let mNum = 3;
mNum = "hello"; // Valid!
```

### Notes

As far as I know, all **strongly** typed languages are _static_ - strong is a superset of static. There are also very few languages that are weakly statically typed. Below are some examples of languages and where they fit in the type system described above.

<div class="table100 tableTop ver1 m-b-110">
	<table data-vertable="ver1">
		<thead>
			<tr class="row100 head">
				<th class="column100 column1" data-column="column1"></th>
				<th class="column100 column2" data-column="column2">Static Typing</th>
				<th class="column100 column3" data-column="column3">Dynamic Typing</th>
			</tr>
		</thead>
		<tbody>
			<tr class="row100">
				<td class="column100 column1" data-column="column1">Strong Typing</td>
				<td class="column100 column2" data-column="column2">C++, Java</td>
				<td class="column100 columnred column3" data-column="column3">--</td>
			</tr>
			<tr class="row100">
				<td class="column100 column1" data-column="column1">Weak Typing</td>
				<td class="column100 column2" data-column="column2">Boo</td>
				<td class="column100 column3" data-column="column3">JavaScript</td>
			</tr>
		</tbody>
	</table>
</div>
