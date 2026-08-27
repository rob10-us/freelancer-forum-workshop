/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function createFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];

  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];

  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;

  return {
    name,
    occupation,
    rate,
  };
} // #2

const freelancers = Array.from({ length: NUM_FREELANCERS }, createFreelancer);

// #3

function findAverageRate() {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.rate,
    0,
  );
  return total / freelancers.length;
}

// #4

const averageRate = findAverageRate();

// #5

function FreelancerRow(freelancer) {
  const $tr = document.createElement("tr");
  $tr.innerHTML = `
  <td>${freelancer.name}</td>
  <td>${freelancer.occupation}</td>
  <td>$${freelancer.rate}</td>
  `;
  return $tr;
}

// #6
function FreelancerRows() {
  const $tbody = document.createElement("tbody");
  const $freelancers = freelancers.map(FreelancerRow);
  $tbody.replaceChildren(...$freelancers);
  return $tbody;
}

// #7
function AverageRate() {
  const $p = document.createElement("p");
  $p.textContent = `The Average Rate of all freelancers is: $${averageRate.toFixed(2)}.`;
  return $p;
}

// #8
function render() {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
<h1> Freelancers</h1>
<p id="AverageRate"></p>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Occupation</th>
      <th>Rate</th>
    </tr>
  </thead>
  <tbody id="FreelancerRows"></tbody>
</table>
`;

  $app.querySelector("#AverageRate").replaceWith(AverageRate());
  $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());
}

render();
