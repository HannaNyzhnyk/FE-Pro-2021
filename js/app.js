window.onload = function() {
    window.courses = null;
    let now = new Date();
    const selectDate  = () => {
        $('#date_input').val(now.toISOString().slice(0, 10));
        $('#date_input').change(function(e) {
            var dateString = $(e.currentTarget).val();
            var date = new Date(dateString)
            if (date < now) {
                getData(date);  
            } else {
                alert("Это будущий период");
            }
                    
        });
    }

    const renderCourses = сourses => {
        let htmlStr = '';
        for(let сourse of сourses) {
            htmlStr += `<tr>
            <td>${сourse.currency}</td>
            <td>${сourse.rate}</td>
            <td>${сourse.exchangedate}</td>
        </tr>`;
        }
        
        $('table > tbody').html(htmlStr);
    };

    const getData = (date) => {
        let courses = [];
        function format(date) {
            var d = date.getDate();
            var m = date.getMonth() + 1;
            var y = date.getFullYear();
            return '' + y + (m<=9 ? '0' + m : m) + (d <= 9 ? '0' + d : d);
        }        
        let formatedDate = format(date);
        fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date=${formatedDate}`)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                courses = data.map(сourse => {
                    let {txt, rate, exchangedate} = сourse;
                    return {
                        exchangedate: exchangedate,
                        rate: rate || 0,
                        currency: txt
                    };
                });
                window.courses = courses;
                renderCourses(courses);
            });
    }
    selectDate();
    getData(now);

}

