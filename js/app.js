$(document).ready(() => {

     
    $('.countries-select').on('change', e =>{
        let value = e.currentTarget.value;
        $.ajax({
            url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
            data: {
                code: value
            },
            headers: {
                "x-rapidapi-key": "416f158753msh7d5c5353b0536e6p161137jsnbf07d7ea1bef",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "useQueryString": true
            }
        }).then(data => {
            console.log(data);
            let leagues = data.response;
            renderOptionsleagues(leagues);
           
        })

    })

    $('.leagues-select').on('change', e =>{
        let value = e.currentTarget.value;
        $.ajax({
            url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
            data: {
                league: value,
                season: '2020'
            },
            headers: {
                "x-rapidapi-key": "416f158753msh7d5c5353b0536e6p161137jsnbf07d7ea1bef",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "useQueryString": true
            }
        }).then(data => {
            console.log(data);
            let standings = data.response[0].league.standings;
            renderOptionsStandings(standings);
        })

    })

    $('.standings-select').on('change', e =>{
        let value = e.currentTarget.value;
        $.ajax({
            url: 'https://api-football-v1.p.rapidapi.com/v3/players',
            data: {
                team: value,
                season: '2020'
            },
            headers: {
                "x-rapidapi-key": "416f158753msh7d5c5353b0536e6p161137jsnbf07d7ea1bef",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "useQueryString": true
            }
        }).then(data => {
            console.log("players", data);
            let players = data.response;
            renderPlayers(players);
        })

    })

    const renderOptionsCountry = (data) => {
        let selectStr = '<option value="">Not selected</option>';
        for(let el of data) {
           selectStr += `<option value="${el.code}">${el.name}</option>`;
        }
        $('.countries-select').html(selectStr);
    }

    const renderOptionsleagues = (data) => {
        let selectStr = '<option value="">Not selected</option>';
        for(let el of data) {
           selectStr += `<option value="${el.league.id}">${el.league.name}</option>`;
        }
        $('.leagues-select').html(selectStr);
    }

    const renderOptionsStandings = (data) => {
        console.log("renderOptionsStandings",data);
        let selectStr = '<option value="">Not selected</option>';
        for(let el of data[0]) {
           selectStr += `<option value="${el.team.id}">${el.team.name}</option>`;
        }
        $('.standings-select').html(selectStr);
    }

    function renderPlayers(data) {
        console.log("renderPlayers",data);
        let htmlStr = '';
        for(let el of data) {
            htmlStr += `<tr>
            <td>${el.player.name}</td>
        </tr>`;
        }
        if(!htmlStr.length) {
            htmlStr = '<tr><td colspan="8" class="text-center">Не найдено</td></tr>'
        }
        $('table > tbody').html(htmlStr);
   }

    $.ajax({
        url: 'https://api-football-v1.p.rapidapi.com/v3/countries',
        headers: {
            "x-rapidapi-key": "416f158753msh7d5c5353b0536e6p161137jsnbf07d7ea1bef",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "useQueryString": true
        }
    }).then(data => {
        console.log("got counties", data);
        countries = data.response;
        renderOptionsCountry(countries);
    })
    
});

