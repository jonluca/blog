---
title: "Quantum Key Exchanges"
date: 2018-08-06 21:15:22
---
<link href='{{ site.url }}/stylesheets/main.css' rel='stylesheet' type='text/css' />


The one-time pad offers a mathematical guarantee of perfect security, with a few drawbacks - you are required to exchange keys that are at least as long as your message, and you can only use these keys once. 

The key exchange is a difficult, imperfect process, which is why the one-time pad is not commonly used in practice. 

However, the fact that even with infinite computing power you cannot deduce anything besides previously held knowledge of the message makes a more secure key-exchange system an interesting avenue of research.

This is where the theory of quantum key distribution arose. This is a cryptographic paradigm that is not only mathematically secure - it is also impervious to interception by eavesdroppers.  

This methodology allows for a secure key exchange over insecure channels - where even the interception of the exchange fundamentally alters the communication itself. This is predicated upon the validity of the no-cloning theorem, which states that "it is impossible to create an identical copy of an arbitrary unknown quantum state."[^1] 

Imagine that Alice and Bob want to communicate with each other, and there is an eavesdropper Eve that is attempting to intercept their messages. Alice and Bob only have access to two **insecure** channels - a traditional one for bits, and a quantum one for qubits. Awn Umar has an excellent example, listed below[^2]: 

> Alice has the option of using two different polarization basis—rectilinear and diagonal—using which she can send either 0 or 1. She arbitrarily decides that a 1 encoded in the rectilinear basis will be vertically (0°) polarized, a 1 encoded in the diagonal basis will be polarized at 45°, and so on. She informs Bob of this scheme through the conventional channel, and now they are ready to exchange keys. This is summarized in the following table:

<!-- | Basis           | 0 | 1 |
|-----------------|---|---|
| Rectilinear (+) | 90° | 0° |
| Diagonal (x)    | 135°  | 45°  | -->

<div class="table100 tableTop ver1 m-b-110">
	<table data-vertable="ver1">
		<thead>
			<tr class="row100 head">
				<th class="column100 column1" data-column="column1">Basis</th>
				<th class="column100 column2" data-column="column2">0</th>
				<th class="column100 column3" data-column="column3">1</th>
			</tr>
		</thead>
		<tbody>
			<tr class="row100">
				<td class="column100 column1" data-column="column1">Rectilinear (+) </td>
				<td class="column100 column2" data-column="column2">90°</td>
				<td class="column100 columnred column3" data-column="column3">0°</td>
			</tr>
			<tr class="row100">
				<td class="column100 column1" data-column="column1">Diagonal (x)</td>
				<td class="column100 column2" data-column="column2">135°</td>
				<td class="column100 column3" data-column="column3">45°</td>
			</tr>
		</tbody>
	</table>
</div>

>Alice begins by generating cryptographically-secure random pairings of bits and basis—huge amounts of them. For example,

```
1: diagonal
0: diagonal
0: rectilinear
1: diagonal
````

>One at a time, she encodes the bits in their associated basis and sends the resulting polarized photons to Bob through the quantum channel. Now, the way this works is that any party that wishes to read these incoming qubits cannot tell which basis they were encoded in—so they just guess. But there’s another catch: if they measure the qubit in the wrong basis, the reading they get is purely random, and the qubit is destroyed in either case.

In the scenario above, **Eve cannot intercept the communication without altering it, thus exposing herself**. Any attempt to read the original data results in its destruction, thus preventing man-in-the-middle attacks or allowing Eve to reconstruct the original qubits.

After Alice has sent all the data, Bob uses the public bit channel to disclose his choices of basis for each bit sent. Alice then replies with the original, true basis and they both discard any bits where Bob guessed incorrectly. Statistically, Bob will guess correctly around 50% of the time. The verification that they weren't eavesdropped is now simple - they select a random subset of the message and compare it over the bit channel. If it matches, they can ascertain with a high degree of certainty that Eve did not intercept their message. 

This is mathematically secure - however, it does not take into account the possibility of the regular channel being attacked by Eve in a MitM style attack. This issue is rectified with other common cryptographical tools, however, such as Wegman-Carter authentication. 

###### Footnotes

[^1]: W. K. Wootters and W. H. Zurek. “A single quantum cannot be cloned”.In:Nature299.5886 (Oct. 1982), pp. 802–803.doi:10.1038/299802a0.
[^2]: Awn Umar. Quantum Key-Exchange. July 2017. url:https://cryptolosophy.io/quantum-key-exchange/.