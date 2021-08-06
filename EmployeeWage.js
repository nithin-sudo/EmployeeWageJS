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

//UC6
function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
        totalWorkingDays < NUM_OF_WORKING_DAYS){
            totalWorkingDays++
            employeeCheck =  Math.floor((Math.random() * 10) % 3);
            empHrs = getWorkingHours(employeeCheck);
            totalEmpHrs += empHrs;
            empDailyWageArr.push(calcDailyWage(empHrs));
            empDailyHrsMap.set(totalWorkingDays,empHrs);
            empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
        }
        console.log(empDailyWageMap);
empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Days: " +totalWorkingDays+"Total Hours :"+totalEmpHrs+" Employee Wage :"+ empWage)

//UC 7A
//Array HElper Functions

let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days:" + totalWorkingDays +
            " Total Hrs:" + totalEmpHrs + " Emp Wage:" + totEmpWage);


function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce: "+empDailyWageArr.reduce(totalWages,0));

//UC 7B - Show the Day along with Daily Wage Using Array map helper functions
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
} 
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C - show Days when Full time wage of 160 were earned
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC 7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

//UC 7D - Find the first occurrence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7D - First time Fulltime wage was earned on Day: "+
            mapDayWithWageArr.find(findFulltimeWage));

//UC 7E - check if Every Element of Full Time Wage is truely holding Full time wage
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7E - Check all Element have Full Time Wage : "+fullDayWageArr.every(isAllFulltimeWage));

//UC 7F - Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7F - Check If Any Part Time Wage : "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G - Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G - Number of Days Emp Worked: "+empDailyWageArr.reduce(totalDaysWorked,0));

//UC 8 Map Functions
console.log("UC 8A - Emp Wage Map totalHrs: "+Array.from(empDailyWageMap.values()).reduce(totalWages,0))

//UC 9 Arrow Functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let totalHours = Array.from(empDailyHrsMap.values())
                    .filter(dailyHours => dailyHours > 0)
                    .reduce(findTotal, 0);
let totalSalary = empDailyWageArr
                    .filter(dailyWage => dailyWage > 0)
                    .reduce(findTotal, 0);
console.log ("UC 9A - Emp Wage withArrow: " + "Total Hours : " + totalHours + "Total Wages: " + totalSalary);


let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach( (value,key,map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value ==4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: "+fullWorkingDays);
console.log("Part Working Days: "+partWorkingDays);
console.log("Non Working Days: "+nonWorkingDays);