var express = require("express");
var router = express.Router();

router.use((req, res, next) => {
  console.log("user Time Start: ", Date.now());
  next();
});

/* GET users listing. */
// router.use("/", (req, res, next) => {
//   console.log("user Time End: ", Date.now());
//   res.send("users");
// });

router.get("/:id", (req, res, next) => {
  console.log(":id ", Date.now());
  next();
});

router.use(
  "/:id",
  (req, res, next) => {
    if (!req.params.id === "0") {
      next("route");
    } else {
      next();
    }
  },
  (req, res, next) => {
    console.log("userid Time End: ", Date.now());
    res.send("users-" + req.params.id);
  }
);


module.exports = router;
