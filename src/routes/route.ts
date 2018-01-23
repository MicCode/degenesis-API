import { NextFunction, Request, Response } from "express";

/**
 * Constructor
 *
 * @class BaseRoute
 */
export class BaseRoute {

    protected title: string;

    private scripts: string[];

    /**
     * Constructor
     *
     * @class BaseRoute
     * @constructor
     */
    constructor() {
        this.title = "Degenesis API";
        this.scripts = [];
    }

    /**
     * Add a JS external file to the request.
     */
    public addScript(src: string): BaseRoute {
        this.scripts.push(src);
        return this;
    }

    /**
     * Render a page.
     */
    public render(req: Request, res: Response, view: string, options?: Object) {
        res.locals.BASE_URL = "/";
        res.locals.scripts = this.scripts;
        res.locals.title = this.title;
        res.render(view, options);
    }
}