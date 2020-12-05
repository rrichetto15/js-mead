// Unix Epoch - January 1st 1970 00:00:00
const now = new Date();
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of Month: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);

const date1 = new Date('November 27 1991');
const date2 = new Date('July 6 1991');

const timestamp1 = date1.getTime();
const timestamp2 = date2.getTime();

timestamp1 < timestamp2 ? console.log(date1) : console.log(date2);