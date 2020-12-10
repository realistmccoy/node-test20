const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

//app use express function
const app = express();


passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
		},
		(accessToken) => {
			console.log(accessToken);
		},
	),
);

//route handler for google oauth localhose:5000/auth/google/callback?code=456


const PORT = process.env.PORT || 5000;
//listen node function
app.listen(PORT);
