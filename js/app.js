const renderCountries = countries => {
    console.log(countries);
    let htmlStr = '';
    for(let country of countries) {
        htmlStr += `<tr>
            <td>${country.region}</td>
            <td>${country.currencies.join(", ")}</td>
            <td>${country.languages}</td>
            <td><img src="${country.flag}" style="height: 50px;"></td>
        </tr>`;
    }

    console.log(htmlStr);
    document.querySelector('table > tbody').innerHTML = htmlStr;
}

const getData = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json()).then(data => {
            let countries = data.map(country => {
                return {
                    region: country.region,
                    flag: country.flag,
                    languages: country.languages.map(language => {
                        return language.name;
                    }),
                    currencies: country.currencies.map(currency => {
                        return currency.name;
                    })
                };
            });
            renderCountries(countries);
    });
}

document.addEventListener("DOMContentLoaded", () => { getData(); });

