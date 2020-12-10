const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();


//client ID  1080647183247-asv33ov8rgog7ng2okbbrdumq8lvuc2t.apps.googleusercontent.com

//client
passport.use(new GoogleStrategy());





const PORT = process.env.PORT || 5000;
app.listen(PORT);
