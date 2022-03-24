
// controller contains the handler function where the 


const models = require('../models');
const constants = require('../config');
const axios = require('axios').default;

exports.index_landing = function(req, res, next){

    res.render('index', { title: 'Weather Api' });
}

// rendered view reference is defined
exports.get_landing = function(req, res, next) {
    // res.render('landing', { title: 'Express App' });

    var options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {q: req.params['q'], days: '30'},
        headers: {
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
          'X-RapidAPI-Key': 'ee63f3b69emshb06b9bf5709e36fp1eb79cjsn083704c21ec0'
        }
      };
      
      return axios.request(options).then(function (response) {
          console.log('Status Code:', response.status);
          console.log(response.data);
          if(response.status == 200){
            res.render('index', { title: 'Weather Api', place: response.data.location.name,
            region: response.data.location.region,
            country: response.data.location.country,
            temp_c: response.data.current.temp_c,
            temp_f: response.data.current.temp_f,
            condition: response.data.current.condition.text,
            icon: response.data.current.condition.icon});
          }
          else{
            res.render('index', { title: 'Weather Api', place: "Location is incorrect"});
          }
                                
      }).catch(function (error) {
          console.error(error);
      });

}

exports.get_weather = function(req, res, next) {

    // https://dev.to/isalevine/three-ways-to-retrieve-json-from-the-web-using-node-js-3c88
    // https://blog.logrocket.com/5-ways-to-make-http-requests-in-node-js/

    let url = constants.openWeatherMap.BASE_URL + 
    constants.openWeatherMap.LATITUDE + 
    constants.openWeatherMap.LONGITUDE + 
    constants.openWeatherMap.APP_ID + 
    constants.openWeatherMap.SECRET_KEY;




    // return axios.get(url)
    // .then(body => {
    //     const headerDate = body.headers && body.headers.date ? body.headers.date : 'no response date';
    //     console.log('Status Code:', body.status);
    //     console.log('Date in Response header:', headerDate);

    //     const weatherData = body.data;
    //     console.log(weatherData)
        
    //     res.render('landing', { title: 'Express weather' , weather: weatherData.main.temp});
    // })
    // .catch(err => {
    //     console.log('Error: ', err.message);
    // });
    
}






