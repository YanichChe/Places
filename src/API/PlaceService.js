import axios from "axios";

export default class PlaceService {
    static async GetListLocations(location, locate) {
        return await axios.get('https://graphhopper.com/api/1/geocode', {
            params: {
                q: location,
                locale: location,
                limit:locate,
                key: '1afd1541-d54d-42b8-a5ba-72dcf0270e28'
            }
        })
    }
}