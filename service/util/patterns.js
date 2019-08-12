'use strict';

const joi = require('joi');

module.exports = {
    _key: joi.string(),
    username: joi.string(),
    password: joi.string(),
    firstname: joi.string(),
    lastname: joi.string(),
    birthday: joi.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    category: joi.string(),
    fact: joi.string(),
    topic: joi.string(),
    interestlevel: joi.number()
};