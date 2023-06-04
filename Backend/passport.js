const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const GOOGLE_CLIENT_ID = "912077561089-agols4f9u57rgcdu5ma2qrbttoluab24.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(
    new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
  function (accessToken, refreshToken, profile, done) {
    done(null,profile );
  }
 )
);

passport.serializeUser((user,done)=>{
    done(null,user);
});

passport.deserializeUser((user,done)=>{
    done(null,user);
});