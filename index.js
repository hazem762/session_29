"use strict";
/* let x = 5;

console.log(x); */
/*

Datatypes

    *primitive - value type
        number
        boolean
        string
        undefined
        null


    *Non-primitive - reference type
        object
        function
        array


    
    TypeScript :
        void
        any
        unknown
        Array
        tuple
        union
        alias
        interface




*/
/* let x: number = 10;
let y: string = "10";
let z: boolean = false;
let a: undefined = undefined;
let b: null = null; */
/* let x: object = {name: "mohamed"};
let y: number[] = [1,2,2,2,3];
let z: Array<number> = [1,7,8]; */
/* let x: () => number = function () {
    return 5;
}; */
// function myFun(): void {}
// let x: any = 5;
// x = "sdsd";
/* let x: unknown = "sfdsd";

x = 5.324;

if (typeof x == "number") {
    x.toFixed(2);
} */
// let x: [number, string] = [10, "hazem"];
// let x: string | number = 10;
// x = "zoma";
// let x: "A" | "B" | "C" = "B";
/* type User = {
    id : number,
    firstName: string,
    lastName: string,
    age: Number,
    userName? : string
};

let user1 : User = {
    id : 1,
    firstName : "Hazem",
    lastName : "Mohamed",
    age : 25,
    userName : "Hazem"
};

let user2 : User = {
    id : 2,
    firstName : "Ahmed",
    lastName : "Hassan",
    age : 41
};

function myFun (x : User) {
    x.firstName;
}

myFun(user1); */
/* type Person = {
    name : string,
    age : number
};

type Employee = {
    salary : number
};

let user: Person & Employee = {
    name: "Mohamed",
    age: 25,
    salary: 5000
}; */
// let userName: unknown = "Mohamed Atya";
// let a: string = userName as string;
/*

class
object
constructor
accessor specifier or accessor modifier


*/
class student {
    // Properties 
    /* public name: string = "";
    public age: number = 25;
    public gender: string = ""; */
    name = "";
    constructor(name) {
        this.name = name;
    }
    // Methods
    printName() {
        return this.name;
    }
}
let s1 = new student("Mohamed");
console.log(s1.printName());
//# sourceMappingURL=index.js.map