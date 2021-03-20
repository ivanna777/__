import countries from "../src/fetchCountries.js";
import countryCardTpl from "../src/country.hbs";
// import { notice, defaultModules } from '@pnotify/core';
// const debounce = require('lodash.debounce');
// const countryCardTpl = require("../src/country.hbs");

const cardContainerRef = document.querySelector('.countries-cards-container');
const searchRef = document.querySelector('.js-searchCountry');

searchRef.addEventListener('submit', showCountries);

function showCountries(e){
    e.preventDefault();

    const form = e.currentTarget;
    const searchQuery = form.elements.query.value;

    countries.fetchCountries(searchQuery)
    .then(renderCountryCard)
    .catch(errorFetch)
    .finally(() => form.reset());
}

function renderCountryCard() {
    cardContainerRef.insertAdjacentHTML("afterbegin", countryCardTpl);
}

function errorFetch(error) {
    alert ('You enter an undefiend country')
}