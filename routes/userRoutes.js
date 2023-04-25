import express from 'express';

const userRouter = express.Router();

userRouter.get('/getUser', (req, res) => {
  try {
    //res.setHeader('Cache-Control', 'no-cache');
    console.log("*************in getuser**************");
    console.log("req.session " + req.session);
    console.log("req.user is " + req.user);
    if(req.isAuthenticated()) {
      console.log("user is " + JSON.stringify(req.user[0]));
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