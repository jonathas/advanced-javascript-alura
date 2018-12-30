# Alura - Advanced JavaScript

This is the code that I've developed following the courses. I've made some changes in the original code, so it's slightly different.

In order to run the project, enter the server directory, run:

```bash
npm install && npm start
```

Then enter the client directory and run:

```bash
npm install && npm run build
```

and open http://localhost:3000 in your browser

---

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

---

## Advanced JavaScript online course III: ES6, object orientation and project patterns

## Content

### Browser has database? Get to know IndexedDB!

- Browser has database? Get to know IndexedDB!
- Connecting to the aluraframe bank
- The triad of events
- Communicating with the bank via IDBDatabase
- Do we have a bank that does not have any tables? Meet the Object Store!
- The dual functionality of onupgradeneeded
- Viewing Bank and Object Stores through Chrome
- I want to write to an Object Store, but where is the transaction?
- Oops! Objects need to have unique identifiers in a store!
- Upgrade issues, again?
- Just believe seeing: listing objects in a store
- Dealing with cursors

### Managing our connection to the Factory pattern

- One connection or several?
- The ConnectionFactory class
- Promises again to help us
- Sharing the same connection
- The Module Pattern design pattern
- Monkey Patch: Great Powers Bring Great Responsibilities
- The power of closure
- Constants

### Standardizing Access to Data with the DAO Pattern

- We hide the complexity of the connection. And persistence operations?
- The DAO design pattern and asynchronous code handling
- "Promising" our DAO
- Combining design patterns
- A small inconvenience in our store
- Promises and their nuances

### Lapidating our application a little more

- Oops! We can not import duplicate negotiations
- Array.indexOf's trick and the powerful filter function
- Comparison between objects
- A trick to test for equality between objects
- Importing negotiations automatically
- How about an _init () method?
- Improving the readability and maintenance of our code

### Simplifying Ajax requests with the Fetch API

- xmlHttpRequest: Is there something else on higher level?
- Refactoring HttpService to use the Fetch API
- Dealing with requisition errors
- Compatibility with PolyFill

### Making our code even more compatible using Babel

- The Phantom of Incompatibility
- Transpilation: exorcising incompatibility
- Transpilation with Babel
- Babel, installation and build-step
- Compiling files in real time
- Debugging transpiled code

### Working with ES2015 modules!

- Global scope and script loading = headache
- ES2015 and modules
- Babel and module transpiling
- Refactoring our code with import and export
