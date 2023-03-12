let countryName = document.querySelectorAll("p")
let information = document.querySelector(".universities")
let title = document.querySelector(".title")
let name1 = ''
for (let i = 0; i < countryName.length; i++) {
    countryName[i].addEventListener('click', () => {
        name1 = ''
        fetch("http://universities.hipolabs.com/search?country")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                data.map(({ country, name }) => {
                    if (country == countryName[i].innerHTML) {
                     title.innerHTML = countryName[i].innerHTML  
                     console.log(name);
                     name1+=name
                     information.innerHTML = name1
                    }
                })
            });
    })


}