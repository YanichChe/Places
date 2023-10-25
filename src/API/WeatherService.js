import axios from "axios";

export default class WeatherService {
    static async getWeather(lat, lng) {
        const params = {
            key: '5e34770e0051422c8f492714232110',
            q: lat + ',' + lng,
            lang:'ru'
        };

        return axios.get('v1/current.json', {
            params: params,
        })
    }
}