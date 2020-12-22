import { Router } from "https://deno.land/x/oak/mod.ts";

import * as indexCtrl from '../controllers/index.controllers.ts';

const router: Router = new Router();

router.get('/', ({response})=> {
    response.body = 'Hello world';
    console.log("New user");
});

router.get('/books', indexCtrl.getBooks);

export default router;