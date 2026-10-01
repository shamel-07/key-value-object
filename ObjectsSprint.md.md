# 🚀 JavaScript Objects Sprint
## Key-Value Pairs & Object Fundamentals

---

## Welcome to Your Practice Sprint!

This sprint contains hands-on exercises to reinforce what you learned about objects in JavaScript. You'll practice creating objects, accessing properties, modifying data, and using Object methods (Object.keys, Object.values, Object.entries).

**Structure:**
- **Level 1 (Basic):** 8 foundational exercises - creating and accessing objects
- **Level 2 (Intermediate):** 8 combination exercises - modifying and working with objects
- **Level 3 (Advanced):** 8 challenge exercises - complex object operations
- **Bonus Challenge:** Complete project combining all concepts

---

## ⏱️ Suggested Timeline

**Total Time:** 2-3 hours

- Level 1: 45 minutes
- Level 2: 60 minutes
- Level 3: 45 minutes

*Take breaks between levels!*

---

## 💡 Tips for Success

- **Test your code:** Use browser console (F12) or an online editor
- **Format properly:** Put each property on its own line
- **Use meaningful keys:** Name properties descriptively
- **Test both notations:** Practice dot and bracket notation
- **Don't rush:** Understanding is more important than speed

---

# Level 1: Basic Exercises
**BEGINNER FRIENDLY**

**Goal:** Practice creating objects and accessing properties with dot notation.

---

## Exercise 1.1: Create Your First Object

Create an object called `person` with these properties:
- name: your name
- age: your age
- city: your city

Then print the entire object.

**✓ Requirements:**
- Use curly braces { }
- Each property on its own line
- Use proper formatting

---

## Exercise 1.2: Access with Dot Notation

Create an object called `dog` with these properties:
- name: "Scooby Doo"
- age: 7
- breed: "Great Dane"

Then:
1. Print the dog's name using dot notation
2. Print the dog's age using dot notation
3. Print the dog's breed using dot notation

**✓ Requirements:**
- Use objectName.propertyName syntax
- Print each property separately

---

## Exercise 1.3: Create a Book Object

Create an object called `book` with these properties:
- title: "The Great Gatsby"
- author: "F. Scott Fitzgerald"
- year: 1925
- pages: 180

Then print a sentence using the properties: "The book [title] was written by [author] in [year]."

**✓ Requirements:**
- Create the object with proper formatting
- Use dot notation to access properties
- Concatenate into a sentence

---

## Exercise 1.4: Access with Bracket Notation

Create an object called `car` with these properties:
- make: "Toyota"
- model: "Camry"
- year: 2020

Then access and print each property using bracket notation.

**✓ Requirements:**
- Use objectName["propertyName"] syntax
- Remember: property names must be strings in brackets
- Print each property

---

## Exercise 1.5: Store Property in Variable

Create an object called `user` with these properties:
- username: "john_doe"
- email: "john@example.com"
- isActive: true

Then:
1. Store the username in a variable called `name`
2. Store the email in a variable called `userEmail`
3. Print both variables

**✓ Requirements:**
- Use dot notation to access properties
- Store in separate variables
- Print the variables

---

## Exercise 1.6: Movie Object

Create an object called `movie` with these properties:
- title: "Inception"
- director: "Christopher Nolan"
- year: 2010
- rating: 8.8

Print each property with a label (e.g., "Title: Inception").

**✓ Requirements:**
- Create object with proper formatting
- Use dot notation to access
- Format output with labels

---

## Exercise 1.7: Student Object

Create an object called `student` with these properties:
- firstName: "Alice"
- lastName: "Johnson"
- grade: 11
- gpa: 3.8

Then print the student's full name by combining firstName and lastName.

**✓ Requirements:**
- Create the object
- Access both name properties
- Concatenate them with a space

---

## Exercise 1.8: Product Object

Create an object called `product` with these properties:
- name: "Laptop"
- price: 999.99
- inStock: true
- category: "Electronics"

Print a message: "[name] costs $[price] and is in the [category] category."

**✓ Requirements:**
- Create object with proper formatting
- Use dot notation
- Format the output message

---

# Level 2: Intermediate Exercises
**MORE PRACTICE**

**Goal:** Practice modifying objects, adding properties, and using bracket notation with variables.

---

## Exercise 2.1: Modify Object Properties

Create an object called `puppy` with these properties:
- name: "Gatsby"
- age: 1
- breed: "Corgi"

Then:
1. Change the name to "Gatsby The Great"
2. Change the age to 2
3. Print the modified object

**✓ Requirements:**
- Use dot notation to modify
- Change both properties
- Print the final object

---

## Exercise 2.2: Add New Properties

Create an object called `phone` with these properties:
- brand: "Apple"
- model: "iPhone 12"

Then add these new properties:
- color: "Black"
- storage: "128GB"
- price: 799

Print the final object.

**✓ Requirements:**
- Start with 2 properties
- Add 3 new properties using dot notation
- Print the complete object

---

## Exercise 2.3: Bracket Notation with Variables

Create an object called `person` with these properties:
- name: "Sarah"
- age: 30
- job: "Engineer"

Then:
1. Create a variable `prop` with value "age"
2. Use bracket notation with the variable to access the age
3. Print the result

**✓ Requirements:**
- Use bracket notation with a variable
- Access the property dynamically

---

## Exercise 2.4: Update Product Inventory

Create an object called `inventory` with these properties:
- apples: 50
- oranges: 30
- bananas: 40

Then:
1. Increase apples by 20
2. Decrease oranges by 10
3. Set bananas to 0 (sold out)
4. Print the updated inventory

**✓ Requirements:**
- Modify each property
- Use proper arithmetic operations
- Print the final object

---

## Exercise 2.5: Property Checker

Create an object called `settings` with these properties:
- darkMode: true
- notifications: true
- language: "English"

Then:
1. Check if `darkMode` exists (check if not undefined)
2. Check if `soundEffects` exists
3. Print appropriate messages for each

**✓ Requirements:**
- Use !== undefined to check existence
- Test with existing and non-existing properties
- Print messages based on results

---

## Exercise 2.6: Object Keys and Values

Create an object called `scores` with these properties:
- math: 95
- english: 88
- science: 92

Then:
1. Use `Object.keys(scores)` to get an array of the property names and print it.
2. Use `Object.values(scores)` to get an array of the scores and print it.
3. Use `Object.entries(scores)` to get an array of [key, value] pairs and print it.

**✓ Requirements:**
- Use Object.keys(), Object.values(), and Object.entries()
- Print each result to see the structure

---

## Exercise 2.7: Calculate Total with Object.values

Create an object called `expenses` with these properties:
- rent: 1200
- groceries: 300
- utilities: 150
- entertainment: 100

Create a function called `getTotalExpenses` that accepts an object like `expenses`, uses `Object.values()` to get all values as an array, then uses to sum them and return the total.

Test with your expenses object and print the result.

**✓ Requirements:**
- Function name: `getTotalExpenses`
- Use Object.values(obj) to get an array of numbers
- Return and print the total

---

## Exercise 2.8: Dynamic Property Creation

Create an empty object called `data`.

Then use bracket notation to add these properties:
- "first name": "John"
- "last name": "Doe"
- "age": 25

Print the object.

**✓ Requirements:**
- Start with empty object {}
- Use bracket notation (required for spaces in keys)
- Add all three properties
- Print the final object

---

# Level 3: Advanced Exercises
**CHALLENGE**

**Goal:** Solve complex problems involving objects, functions, and Object methods.

---

## Exercise 3.1: Object Builder Function

Create a function called `createPerson` that accepts name, age, and city as parameters, then returns an object with those properties.

Test it by creating 3 different person objects.

**✓ Requirements:**
- Function name: `createPerson`
- Three parameters
- Return an object
- Test with: createPerson("Alice", 25, "NYC"), createPerson("Bob", 30, "LA"), createPerson("Carol", 28, "SF")

---

## Exercise 3.2: Property Counter

Create a function called `countProperties` that accepts an object and returns the number of properties it has.

**✓ Requirements:**
- Function name: `countProperties`
- One parameter: `obj`
- Use Object.keys(obj).length to get the count
- Return the count
- Test with: {a: 1, b: 2, c: 3}, {name: "John"}, {}

---

## Exercise 3.3: Object to Entries

Create a function called `getObjectEntries` that accepts an object and returns an array of its key-value pairs in the format [[key, value], ...].

Use `Object.entries(obj)` inside the function and return the result.

**✓ Requirements:**
- Function name: `getObjectEntries`
- One parameter: `obj`
- Use Object.entries(obj)
- Return the array (don't print inside the function)
- Test with: {name: "John", age: 30, city: "NYC"} and print the return value

---

## Exercise 3.4: Update Property Function

Create a function called `updateProperty` that accepts an object, a property name (as a string), and a new value, then updates that property.

Example: `updateProperty(user, "age", 31)` should update user.age to 31

**✓ Requirements:**
- Function name: `updateProperty`
- Three parameters: `obj`, `propName`, `newValue`
- Use bracket notation to update
- Test by creating an object and updating different properties

---

## Exercise 3.5: Merge Two Objects

Create a function called `combineObjects` that accepts two objects and returns a new object containing all properties from both.

Use the spread operator: return `{ ...obj1, ...obj2 }`.

Example: `combineObjects({a: 1}, {b: 2})` should return `{a: 1, b: 2}`

**✓ Requirements:**
- Function name: `combineObjects`
- Two parameters: `obj1` and `obj2`
- Use spread operator to merge
- Return the combined object (do not mutate the originals)
- Test with: ({name: "John"}, {age: 30}), ({x: 1, y: 2}, {z: 3})

---

## Exercise 3.6: Find Highest Value

Create a function called `findMax` that accepts an object with numeric values and returns the highest value.

Use `Object.values(obj)` to get an array of values, then `Math.max(...values)` to get the maximum.

Example: `findMax({a: 5, b: 12, c: 3})` should return `12`

**✓ Requirements:**
- Function name: `findMax`
- One parameter: `obj`
- Use Object.values(obj) and Math.max()
- Return the highest number
- Test with: {math: 95, english: 88, science: 92}, {x: 10, y: 50, z: 30}

---

## Exercise 3.7: Key Exists Function

Create a function called `hasProperty` that accepts an object and a property name (as a string), then returns true if the property exists, false otherwise.

**✓ Requirements:**
- Function name: `hasProperty`
- Two parameters: `obj` and `propName`
- Check if property exists
- Return boolean
- Test with: (user, "name"), (user, "phone"), (user, "email")

---

## Exercise 3.8: Filter Object by Value

Create a function called `filterByValue` that accepts an object with numeric values and a minimum value, then returns a new object containing only the properties whose value is greater than or equal to the minimum.

Use `Object.entries(obj)` to get pairs, `.filter()` to keep only those with value >= minValue, then `Object.fromEntries()` to build the new object.

Example: `filterByValue({a: 10, b: 5, c: 15}, 10)` should return `{a: 10, c: 15}`

**✓ Requirements:**
- Function name: `filterByValue`
- Two parameters: `obj` and `minValue`
- Use Object.entries(), .filter(), and Object.fromEntries()
- Return the filtered object
- Test with: ({math: 95, english: 75, science: 88}, 80)

---

# Extra: For Loops with Objects (Intermediate)
**ITERATION PRACTICE**

**Goal:** Practice iterating through objects using `for...in` and `for...of` with object methods.

---

## Extra Exercise F1: Basic for...in Loop

Create an object called `salary` with these properties:
- base: 3000
- bonus: 500
- tax: -400

Use a **for...in** loop to iterate through the object and print each key and its value like:
`"base: 3000"`

**✓ Requirements:**
- Use `for (let key in salary)`
- Access value using bracket notation `salary[key]`
- Print each key-value pair

---

## Extra Exercise F2: for...in with Logic

Create an object called `inventory` with these properties:
- laptop: 5
- mouse: 0
- keyboard: 10
- monitor: 0

Use a **for...in** loop to print only the items that are in stock (value > 0).

**✓ Requirements:**
- Use a `for...in` loop
- Add an `if` statement to check if the value is greater than 0
- Print only the keys of in-stock items

---

## Extra Exercise F3: for...of with Object.keys()

Create an object called `car` with these properties:
- make: "Tesla"
- model: "Model 3"
- year: 2023

Use `Object.keys(car)` to get an array of keys, then use a **for...of** loop to print each key in uppercase.

**✓ Requirements:**
- Use `Object.keys(obj)`
- Use `for (let key of keysArray)`
- Use `.toUpperCase()` when printing

---

## Extra Exercise F4: for...of with Object.entries()

Create an object called `prices` with these properties:
- bread: 2.50
- milk: 1.20
- cheese: 4.00

Use `Object.entries(prices)` and a **for...of** loop with **destructuring** to print a message for each item:
`"The price of bread is $2.50"`

**✓ Requirements:**
- Use `Object.entries(prices)`
- Use `for (let [item, price] of ...)`
- Format the output string correctly

---

## Extra Exercise F5: Standard for Loop Over Array

Create an array called `students` with three objects, each having `name` and `age` properties:
```js
{ name: "Alice", age: 20 }
{ name: "Bob", age: 22 }
{ name: "Charlie", age: 19 }
```

Use a **standard for loop** to go through the `students` array and print a message for each student like:
`"Alice is 20 years old"`.

**✓ Requirements:**
- Use `for (let i = 0; i < students.length; i++)`
- Inside the loop, read `students[i].name` and `students[i].age`
- Print one message per student

---

## Extra Exercise F6: Count Active Users with for...of

Create an array called `users` with these objects:
```js
{ username: "anna", isActive: true }
{ username: "mark", isActive: false }
{ username: "sara", isActive: true }
{ username: "john", isActive: false }
```

Use a **for...of** loop to count how many users have `isActive === true`, then print:
`"Active users: X"`.

**✓ Requirements:**
- Use `for (let user of users)`
- Check `user.isActive`
- Increment a counter when a user is active
- Print the final count

---

## Extra Exercise F7: Find First Match with for Loop

Create an array called `products` with objects that have `name` and `price`:
```js
{ name: "Book", price: 10 }
{ name: "Phone", price: 500 }
{ name: "Pen", price: 2 }
```

Use a **for loop** to find the **first product** with a `price` greater than `100`.  
When you find it, print its name and stop the loop.

**✓ Requirements:**
- Use a `for` loop with an index
- Check `products[i].price > 100`
- When found, print the product name and use `break` to stop
- If no product is found, print `"No expensive product found"`

---

## Extra Exercise F8: Sum Object Values with for...of

Create an object called `points` with numeric values:
```js
{ a: 5, b: 10, c: 15, d: 20 }
```

Use `Object.values(points)` to get an array of the numbers, then use a **for...of loop** to sum them and print the total.

**✓ Requirements:**
- Use `Object.values(points)` to get an array of numbers
- Use a `for (let point of pointsArray)` loop to add them into `total`
- Print the final sum (should be 50)

---


# 🎁 Bonus Challenge
**EXPERT LEVEL**

## Bonus: Complete Project - Student Grade Manager

Build a comprehensive student grade management system using objects.

**Create these functions:**

1. **`createStudent(name, id)`**
   - Returns a student object with name, id, and empty grades object
   - Example: `{name: "Alice", id: 101, grades: {}}`

2. **`addGrade(student, subject, score)`**
   - Adds a grade to the student's grades object
   - Use bracket notation to add subject with score

3. **`calculateAverage(student)`**
   - Calculates and returns the average of all grades
   - Use Object.values(student.grades) to get the scores, then .reduce() to sum and divide by count
   - Return average rounded to 1 decimal place

4. **`getLetterGrade(average)`**
   - Converts numeric average to letter grade
   - 90-100: "A", 80-89: "B", 70-79: "C", 60-69: "D", below 60: "F"

5. **`printTranscript(student)`**
   - Prints complete transcript with all grades, average, and letter grade
   - Use Object.entries(student.grades) to get [subject, score] pairs for formatting the grades section
   - Format:
   ```
   Student: Alice (ID: 101)
   Grades:
     math: 95
     english: 88
     science: 92
   Average: 91.7
   Letter Grade: A
   ```

**Test your system:**
1. Create a student
2. Add multiple grades
3. Calculate average
4. Print complete transcript

**✓ Requirements:**
- Implement all 5 functions
- Use objects to store student data
- Use Object.values() and Object.entries() (no for loops)
- Handle empty grades gracefully
- Format output clearly
- Test with multiple students

---

# 🎯 Next Steps

## You've Completed the Sprint!

**What you've learned:**
- ✓ Creating objects with key-value pairs
- ✓ Accessing properties with dot notation
- ✓ Accessing properties with bracket notation
- ✓ When to use dot vs bracket notation
- ✓ Modifying existing properties
- ✓ Adding new properties dynamically
- ✓ Checking if properties exist
- ✓ Using Object.keys(), Object.values(), and Object.entries()
- ✓ Iterating with for...in and for...of loops
- ✓ Using spread and Object.fromEntries() with objects
- ✓ Working with objects in functions

**Keep Practicing:**
- Try creating objects for real-world entities
- Practice both dot and bracket notation
- Build functions that work with objects
- Create systems that manage related data

---

# Great Job! 🎉

You've completed the JavaScript Objects Sprint! Objects are fundamental to organizing and managing data in JavaScript. You now have the skills to work with structured data effectively.

**Keep coding, keep learning, and remember: practice makes perfect!**

Happy Coding! 💻
