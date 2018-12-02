const passport = require('koa-passport')
const LocalStrategy = require('passport-local').Strategy

const UserModel = require('./models/user')

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
    UserModel.findById(id, done)
})


passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function (email, password, done) {
    UserModel.findOne({ $or: [{ email: email }, { name: email }], password }, done)
}))