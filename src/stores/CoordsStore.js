import { makeAutoObservable } from "mobx";
import { createContext } from "react";
class CoordsStore {
    lat = 59.93863;
    lng = 30.31413;

    constructor() {
        makeAutoObservable(this);
    }

    setCoords(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }

    getCoords() {
        return [this.lat, this.lng];
    }
}

export const coordsStore = new CoordsStore();
export const CoordsStoreContext = createContext(coordsStore);