import express from 'express';
import passport from "passport";
import googleStrategy from '../middlewares/passport/passport-google.js';


const authGoogleRouter = express.Router();

passport.use(googleStrategy);

authGoogleRouter.get("/login/success", (req,res) => {
    if(req.user) {
        res.status(200).json({
            success: true,
            message: "success",
            user: req.user,

        })
    }

})

authGoogleRouter.get("/login/failure", (req,res) => {
        res.status(401).json({
            success: false,
            message: "failure",
            user: req.user,
        });

});

 authGoogleRouter.get("/login", passport.authenticate('google', {
    scope: ['profile']
}));

authGoogleRouter.get("/redirect", passport.authenticate('google', {
    successRedirect: "https://magic8ballserver.onrender.com/api/authgoogle/redirect",
    failureRedirect: "https://magic8ballserver.onrender.com/api/authgoogle/redirect"
}), (req,res) => {
    console.log("middleware sending" + req.user);
    res.send(req.user)
});


export default authGoogleRouter;