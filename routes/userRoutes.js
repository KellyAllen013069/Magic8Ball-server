import express from 'express';

const userRouter = express.Router();

userRouter.get('/getUser', (req, res) => {
  try {
    console.log("*************in getuser**************");
    console.log("req is " + req.user);
    if(req.user) {
      console.log("user is " + req.user[0]);
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user[0]
      })
    } else {
      console.log("user not found");
      res.json({success: false, message: "unsuccessful"})
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "server error" });
  }
});

userRouter.get('/logout', (req, res, next) => {
  console.log("**********************************IN LOGOUT******************************");
    req.session.destroy();
    console.log("***after session destroy*****");
    req.logOut();
    console.log("******after logout********");
    res.clearCookie('connect.sid');
    console.log("***********after clearing cookie*********");
    res.status(200).json({
      success: true,
      message: "logout successfull"
    })
    console.log("********sent msg to client");
   
  });

export default userRouter