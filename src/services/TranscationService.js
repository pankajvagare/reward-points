import API from "../helpers/api";

export class TranscationService extends API {

    static getCustomerTranscation(transId) {
        return this.fetchAsync(transId);
    }
}