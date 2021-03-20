import countries from "../src/fetchCountries.js";
import countryCardTpl from "../src/country.hbs";
console.log(countryCardTpl)
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

function renderCountryCard(country) {
    const markup = countryCardTpl(country);
    console.log(markup)
    cardContainerRef.insertAdjacentHTML("afterbegin", countryCardTpl(country));
}

function errorFetch(error) {
    alert ('You enter an undefiend country')
}