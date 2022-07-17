// First class program
class hello{
    msg(){
    console.log("First class function");        
    }
    
}
let a = new hello();
a.msg();

// using constructor method

class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
        console.log("My first constructor method");
    }
    hello(){
        console.log("Rectangle " + this.height + " Rectangle " + this.width);
    }

}
let square = new Rectangle("40", "40");
square.hello();

//

class Car {
    constructor(name, year) {
    this.name = name;
    this.year = year;
    console.log("My first car");
    }
    code(){
        console.log("car name: " + this.name + " , " + " year: " + this.year);
    }
}
let a = new Car("Audi", "2022");
a.code();

//Javascript Object

let names = {fname: "Dillon", lname:"Megida"}
console.log(names.lname);

// Or 

class names{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
        console.log("Javascript Object");
    }
    new(){
        console.log(this.lname);
    }
}
let a = new names("Dillon", "Megida");
a.new();

//Javascript Function Constructor

class Animals{
    constructor(Pogo, Dog){
        this.pogo = Pogo;
        this.dog = Dog;
        console.log("Javascript Object");
    }
    new(){
        console.log(this.pogo + " can sing ");
    }
}
const dog = new Animals('pogo', 'Dog');
dog.new();



// Javascript Class

class Animals{
    constructor(Billi, Cat){
        this.pogo = Billi;
        this.dog = Cat;
        console.log("Javascript Object");
    }
    new(){
        console.log(this.pogo + " can sing ");
    }
}
const Cat = new Animals('Billi', 'Cat');
Cat.new();








