import API from "../helpers/api";

export class CustomerService extends API {

    static getCustomers(url) {
        return this.fetchAsync(url);
    }
}