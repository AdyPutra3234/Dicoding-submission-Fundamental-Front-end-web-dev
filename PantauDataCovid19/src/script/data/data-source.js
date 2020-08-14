const API = "https://covid19.mathdro.id/api";
    
class DataSource {

    static getDataGlobal (data) {
       return fetch(API)
       .then(response => {
           return response.json();
       })
       .then(responseJson => {
           return responseJson;
       })
    }
    
    static searchResult (keyword) {
        return fetch(`${API}/countries/${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson) {
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject(`Oops Something wrong`);
            }
        })
    }

    static listDataRegion() {
        return fetch(`https://api.kawalcorona.com/`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            return responseJson;
        })
    }

    static listDataIndonesia() {
        return fetch("https://opendata.arcgis.com/datasets/0c0f4558f1e548b68a1c82112744bad3_0.geojson")
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            return responseJson.features;
        })
    }

}


export default DataSource;