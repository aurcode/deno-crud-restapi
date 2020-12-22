import { Router } from "https://deno.land/x/oak/mod.ts";

const router: Router = new Router();

router.get('/', ({response})=> {
    response.body = 'Hello world';
    console.log("New user");
});

export default router;