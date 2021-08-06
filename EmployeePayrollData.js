class EmployeePayrollData{
    id;
    salary;
    gender;
    startDate;

    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name(){return this._name;}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';    
    }
    get id(){ return this._id}
    set id(id){ 
        let idRegex = RegExp("^[1-9]{1}[0-9]{0,}$")
        if (idRegex.test(id)) {
            this._id = id
        }
        else{
            throw "Id is incorrect!"
        }
    }
    
    get salary(){return this._salary}
    set salary(salary){
        let salaryRegex= RegExp("^[1-9]{1}[0-9]{0,}$")
        if (salaryRegex.test(salary)) {
            this._salary = salary
        }
        else{
            throw "Salary is incorrect!"
        }
    }
   
    
    get gender(){return this._gender}
    set gender(gender){
        let genderRegex= RegExp("^[MFmf]{1}$")
        if (genderRegex.test(gender)) {
            this._gender = gender
        }
        else{
            throw "Gender is incorrect!"
        }
    }
    
    get startDate(){return this._startDate}
    set startDate(startDate){
        if (startDate <= new Date() ) {
            this._startDate = startDate
        }
        else{
            throw "date  is incorrect!"
        }
    }
    //method
    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = !this.startDate ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name='" + this.name + ", salary=" + this.salary + ","+
        "gender=" + this.gender + ", startDate=" + empDate;
    }

}

let employeePayrollData = new EmployeePayrollData(1,"Mark",30000);
console.log(employeePayrollData.toString());
let newEmployeePayrollData = new EmployeePayrollData(1,"Terrisa", 30000,"F",new Date());
console.log(newEmployeePayrollData.toString());
employeePayrollData.id = 0;
try{
employeePayrollData.name = "jeff";
console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}

try {
    newEmployeePayrollData.id = -5
    console.log(newEmployeePayrollData.toString());
} catch (error) {
    console.error(error);
}

try {
    newEmployeePayrollData.salary = -90  
    console.log(newEmployeePayrollData.toString());
} catch (error) {
    console.error(error);
}

try {
    newEmployeePayrollData.gender = "NA" 
    console.log(newEmployeePayrollData.toString());
} catch (error) {
    console.error(error);
}

try {
    newEmployeePayrollData.startDate = "2021-09-06T50:44:41.979Z"  
    console.log(newEmployeePayrollData.toString());
} catch (error) {
    console.error(error);
}