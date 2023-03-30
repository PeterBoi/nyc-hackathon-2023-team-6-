// for create page
let name = document.querySelector(".inputName");
let problemDes = document.querySelector(".inputProblem");
let charge1 = document.querySelector(".charge1");
let charge2 = document.querySelector(".charge2");
let charge3 = document.querySelector(".charge3");
let charge4 = document.querySelector(".charge4");
let email = document.querySelector(".inputEmail");
let cash = document.querySelector("select");
let submit = document.querySelector(".submit");
let display = document.querySelector(".display");
let displayName = document.querySelector(".displayName");
let displayProblem = document.querySelector(".displayProblem");
let displayBounty = document.querySelector(".displayBounty");
let displayEmail = document.querySelector(".displayEmail");
let list = document.querySelector(".list");
let problem0 = {
  name: "Batman",
  problem: "How can I get funding for Justice League?",
  email: "notbrucewayne@gmail.com",
  cash: "$51-$100",
}
let problem1 = {
  name: "Orbe Pierre",
  problem: "Students are not going to class on time.",
  email: "DWC@gmail.com",
  cash: "$51-$100",
}

let problem2 = {
  name: "Jeffery Prince",
  problem: "Need to have my students clock in for work on time.",
  email: "prince@gmail.com",
  cash: "$20-$50",
}

let problem3 = {
  name: "John Doe",
  problem: "Students not going to class on time.",
  email: "johndoe@gmail.com",
  cash: "$1-$5",
}
function emptyDisplay() {
  list.innerHTML = "";

}
let problems = [problem0, problem1, problem2, problem3];
function displayProblems() {
  problems.forEach(function(problem, i) {
    list.insertAdjacentHTML('beforeend', `<li class="P">
    <p>Name: ${problem.name}</p>
    <p>Problem Description: ${problem.problem}</p>
 <p>Contact Them: <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${problem.email}" target="_blank">Claim Bounty</a>
    <p>Award Range: ${problem.cash}</p>
    <p>Email: ${problem.email}</p>
  </li>`)
  });
}
function addProblems() {
  let newProblem = {
    name: name.value,
    problem: problemDes.value,
    email: email.value,
    cash: cash.value,
  }
  problems.push(newProblem);
  console.log(problems);
}
submit.onclick = function() {
  emptyDisplay();
  addProblems();
  displayProblems();
}
displayProblems();
// for create page
