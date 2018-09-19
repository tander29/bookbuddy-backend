require('dotenv-safe').config({allowEmptyValues: true})

const express = require('express')
const morgan =require('morgan')
const passport = require('passport')
const swaggerUi = require('swagger-ui-express')
const { Strategy } = require('passport-jwt')
const swaggerParser = require('swagger-parser')
const cors = require('cors')
const { User, sequelize } = require("./models")
const { ExtractJwt } = require("passport-jwt");
const Sequelize = require("sequelize");
const { jwtOptions, authMiddleware } = require('./controllers/auth')

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


app.get("/swagger.json", (req, res) => {
    res.send(swaggerSpec);
  });
  
  swaggerParser.validate()
    .then(() => Sexpresequelize.authenticate())
    .then(() =>
      app.listen(app.get("port"), () =>
        console.log(`API server now running on port ${app.get("port")}`)
      )
    )
    .catch(err => console.error(err.toString()));