let person = {
    name : "shamel" ,
    age : 22 ,
    city : "tunis"
}
console.log(person)

let dog = {
    name : "scooby doo",
    age : 7,
    breed : "Greet Dane"
}
console.log(dog.name)
console.log(dog.age)
console.log(dog.breed)

let book = {
    title : "The Great Gatsby",
    author : "F. Scott Fitzgerald",
    year: 1925,
    pages: 180
}
console.log("The book " + book.title + "was written by " + book.author + " in " + book.year)

let car ={
    make: "Toyota",
    model: "Camry",
    year: 2020
}
console.log(car["make"])
console.log(car["model"])
console.log(car["year"])

let user = {
    username : "john_doe",
    email : "john@example.com",
    isActive :true
}
let name1 = user.username
let userEmail = user.email
console.log(name1)
console.log(userEmail)

let movie = {
    title : "inception" ,
    director : "Christopher Nolan",
    year : 2010,
    rating : 8.8
}
console.log("Title : " + movie.title)
console.log("director : " + movie.director)
console.log("year : " + movie.year)
console.log("rating : " + movie.rating)

let student = {
    firstName: "Alice",
    lastName: "Johnson",
    grade: 11,
    gpa: 3.8
}
console.log (student.firstName + " " + student.lastName)

let product = {
    name: "Laptop" ,
    price: 999.99 ,
    inStock: true , 
    category: "Electronics"
}
console.log(product.name + " costs $" + product.price + " and is in the " + product.category + " category.")

let puppy ={
    name : "Gatsby" ,
    age : 1 ,
    breed : "Corgi"
}
puppy.name = "Gatsby The Great"
puppy.age = 2
console.log (puppy)

let phone ={
    brand : "Apple" , 
    model : "iPhone 12"
}
phone.color = "Black"
phone.storage = "128GB"
phone.price = 799
console.log (phone)

//I have an quetion here in line 92-95
let person_ = {
    name : "Sarah",
    age : 30,
    job : "Engineer"
}
let prop = "age"
console.log (person_[prop])

let inventory = {
    apples: 50 , 
    oranges: 30 ,
    bananas: 40
}
inventory.apples = 20
inventory.oranges = 10
inventory.bananas = 0
console.log (inventory)

let settings ={
    darkMode: true ,
    notifications: true ,
    language: "English"
}
if (settings.darkMode !== undefined){
    console.log ("darkMode exist .")
}
else {
    console.log ("darkMode does not exist")
}
if (settings.soundEffects !== undefined) {
    console.log("soundEffects exists.")
}
else {
    console.log("soundEffects does not exist.")
}

let scores ={
    math: 95 ,
    english: 88 ,
    science: 92
}
console.log (Object.keys(scores))
console.log (Object.values(scores))
console.log (Object.entries(scores))

let expenses ={
    rent: 1200 ,
    groceries: 300 ,
    utilities: 150 ,
    entertainment: 100
}
function getTotalExpenses (expenses){
    let arr = Object.values(expenses)
    let total = 0
    for (let i = 0 ; i < arr.length ; i++){
        total += arr[i]
    }
    return total
}
console.log(getTotalExpenses (expenses))

let data ={}
data["first name"] = "John"
data["last name"] = "Doe"
data["age"] = 25
console.log (data)

function createPerson (name , age , city){
    let createPerson1 ={}
    createPerson1.name = name
    createPerson1.age = age
    createPerson1.city = city
    return createPerson1
}
console.log(createPerson("Alice" , 25 , "NYC"))
console.log(createPerson("Bob" , 30 , "LA"))
console.log(createPerson("Carol" , 28 , "SF"))

function countProperties (obj){
    let count =0
    count = Object.keys(obj).length
    return count
}
console.log (countProperties({a: 1 , b: 2 , c: 3}))
console.log (countProperties({aname: "john"}))
console.log (countProperties({}))

function getObjectEntries (obj){
    return Object.entries(obj)
}
console.log (getObjectEntries({name: "John", age: 30, city: "NYC"}))

function updateProperty(obj, propName, newValue) {
    obj[propName] = newValue
    return obj
}
let user_ = {
    name: "John",
    age: 30,
    city: "NYC"
}
console.log(updateProperty(user_, "age", 31))
console.log(updateProperty(user_, "city", "LA"))

function combineObjects(obj1, obj2) {
    let combinedObject = {
        ...obj1,
        ...obj2
    }
    return combinedObject
}
console.log(combineObjects({ name: "John" }, { age: 30 }))
console.log(combineObjects({ x: 1, y: 2 }, { z: 3 }))

function findMax(obj) {
    let values = Object.values(obj)
    return Math.max(...values)
}
console.log(findMax({ math: 95, english: 88, science: 92 }))
console.log(findMax({ x: 10, y: 50, z: 30 }))

function hasProperty(obj, propName) {
    if (propName in obj){
        return true
    }
    return false
}
let user_1 = {
    name: "John",
    age: 30,
    email: "john@gmail.com"
}
console.log(hasProperty(user_1, "name"))
console.log(hasProperty(user_1, "phone"))
console.log(hasProperty(user_1, "email"))

function filterByValue(obj, minValue) {
    let entries = Object.entries(obj)
    let filteredEntries = entries.filter(function(a) {
        return a[1] >= minValue
    })
    return Object.fromEntries(filteredEntries)
}
console.log(filterByValue({ math: 95, english: 75, science: 88 },80))