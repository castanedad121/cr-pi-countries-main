const infoCleaner = function (array) {
    return array.map((country) => {
       return {
        id: country.cca3,
        nameCommon: country.name.common,
        nameOfficial: country.name.official,
        flags: country.flags.png,
        coatOfArms: country.coatOfArms.png ? country.coatOfArms.png : "",                 
        continents: country.region,
        capital: country.capital? country.capital[0] : "Capital does not exist",                  
        subregion: country.subregion? country.subregion : "Subbregion does not exist",                
        area: country.area,
        population: country.population,                
       };
     });
     
   };
   
   module.exports = { infoCleaner };
   