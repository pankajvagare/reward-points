export default class API {

    static fetchAsync(url) {
        return fetch(url).then((res) => res.json())
    }

}