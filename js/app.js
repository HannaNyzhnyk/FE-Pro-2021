console.table(countries);


// 1
function SimplifyCountries(countries){
    let newCountries = countries.map(function(country) {
        return {
            name: country.name,
            capital: country.capital,
            region: country.region
        }
    })
    return newCountries;
}

console.log(SimplifyCountries(countries))


// 2
function SortCountries(countries, property){
    let p1 = countries[0][property];
    if (typeof p1 === 'number') {
        return countries.sort(function(c1, c2) {
            let pvalue1 = c1[property];
            let pvalue2 = c2[property];
            return pvalue2 - pvalue1; 
        });
    } 
    else if (typeof p1 === 'string') {
        return countries.sort(function(c1, c2) {
            let pvalue1 = c1[property];
            let pvalue2 = c2[property];
            if (pvalue2 > pvalue1) {
                    return -1;
                 } else if (pvalue2 < pvalue1) {
                    return 1;
                 } else {
                     return 0;
                 }
        });
       
    }
}

console.log(SortCountries(countries, "name"));
console.log(SortCountries(countries, "area"));


// 3
function getAvarage(countries, property){
    return countries.reduce(function(acc, el) {
        let value = el[property];
        return acc + value;
      }, 0) / countries.length; 
}
console.log("CA:" + " " + getAvarage(countries, "area"));
