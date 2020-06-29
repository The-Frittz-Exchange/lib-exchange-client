/**
 * Blockchain.com Exchange REST API
 * ## Introduction Welcome to Blockchain.com's Exchange API and developer documentation. These documents detail and give examples of various functionality offered by the API such as receiving real time market data, requesting balance information and performing trades. ## To Get Started Create or log into your existing Blockchain.com Exchange account Select API from the drop down menu Fill out form and click “Create New API Key Now” Once generated you can view your keys under API Settings 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/com.blockchain.exchange.rest/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/com.blockchain.exchange.rest/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BlockchainComExchangeRestApi);
  }
}(this, function(expect, BlockchainComExchangeRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BlockchainComExchangeRestApi.OrderBookEntry();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OrderBookEntry', function() {
    it('should create an instance of OrderBookEntry', function() {
      // uncomment below and update the code to test OrderBookEntry
      //var instane = new BlockchainComExchangeRestApi.OrderBookEntry();
      //expect(instance).to.be.a(BlockchainComExchangeRestApi.OrderBookEntry);
    });

    it('should have the property px (base name: "px")', function() {
      // uncomment below and update the code to test the property px
      //var instane = new BlockchainComExchangeRestApi.OrderBookEntry();
      //expect(instance).to.be();
    });

    it('should have the property qty (base name: "qty")', function() {
      // uncomment below and update the code to test the property qty
      //var instane = new BlockchainComExchangeRestApi.OrderBookEntry();
      //expect(instance).to.be();
    });

    it('should have the property num (base name: "num")', function() {
      // uncomment below and update the code to test the property num
      //var instane = new BlockchainComExchangeRestApi.OrderBookEntry();
      //expect(instance).to.be();
    });

  });

}));
