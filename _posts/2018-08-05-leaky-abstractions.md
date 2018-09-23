---
title: "Leaky vs punch-through abstractions"
date: 2018-08-04 11:07:47 -0700
comments: true
---
Leaky abstractions are the cause of much frustration - they do not properly hide away all the complexity of the system they are covering. Unfortunately *every* abstraction is leaky to some degree[^1] - that's why the best designed abstractions offer the ability to **punch through** them.

### Background

Talking about abstraction layers can get complicated fairly quickly. By definition they exist at every layer of a system, from [Microcode](https://en.wikipedia.org/wiki/Microcode) , which translates Assembly to actual instructions a CPU can interpret, to services like CDN managers which sit at a *much* higher level and treat entire segments of the internet as abstractions. They serve extremely different purposes but the end goal is always the same - to simplify some underlying service or complexity. They hide this complexity (with varying levels of success).

### Failure

Abstractions seem to fall in one of a few categories with regards to their failure-handling methodologies.

1. They provide extremely verbose output and are simply not fully featured enough. These are abstractions that were designed for a single use case, and work well enough at that specific scenario, but fail in all others. They have very little error handling, and function more like a small automation script than a full fledged service layer.

2. They fail silently. This is more common in projects that are somewhat mature, and cover something like 95% of use cases, but completely fall apart for the last 5%. They rise up quickly because they solve a common problem, and try to be a complete solution by simply ignoring the parts they don't do well. This covers a lot of open source projects on GitHub that are maintained by a single person.

3. They provide a **punch-through** - a way of circumventing the abstraction entirely, and dealing directly with the layer underneath. These systems acknowledge that they can not provide all the functionality for every user, so they effectively say "We trust you know what you're doing, go ahead". These are often the most mature and well designed abstraction layers.

### Good Abstractions

A leaky abstraction **forces** you to deal with the bare metal - a great abstraction **lets** you. The best abstraction layers are those that let you completely shed the layer and deal directly with the bare-metal underneath. 

No abstraction is actually perfect - there will *always* be cases when the provided abstractions aren't enough. A well designed layer takes this into account and creates a safe way to interact with the lower level.

### Implementation

All abstractions are leaky. To pretend otherwise would be to lie to ourselves. When designing an abstraction layer identify the core parts you *need to do well*, and then design a way to circumvent or add on functionality in an intuitive manner. It's important not to fixate on a perfect abstraction - instead focus on handling the majority of use cases, and providing an intuitive way for the user to handle the remaining edge ones. 


### ORM

One of the clearest examples of when this is needed is when using an ORM API. Take the following snippet of C# code[^2]:

```c#
String sql = "SELECT id, first_name, last_name, phone, birth_date FROM Persons WHERE id = 10";
Result res = db.execSql(sql);
String name = res[0]["FIRST_NAME"];
```

An ORM is a great abstraction layer that turns the above into something like:

```c#
Person p = repository.GetPerson(10);
String name = p.getFirstName();
```

It's easier to read (and code) when the SQL is abstracted away behind `GetPerson` functions. 

Unfortunately no ORM could sufficiently provide all the functionality - as your queries get more complicated the ORM will start to strain and either force to you perform bad code practices or look for a solution elsewhare. A punchthrough would be a method like so:

```c#
Person p = repository.GetPerson(10);
String name = p.getFirstName();
RawSqlBuilder r = repository.buildSql(@"SELECT Orders.id FROM Orders 
	INNER JOIN Persons ON Orders.id=Persons.id 
	WHERE first_name=" + escapeSql(name) + ";");
String orderName = repository.execSql(r).getOrderName(0);
```

A library built like this acknowledges that it won't provide functionality for all usecases and offers the ability to punch straight through it - in this case, writing raw SQL that it then interprets and brings back to the ORM layer gracefully.

There's an argument here that a library that does not have the above functionality is just a poorly made abstraction - that's not the point of the example, though. The point is the fact that no library will cover all use cases, and it's a significantly better experience when the library helps you and guides you through it's abstraction rather than forcing you to fork the project and modify the code yourself to fit your needs. In a perfect world the library would be adapted for your specific use case so that it fully covers it, but that's just not a reasonable approach to the problem. 

Even the best made abstractions wil 
### Multi Layer Abstraction Punch-Throughs

One of the biggest issues that arise when designing multiple abstraction layers is the methodology of punch through. 

In the example below we have a moderately complex application - there are three distinct abstraction layers that are each built on top of each, with a clear separation of duties.

<div id="1" class="abstractionLayer firstAl">First Service</div>
<div id="2" class="abstractionLayer secondAl">Second Service</div>
<div class="abstractionLayer thirdAl">Third Service</div>

The question then becomes whether the punch through should go all the way through, or whether it should be limited to just the next layer. 

Should the design of the system allow the first layer to modify the third one directly? 

The obvious benefit is functionality. You add the ability for the user to not have to learn anything about the second layer - if they are dealing with the first service and just need to modify something on the third, they can punch straight through. 

The negatives are a bit more nuanced. When designing a straight punch-through system, you remove the locality of code. A code base could end up with poorly delineated files which touch a lot of functionality. Allowing the a high level service to directly modify low level functionality leads to a lack of intuition on where the code would reside. Since *every* layer of a service can modify any below it, there's a lot more places for misbehaving code to show up. 

The other potential issue is precedence. If layer one exercises its right to punch through to layer 3, but layer 2 does as well, and they conflict, which takes precedence? It's not immediately clear if it's one or the other, and would probably lay in the field of undefined behavior. 

Restricting punch through to just the layer below would rectify this problem, at the cost of more functionality. 

I don't believe there's a firm answer to this, and the right choice ends up being project dependent. The coupling of the system should also be taken into account - if these layers are all tightly coupled and are unlikely to be reused, then a direct punch through might be ideal. If instead this is a genericized project that is meant to have a clear separation of duties, single layer punch through is preferred.

### Give the choice, not the obligation

When designing an abstraction layer it's important to give your users the ability to punch through without being leaky. When you design the leaks yourself, and hide them behind "Advanced User" warnings, you cater to a larger audience, and you extend the functionality of your service.

###### Footnotes

[^1]: See <a href="https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/">The Law of Leaky Abstractions</a>

[^2]: Credit to <a href="https://en.wikipedia.org/wiki/Object-relational_mapping">Wikipedia</a>
