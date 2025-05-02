import { Request, Response } from 'express'; // Import types from express

class IndexController {
    public getIndex(req: Request, res: Response) {
        res.send("Welcome to the Index!");
    }

    public getHello(req: Request, res: Response) {
        const name = req.params.name || "World";
        res.send(`Hello, ${name}!`);
    }

    public home(req: Request, res: Response) {
        res.send("Welcome to the Home Page!");
    }

    public about(req: Request, res: Response) {
        res.send("About Us Page");
    }
}

export default IndexController;