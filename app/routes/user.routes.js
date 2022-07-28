const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test", controller.allAccess);

  app.get("/api/data", [authJwt.verifyToken], controller.userBoard);

};
