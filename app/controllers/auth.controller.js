const config = require("../config/auth.config");
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken");
const getNewAccessToken = () => jwt.sign({ id: 0 }, config.secret, { expiresIn: config.jwtExpiration });
const refreshToken = {

	getNew() {
    	this.expiryDate = Date.now() + config.jwtRefreshExpiration * 1e3;
		return this.token = uuidv4();
    },

	find: token => token == refreshToken.token,

	isExpired: () => refreshToken.expiryDate < Date.now()

}

exports.signin = (req, res) => {

  if (req.body.username != 'Admin') {
    return res.status(404).send({ message: "User Not found." });
  }

  if (req.body.password != 'Admin1') {
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Password!",
    });
  }

  res.status(200).send({
    id: 0,
    username: 'Admin',
    email: 'test@none.com',
    roles: ['ROLE_USER'],
    accessToken: getNewAccessToken(),
    refreshToken: refreshToken.getNew()
  });
};

exports.refreshToken = (req, res) => {

  if (!req.body.refreshToken) {
    return res.status(403).json({ message: "Refresh Token is required!" });
  }

  if (!refreshToken.find(req.body.refreshToken)) {
    res.status(403).json({ message: "Refresh token is not in database!" });
    return;
  }


  if (refreshToken.isExpired()) {
  
    res.status(403).json({
      message: "Refresh token was expired. Please make a new signin request",
    });
    return;
  }

  return res.status(200).json({
    accessToken: getNewAccessToken(),
    refreshToken: refreshToken.getNew()
  });
};
