//UC1
let employeeCheck =  Math.floor((Math.random() * 10) % 2);
const IS_ABSENT = 0;
if (employeeCheck == IS_ABSENT) {
    console.log("Employee is Absent!");
} else {
    console.log("Employee is Present!");
}
//UC3
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(employeeCheck){
        switch (employeeCheck){
            case IS_PART_TIME : 
                return PART_TIME_HOURS;
            case IS_FULL_TIME :
                return FULL_TIME_HOURS;
            default :
                return  0;               
        }
}
employeeCheck =  Math.floor((Math.random() * 10) % 3);
let empHrs = 0
empHrs=getWorkingHours(employeeCheck)
let empWage = empHrs * WAGE_PER_HOUR;
console.log("UC3 Employee Wage :"+ empWage)

//UC5
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 10;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
        totalWorkingDays < NUM_OF_WORKING_DAYS){
            totalWorkingDays++
            employeeCheck =  Math.floor((Math.random() * 10) % 3);
            totalEmpHrs += getWorkingHours(employeeCheck)
        }
empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC5 - Total Days: " +totalWorkingDays+"Total Hours :"+totalEmpHrs+" Employee Wage :"+ empWage)