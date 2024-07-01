// Create an object representing a book with properties like title,author and year. Access and log each property to the console.
const person={
    title:"tanzina",
    author:"Tanzina Tabassum",
    age:20,
}
console.log(person.title);
console.log(person.author);
console.log(person.age);

// Modify the properties of an existing object and log the updated object to the console.
const person1={
    firstName:"Tanzina",
    lastName:"Tabassum",
    age:20,
}
person1.nationality="English";
console.log(person1);

//Add a method to the book object that returns a string with the books title and author.Call the method and log the result.

const book={
    author:"Paulo Coehlo",
    title: "Walk to remember",
 book1:function(){
    return this.author+""+this.title;
 }
}
console.log(book.book1());

//Create an object representing a person with properties for first name and last name.Add a method that returns the perons full name.

const person2={
    firstName:"tanzina",
    lastName:"tabassum",
 fullName:function(){
      return this.firstName+""+this.lastName;
}
}
console.log(person2.fullName());

//Write a function that takes an object as an argument and returns a string listing all the objects properties and their values.
const myObject={
    name:"taznina",
    age:"20",
     nationality:"english"
};
let keys=Object.keys(myObject)
{
 console.log(keys)

}
let values=Object.values(myObject)
{
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
}
let entries=Object.entries(myObject)
{
    console.log(entries[2][1])
 }
 // Create a constructor function for creating book objects with properties title,author and year. Create two book objects and log them to the console.
  function book1(title,author,year){
    this.title=title,
    this.author=author,
    this.year=year,
    this.book=function(){
        return this.title+""+this.author+""+this.year;
        // console.log("your book name (this.title)")
    }
  }
  const mybook2= new book1("secrets of divine","Helwa",2020);
  const mybook3 =new book1("A walk to remember","Paulo Coehlo",2015);
  console.log(mybook2.book())
//   mybook2.book();
//   mybook3.book();
//Add a method to the constructor function that returns a desrcription of the book.Create book object and call the method.
function Book(title,author,year){
    this.title=title,
    this.author=author,
    this.year=year
}
const book4=new Book("A walk to remember","Helwa",2020);
Book.prototype.getName=function(){
    return this.title+""+this.author+""+this.year;
}
console.log(book4.getName())
//The End

