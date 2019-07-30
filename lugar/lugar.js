const axios = require('axios');


const getLugarLatLng = async (direccion) => {

    const encoderUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderUrl}`,
        headers: { 'x-rapidapi-key': 'e250270567msh2d98dbd5e957ab3p1eab3cjsn6b8876f37beb', 'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com' }
    });

    const resp = await instance.get();

    if(resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const direcc = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direcc: direcc,
        lat: lat,
        lng: lng
    }
}


module.exports ={
    getLugarLatLng:getLugarLatLng
}

