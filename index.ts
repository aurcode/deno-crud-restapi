import { Application } from "https://deno.land/x/oak/mod.ts";
import router from './routes/index.routes.ts';

const app: Application = new Application();
const port: number = 3000;

app.use(router.routes());
app.use(router.allowedMethods());

console.log('Server running on port', port);

await app.listen({port: port});