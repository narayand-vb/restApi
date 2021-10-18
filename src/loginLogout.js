const userModal = require("./modal/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

///////////  LOGIN ////////////

const logIn =  async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const user = await userModal.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ user_id: user._id, email },process.env.JWT_SECRET,{ expiresIn: "2h" } );
      res.cookie("jwt",token,{
        expires:new Date(Date.now()+600000),
        httpOnly:true
    });
      user.token = token;
      res.status(200).send("Logged in");
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    res.status(400).send("Error in Login");
  }
}


///////////  LOGOUT  //////////

const logOut = async(req,res)=>{
  try {
    res.clearCookie("jwt");
    res.send("logged out");
  } catch (error) {
    
  }
}


/////////  EXPORT  ////////////

module.exports = {
    logIn,
    logOut
  };