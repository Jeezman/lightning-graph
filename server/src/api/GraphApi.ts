import { IGraphService } from "../domain/IGraphService";
import express from "express";

export function graphApi(graphService: IGraphService): express.Router {
    // construct router object
    const router = express();

    // adds a handler for returning the graph. 
    router.get("/api/graph", (req, res, next) => getGraph(req, res).catch(next));

    async function getGraph(req: express.Request, res: express.Response) {
        const graph = await graphService.getGraph();
        res.json(graph);
    }

    return router;
}