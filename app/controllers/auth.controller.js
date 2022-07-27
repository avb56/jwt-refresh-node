const config = require("../config/auth.config");
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken");
const getNewAccessToken = () => jwt.sign({ user: 'Admin' }, config.secret, { expiresIn: config.jwtExpiration });
const refreshToken = {

	getNew() {
    	this.expiryDate = Date.now() + config.jwtRefreshExpiration * 1e3;
		return this.token = uuidv4();
    },

	find: token => token == refreshToken.token,

	isExpired: () => refreshToken.expiryDate < Date.now()

}

const reNew = body => {

  if (!refreshToken.find(body.refreshToken)) {
    return [403, "Refresh token is not in database!"];
  }

  if (refreshToken.isExpired()) {
    return [403, "Refresh token was expired. Please make a new signin request"];
  }
}

const isUser = body => {

  if (body.username != 'Admin') {
    return [404, "User Not found."];
  }

  if (body.password != 'Admin1') {
    return [401, "Invalid Password!"];
  }
}

exports.auth = (req, res) => {
  const body = req.body;
  const check = body.refreshToken ? reNew(body) : isUser(body);

  if (check) {
    const [code, message] = check;
    return res.status(code).send({ message });
  }

  res.status(200).send({
    id: 0,
    username: 'Admin',
    email: 'test@none.com',
    roles: ['ROLE_USER'],
    accessToken: getNewAccessToken(),
    refreshToken: refreshToken.getNew()
  });
}
