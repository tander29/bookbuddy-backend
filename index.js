require('dotenv-safe').config({allowEmptyValues: true})

const express = require('express')
const morgan =require('morgan')
const passport = require('passport')
const swaggerUi = require('swagger-ui-express')
const { Strategy } = require('passport-jwt')
const swaggerParser = require('swagger-parser')
const cors = require('cors')


const app = express();

app.use(cors());

app.set("port", process.env.PORT || 3000)

app.use(morgan('tiny'))
app.use(express.json())

passport.use(
    new Strategy(jwtOptions, (payload, done) =>{
        User.findById(payload.id).then(user => done(null, user ||false))
    }))

app.use(passport.initialize())