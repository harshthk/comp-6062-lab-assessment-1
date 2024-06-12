const myFullName = "Harsh Thakor";
const myStudentNumber = "1091962";

console.log(`${myFullName} - ${myStudentNumber}`);

const header = document.querySelector("#headerContent");
header.innerHTML = `${myFullName} - ${myStudentNumber}`;
header.classList.add("headingPrimary");