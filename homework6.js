//1
class Reactengl {
    constructor(height, width) {
        this.height = height;
        this.width = width
    }
    get height() {
        return this._height
    }
    set height(value) {
        if (value < 0) {
            alert('height can`t be negative');
            return;
        }
        this._height = value;
    }

    get width() {
        return this._width
    }
    set width(value) {
        if (value < 0) {
            alert('width can`t be negative');
            return;
        }
        this._width = value;
    }

    area() {
        return this.height * this.width
    }

    param() {
        return (this.height + this.width) * 2
    }

    toString() {
        return JSON.stringify(this, null, 2)
    }
}
//2

class Employess {
    constructor(id, firstName, lastName, position, salary, workingHours) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
        this.workingHours = workingHours
    }

    get id() {
        return this._id
    }

    set id(value) {
        if (value < 0) {
            alert('id cant be negative');
            return
        }
        return this._id = value
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        if (typeof value !== 'string' || value.length < 2) {
            alert('invalid value for name');
            return
        }
        this._firstName = value
    }

    get lastName() {
        return this._lastName
    }

    set lastName(value) {
        if (typeof value !== 'string' || value.length < 2) {
            alert('invalid value for surname');
            return
        }
        this._lastName = value
    }

    get position() {
        return this._position
    }

    set position(value) {
        this._position = value
    }

    get salary() {
        return this._salary
    }

    set salary(value) {
        this._salary = value
    }

    get workingHours() {
        return this._workingHours
    }

    set workingHours(value) {
        this._workingHours = value
    }

    getAnnularSalary() {
        return this.salary * 12
    }

    raiseSalary(percent) {
        let newSalary = (this.salary * percent) / 100;
        return this.salary + newSalary
    }

    toString() {
        return JSON.stringify(this, null, 2)
    }
}

//3

class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender
    }

    get name() {
        return this._name
    }

    set name(value) {
        if (typeof value !== 'string' || value.length < 2) {
            alert('invalid value for name');
            return
        }
        this._name = value
    }
}

class Book {
    constructor(title, price, quantity, author) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.author = author;
    }

    get title() {
        return this._title
    }

    set title(value) {
        if (typeof value !== 'string' || value.length < 5) {
            alert('invalid value for title');
            return
        }
        this._title = value
    }

    get price() {
        return this._price
    }

    set price(value) {
        if (value < 0) {
            alert('price cant be negative');
            return
        }
        this._price = value;
    }

    get quantity() {
        return this._quantity
    }

    set quantity(value) {
        if (value < 0) {
            alert('quantity cant be negative');
            return
        }
        this._quantity = value
    }
    getProfit() {
        return this.price * this.quantity
    }

    toString() {
        return JSON.stringify(this, null, 2)
    }
}

//4

class Account {
    constructor(id, name, balance) {
        this._id = id;
        this.name = name;
        this.balance = balance
    }
    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }

    get balance() {
        return this._balance
    }

    set balance(value) {
        this._balance = value;
    }

    credit(amount) {
        return this.balance + amount
    }

    debit(amount) {
        if (amount < this.balance) {
            return this.balance - amount
        }
        alert('Amount exceeded balance')
    }

    transferTo(anotherAccount, amount) {
        if (amount < this.balance) {
            anotherAccount.balance = anotherAccount.credit(amount)
            this.balance = this.debit(amount);
            return anotherAccount;
        }
        alert('Amount exceeded balance')
    }

    identifyAccounts(accountFirst, accountSecond) {
        let firstAccount = JSON.stringify(accountFirst, null, 2);
        let secondAccount = JSON.stringify(accountSecond, null, 2);

        if (firstAccount === secondAccount) {
            alert('they are the same account');
            return;
        }

        alert('they are the not same account')
    }

    toString() {
        return JSON.stringify(this, null, 2)
    }
}

// 5

class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age
    }

    get firstName() {
        return this._firstName
    }
    set firstName(value) {
        if (typeof value !== 'string' || value.length < 2) {
            alert('invalid value for name');
            return
        }
        this._firstName = value
    }

    get lastName() {
        return this._lastName
    }

    set lastName(value) {
        if (typeof value !== 'string' || value.length < 2) {
            alert('invalid value for surname');
            return
        }
        this._lastName = value
    }

    get age() {
        return this._age
    }

    set age(value) {
        this._age = value
    }

    toString() {
        return JSON.stringify(this, null, 2)
    }
}

class Student extends Person {
    constructor(firstName, lastName, gender, age, year, fee, ...programs) {
        super(firstName, lastName, gender, age);
        this.programs = programs;
        this.year = year;
        this.fee = fee;
        this.createExamObj(programs)
    }

    createExamObj(programs){
        this.studentExamObj = {};
        for (let i = 0; i < programs.length; i++){
            this.studentExamObj[programs[i]] = false;
        }
    }

    get programs(){
        return this._programs;
    }
    set programs(value){
        if (Array.isArray(value)){
            this.createExamObj(value);
        }else {
            alert(`Not valid type for programs`)
        }
    }

    get year(){
        return this._year
    }

    set year(value){
        this._year = value
    }

    get fee(){
        return this._fee
    }

    set fee(value){
        this._fee = value
    }

    passExam(program, grade) {
        if (this.studentExamObj.hasOwnProperty(program) && grade >= 50) {
            this.studentExamObj[program] = true;
        }

        let paseedValue = false;

        for (let key in this.studentExamObj) {
            if (!this.studentExamObj[key]) {
                return false;
            }
            paseedValue = true;
        }

        if (paseedValue) {
            this.studentExamObj = {};
            this.year++
        }
    }

    toString() {
        return JSON.stringify(this, null, 2)
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay) {
        super(firstName, lastName, gender, age);
        this.pay = pay;
        this.program = program
    }

    get pay() {
        return this._pay;
    }

    set pay(value) {
        this._pay = value
    }

    get progarm() {
        return this._program
    }

    set progarm(value) {
        if (typeof value !== 'string') {
            alert('Entered value must be string');
            return
        }
        this._program = value
    }

    toString() {
        return JSON.stringify(this, null, 2)
    }
}
