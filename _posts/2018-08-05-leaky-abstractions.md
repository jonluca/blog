---
title: "Leaky vs Punch-Through Abstractions"
date: 2018-08-04 11:07:47
---

Leaky abstractions are bad - they do not properly hide away all the complexity of the system they are covering. Unfortunately *every* abstraction is leaky to some degree[^1] - that's why the best designed abstractions offer the ability to **punch through** them.

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


### Examples

One of the clearest examples of when this is needed is when using an ORM API. Take the following snippet of C# code[^2]:

```c#
String sql = "SELECT id, first_name, last_name, phone, birth_date FROM Persons WHERE id = 10";
Result res = db.execSql(sql);
String name = res[0]["FIRST_NAME"];
```

An ORM is a great abstraction layer that turns the above into something like:

```java
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
	WHERE first_name=" + name + ";");
Transaction t = repository.execSql(r).getTransaction(0);
```

A library built like this acknowledges that it won't provide functionality for all usecases and offers the ability to punch straight through it - in this case, writing raw SQL that it then interprets and brings back to the ORM layer gracefully.

### Multi Layer Abstraction Punch-Throughs

One of the biggest issues that arise when designing multiple abstraction layers is the methodology of punch through. 


###### Footnotes

[^1]: See <a href="https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/">The Law of Leaky Abstractions</a>

[^2]: Credit to <a href="https://en.wikipedia.org/wiki/Object-relational_mapping">Wikipedia</a>
