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

function Freelancer(freelancer) {
  const $tr = document.createElement("tr");
  $tr.innerHTML = `
  <td>${freelancer.name}</td>
  <td>${freelancer.occupation}</td>
  <td>${freelancer.rate}</td>
  `;
  return $tr;
}
