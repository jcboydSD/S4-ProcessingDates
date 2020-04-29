let inputDate = '12/2/2019';
let month;
let day;
let year;
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const displayDateParts = function(date) {
    let indexA = date.indexOf("/");
    let indexB = date.lastIndexOf("/");
    month = date.slice(0,indexA);
    day = date.slice(indexA + 1, indexB);
    year = date.slice(indexB + 1, date.length);
    console.log(`MM = ${month}, DD = ${day}, YY = ${year}`);
};

const displayStandardFormat = function() {
        console.log(`standard format: ${months[month-1]} ${day}, ${year}`);
};

const displayEuroFormat = function() {
    console.log(`Euro format: ${day}/${month}/${year}`);
};

const displayMilitaryFormat = function() {
    console.log(`military format: ${day} ${months[month-1]} ${year}`);
};

console.log(`original data: ${inputDate}`);
displayDateParts(inputDate);
displayStandardFormat();
displayEuroFormat();
displayMilitaryFormat();
