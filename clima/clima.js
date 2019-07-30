const axios = require('axios');


const getClima = async (lat, lng) => {

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=32f843d833c38373032f825c4a92418a&units=metric`
    });

    const resp = await instance.get();

    return resp.data.main.temp;
}


module.exports = {
    getClima: getClima
}