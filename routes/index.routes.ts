import { Router } from "https://deno.land/x/oak/mod.ts";

import * as indexCtrl from "../controllers/index.controllers.ts";

const router: Router = new Router();

router.get("/", ({ response }) => {
  response.body = "Welcome to my API";
});

router.get("/books", indexCtrl.getBooks);
router.get("/books/:id", indexCtrl.getBook);
router.post("/books", indexCtrl.createBook);

export default router;
