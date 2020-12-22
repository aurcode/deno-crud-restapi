import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router: Router = new Router();
const app: Application = new Application();
const port: number = 3000;

router.get('/', ({response})=> {
    response.body = 'Hello world';
});

app.use(router.routes());

console.log('Server running on port', port);

await app.listen({port: port});