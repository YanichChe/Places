import axios from "axios";

export default class WeatherService {
    static async getWeather(lat, lng) {
        const params = {
            lat: lat,
            lon: lng
        };

        return axios.get('/v2/informers', {
            params: params,
            headers: {
                'X-Yandex-API-Key': '9d07b782-6320-4d0b-a2ba-8342130dc03f'
            }
        })
    }
}