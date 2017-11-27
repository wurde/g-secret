'use strict'

/**
 * Dependencies
 */

const assert = require('assert')
const g_secret = require('./index')

/**
 * Assertions
 */

describe("index.js", () => {
  it("should have tests", () => {
    assert.ok(true)
  })
  it("should use SHA512, which uses 64-bit words", () => {
    assert.equal((g_secret.length / 2), 64)
  })
})
