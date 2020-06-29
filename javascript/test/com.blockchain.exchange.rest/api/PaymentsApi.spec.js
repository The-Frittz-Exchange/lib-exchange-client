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
    instance = new BlockchainComExchangeRestApi.PaymentsApi();
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

  describe('PaymentsApi', function() {
    describe('createWithdrawal', function() {
      it('should call createWithdrawal successfully', function(done) {
        //uncomment below and update the code to test createWithdrawal
        //instance.createWithdrawal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountByTypeAndCurrency', function() {
      it('should call getAccountByTypeAndCurrency successfully', function(done) {
        //uncomment below and update the code to test getAccountByTypeAndCurrency
        //instance.getAccountByTypeAndCurrency(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccounts', function() {
      it('should call getAccounts successfully', function(done) {
        //uncomment below and update the code to test getAccounts
        //instance.getAccounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDepositAddress', function() {
      it('should call getDepositAddress successfully', function(done) {
        //uncomment below and update the code to test getDepositAddress
        //instance.getDepositAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDepositById', function() {
      it('should call getDepositById successfully', function(done) {
        //uncomment below and update the code to test getDepositById
        //instance.getDepositById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeposits', function() {
      it('should call getDeposits successfully', function(done) {
        //uncomment below and update the code to test getDeposits
        //instance.getDeposits(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWhitelist', function() {
      it('should call getWhitelist successfully', function(done) {
        //uncomment below and update the code to test getWhitelist
        //instance.getWhitelist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWhitelistByCurrency', function() {
      it('should call getWhitelistByCurrency successfully', function(done) {
        //uncomment below and update the code to test getWhitelistByCurrency
        //instance.getWhitelistByCurrency(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWithdrawalById', function() {
      it('should call getWithdrawalById successfully', function(done) {
        //uncomment below and update the code to test getWithdrawalById
        //instance.getWithdrawalById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWithdrawals', function() {
      it('should call getWithdrawals successfully', function(done) {
        //uncomment below and update the code to test getWithdrawals
        //instance.getWithdrawals(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
