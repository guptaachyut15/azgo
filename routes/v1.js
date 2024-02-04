const { Router } = require("express");
const {
  initialiseHandler,
  operationHandler,
  undoHandler,
  resetHandler,
} = require("../contollers/v1");

const router = Router();

router.post("/init", initialiseHandler);
router.post("/operation", operationHandler);
router.put("/undo", undoHandler);
router.get("/reset", resetHandler);

module.exports = router;
