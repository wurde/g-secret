#!/usr/bin/env node

'use strict'

/**
 * Dependencies
 */

const crypto = require('crypto')

/**
 * Generate hash
 */

let passphrase = crypto.randomBytes(256)
let secret = crypto.createHmac('sha512', passphrase).digest('hex')

/**
 * Print hash
 */

console.log(secret)

/**
 * Export hash
 */

module.exports = secret
