//1.Добавить поле куда можно внести город и при запросе учитывать город который прописан в этом поле
//2. Сделать обновление при таймере, сделать таймер который раз в 30 секунд будет следить за погодой
//3. сделать чтобы функцию которая отследила когда был последний запрос и оратиться заново только черезмин минута после последнего запроса


const key = "d577448d87e9fc5a0ec097f0604a72dd"

// let city="Chisinau"

//const CURENT_WEATER_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`

function loadWeatherData() {
        let city=document.getElementById('city').value;
        console.log(city)
        const CURENT_WEATER_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${key}&units=metric`
     let xhr = new XMLHttpRequest()

    xhr.open("GET", CURENT_WEATER_URL)

    xhr.onload = function () {
        
        let data = JSON.parse(xhr.responseText)
        let temp = data.main.temp
        let name=data.name
        let wind = data.wind.speed
        let description=data.weather[0].description
        let icon=data.weather[0].icon
        
        let html=document.createElement('div')

        let city_=document.createElement('h1')
        city_.innerText="Город:"+name

        let h1=document.createElement('h1')
        h1.innerText="Температура воздуха:"+temp+"C"

        let h2=document.createElement('h2')
        h2.innerText="Описание:"+description

        let p=document.createElement('p')
        p.innerText="Скорость ветра:"+wind+" мет/сек"

        let img=document.createElement('img')
        img.src=`http://openweathermap.org/img/wn/${icon}@2x.png`

        let date_refres=document.createElement('p')
        date_refres.innerText='Дата и время обновления:'+Date()
        
         html.appendChild(city_)
         html.appendChild(img)
         html.appendChild(h1)
         html.appendChild(h2)
         html.appendChild(p)
         html.appendChild(date_refres)

         document.querySelector('.weather').innerText=''
        document.querySelector('.weather').appendChild(html)  

        console.log(data)
   
        
    }

    xhr.send()
}

setInterval(loadWeatherData, 10000);
