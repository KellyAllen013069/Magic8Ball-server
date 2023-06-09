import express from 'express';
import passport from "passport";
import gitHubStrategy from '../middlewares/passport/passport-github2.js';


const authGitHubRouter = express.Router();

passport.use(gitHubStrategy);

authGitHubRouter.get("/login/success", (req,res) => {
    if(req.user) {

        res.status(200).json({
            success: true,
            message: "successfull",
            user: req.user,
           
        })
    }
    
})

authGitHubRouter.get("/login/failure", (req,res) => {
        console.log("in login failure")
        res.status(401).json({
            success: false,
            message: "failure",
            user: req.user,
        });

});


 authGitHubRouter.get("/login", passport.authenticate('github', {
    scope: ['profile']
}
));

authGitHubRouter.get("/redirect", passport.authenticate('github',{
    successRedirect: "https://magic8ballclient.onrender.com",
    failureRedirct: "https://magic8ballclient.onrender.com/login"
}), (req,res) => {
   console.log("sending user from github route")
    res.send(req.user)
});


export default authGitHubRouter;