const express = require('express')
const passport = require('passport')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {ExtractJwt} = require('passport-jwt')
const Sequelize = require('sequelize')

const router = expressyarn .Router();

const { User } = require('../models')

const authMiddleware = passport.authenticate('jwt', { session: false });

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}





module.exports ={
    authMiddleware,
    jwtOptions,
    router
}