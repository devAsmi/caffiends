const jwt = require("jsonwebtoken");

const secret = "ILoveCoffeeeee";
const expiration = "1h";

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ name, username, userId }) {
    const payload = { name, username, userId };
    console.log(payload);
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
