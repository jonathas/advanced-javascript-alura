# Alura - Advanced JavaScript

## Advanced JavaScript online course I: ES6, object orientation and project standards

## Content

### Prologue: rules, code and maintenance

    - Welcome
    - Course Considerations
    - Project overview
    - Page overview
    - Manipulating DOM
    - If you "wrap" the DOM
    - Where are the good practices?

### Specifying a Negotiation

    - What is a template?
    - The object-oriented paradigm
    - OO and Classes
    - The Trading class
    - Class constructor and parameters
    - Beware of the anemic model
    - Methods
    - Encapsulation
    - The syntax get
    - Immutable objects
    - Defensive programming

### The link between user actions and the model

    - The NegotiationController class
    - Associating controller methods with user actions
    - Transforming document.querySelector into $!
    - Changing the context of this with the bind function
    - Avoiding traversing the DOM many times
    - The problem with dates
    - Solving a problem with the functional paradigm
    - Spread Operator: Leaving less verbose code
    - Arrow Functions: letting the code even less verbose

### Is dealing with date laborious? Call a helper!

    - Displaying the Date object in day / month / year format
    - Isolating the responsibility of date conversion
    - Static Methods
    - No more concatenations with Template Strings
    - Creating our ListModel

### We got the model, but what about the view?

    - Classes representing our Views
    - Extracting the Power of Template Strings
    - Bolting a rendering system
    - Building a Dynamic Template with the map function
    - Totalizing the volume in our Template with the reduce function

### Generalizing our View solution

    - Repeating code is never good
    - Code Inheritance and Reuse
    - builder vs. super

---

## Advanced JavaScript online course II: ES6, object orientation and project patterns

## Content

### How to know when the model has changed?

    - Did you remember to update the view? Me neither!
    - Less responsibility, better code
    - What if we update the view when the template changes?
    - The dynamism of "this"
    - Reflection API and the facets of this
    - Arrow function and its lexical scope

### Is there a liar model? The Proxy Project Pattern!

    - Model and reuse in projects
    - The Proxy design pattern
    - Reading traps
    - Writing Traps
    - Traps for methods

### What if someone created our proxies? The Factory Project Pattern

    - Isolating the complexity of creating proxies with the Factory Project Pattern
    - Our proxy is not 100% yet!
    - Isolating the complexity of associating the model with the view in the Bind class
    - Constructor returning instance of another type!
    - REST Parameters

### Importing negotiations

    - Infrastructure Prerequisite
    - Learning to climb our server
    - Available services
    - Ajax requests with the XMLHttpRequest object
    - Understanding the onreadystatechange event
    - Dealing with status codes
    - Performing response parse
    - Creating and Adding Incoming Negotiations
    - Dealing with possible server errors

### Combating Callback HELL with Promises

    - The problem of asynchronous life
    - Callback HELL and Pyramid of DOOM
    - The Promise Project Pattern
    - Dealing with errors
    - Pyramid of DOOM again? Of course not, Promise.all in it!
    - Flattening a list of arrays!
    - Isolating complexity in HttpService
    - Further reducing the complexity of our code

### Final considerations and bonus exercises

    - Have we reached the end?
    - Bonus surprise!
