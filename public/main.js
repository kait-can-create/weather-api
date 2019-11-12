// create a function that queries the DOM for the value of the input field
// console.log that value from the input field
let weatherData
const getWeather = async () => {
  const searchWeather = document.querySelector('.weatherUpdate').value
  console.log(searchWeather)
  // call the API
  console.log('going out to api')
  const response = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=' + searchWeather + '&appid=cef8bf96124146d9c2da7c4dac6ae10b'
  )
  console.log('back from api')
  console.log(response)
  weatherData = await response.json()
  console.log(weatherData.name)
  console.log(weatherData.weather[0].description)
  console.log(weatherData.main.temp)

  displayData(weatherData)
}

const displayP = (text, classname) => {
  const para = document.createElement('p')
  const node = document.createTextNode(text)
  para.appendChild(node)
  document.querySelector(classname).appendChild(para)
}


// display city name, description of weather, and temp F
const displayData = weatherData => {
  displayP(weatherData.name + ', ' + weatherData.weather[0].description + ' and ' + weatherData.main.temp + ' F ', '.weatherText')
}


// attach a on click handler to the button
document.querySelector('button').addEventListener('click', getWeather)
