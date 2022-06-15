
import EventEmitter from "stream";
import { LndRestClient } from "./LndRestClient";
import {IGraphService} from '../IGraphService'
import { Lnd } from "./LndRestTypes";

export class LndGraphService extends EventEmitter implements IGraphService  {
    constructor(readonly lnd: LndRestClient) {
        super();
    }

    public async getGraph(): Promise<Lnd.Graph> {
        return await this.lnd.getGraph();
    }

    public async subscribeGraph(): Promise<void> {
        
    }
}