import { Lnd } from "./ApiTypes";


export class ApiService {
    constructor(readonly host: string = "http://127.0.0.1:3000") {}

    protected async get<T>(path: string): Promise<T> {
        let url = this.host + path;
        const res = await fetch(url);
        return await res.json();
    }


    public async fetchGraph(): Promise<any> {
        const res = await this.get('/api/graph');
        return res;
    }
}
