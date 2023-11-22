const axios = require('axios');

const { infoCleaner } = require('../helpers/funciones.helpers');

const { Country } = require('../db');

const uploadCountries = async () => {
    try {
        const countries = (await axios.get('http://localhost:5000/countries')).data
         const countriesCleaner = infoCleaner(countries);
       return await countriesCleaner.forEach(country => { Country.create(country); });
        
    } catch (error) {
        console.error(error);
    }
};

module.exports = uploadCountries;