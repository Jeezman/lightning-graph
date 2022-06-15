import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';

import { LndGraphService } from "./src/domain/lnd/LndGraphService";
import { LndRestClient } from "./src/domain/lnd/LndRestClient";
import { Options } from "./src/Options";
import { IGraphService } from "./src/domain/IGraphService";
import { graphApi } from './src/api/GraphApi';

/**
 * Entry point for our application. This is responsible for setting up
 * the dependency graph and constructing the application. As this code
 * gets more complicated it can be broken into various pieces so we
 * no longer violate the single responsibility principle.
 */
async function run() {
    // construct the options
    const options = await Options.fromEnv();

    // Exercise: using the Options defined above, construct an instance
    // of the LndRestClient using the options.
    const lnd: LndRestClient = new LndRestClient(options.lndHost, options.lndReadonlyMacaroon, options.lndCert);

    const graphAdapter: IGraphService = new LndGraphService(lnd)

    // construct the server
    const app: express.Express = express();

    // mount json and compression middleware
    app.use(cors());
    app.use(bodyParser.json());
    app.use(compression());

    app.use(graphApi(graphAdapter));

    // start the server on the port
    const server = app.listen(Number(options.port), () => {
        console.log(`server listening on ${options.port}`);
    });

}

run().catch(ex => {
    console.error(ex);
    process.exit(1);
});
