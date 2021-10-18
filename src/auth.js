const jwt = require("jsonwebtoken");

const userModal = require("./modal/user");

const isAuthorized = async (req, res, next) => {
  const authorizationHeaader = req.headers.authorization;
  let result;
  if (authorizationHeaader) {
      const secret = process.env.JWT_SECRET;
      const token = req.headers.authorization.split(" ")[1];
    //   const token = req.cookies.jwt;
      const user = await userModal.findOne({ token }).exec();
      if (!user) {
          return res.status(401).send("Token not found");
        }
        const options = {
            expiresIn : process.env.EXPIRESIN,
        };
        try {
            jwt.verify(token, secret, function (err,decoded){
                if(err){
                    return res.status(401).send("jwt verify error");
                }
                result = jwt.verify(token,process.env.JWT_SECRET,options);
            req.decoded = result;
            next();
        });
    } catch (error) {
        return res.status(401).send(error);
    }
  } else {
      return res.status(401).send("Authenticatoin error. Token required");
  }
};
module.exports = {isAuthorized};