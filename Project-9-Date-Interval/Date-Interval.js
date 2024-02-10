function Calculate() {    

// let minute = 1000 * 60;
// let hour = minute * 60;
// let day = hour * 24;
// let year = day * 365;

let Date1 = new Date();
document.getElementById("from").value;

let Date2 = new Date();
document.getElementById("to").value;

let dif = Math.abs(Date1.getTime() - Date2.getTime());

let day = 1000 * 64 * 64 * 24;

let days = Math.round(dif/day);
let months = Math.round(days/31);
let years = Math.round(months/12);



}
