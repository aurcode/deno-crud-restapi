import { Router } from "https://deno.land/x/oak/mod.ts";

import * as indexCtrl from "../controllers/index.controllers.ts";

const router: Router = new Router();

router.get("/", ({ response }) => {
  response.body = "Welcome to my API";
});

router
  .get("/books", indexCtrl.getBooks)
  .get("/books/:id", indexCtrl.getBook)
  .post("/books", indexCtrl.createBook)
  .put("/books/:id", indexCtrl.updateBook)
  .delete("/books/:id", indexCtrl.deleteBook);

export default router;
