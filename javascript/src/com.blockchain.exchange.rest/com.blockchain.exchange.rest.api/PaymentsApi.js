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


import ApiClient from "../ApiClient";
import Balance from '../com.blockchain.exchange.rest.model/Balance';
import BalanceMap from '../com.blockchain.exchange.rest.model/BalanceMap';
import CreateWithdrawalRequest from '../com.blockchain.exchange.rest.model/CreateWithdrawalRequest';
import DepositAddressCrypto from '../com.blockchain.exchange.rest.model/DepositAddressCrypto';
import DepositInfo from '../com.blockchain.exchange.rest.model/DepositInfo';
import WhitelistEntry from '../com.blockchain.exchange.rest.model/WhitelistEntry';
import WithdrawalInfo from '../com.blockchain.exchange.rest.model/WithdrawalInfo';

/**
* Payments service.
* @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi
* @version 1.0.0
*/
export default class PaymentsApi {

    /**
    * Constructs a new PaymentsApi. 
    * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi
    * @class
    * @param {module:com.blockchain.exchange.rest/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.blockchain.exchange.rest/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createWithdrawal operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~createWithdrawalCallback
     * @param {String} error Error message, if any.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WithdrawalInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request a withdrawal
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/CreateWithdrawalRequest} createWithdrawalRequest 
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~createWithdrawalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WithdrawalInfo}
     */
    createWithdrawal(createWithdrawalRequest, callback) {
      let postBody = createWithdrawalRequest;
      // verify the required parameter 'createWithdrawalRequest' is set
      if (createWithdrawalRequest === undefined || createWithdrawalRequest === null) {
        throw new Error("Missing the required parameter 'createWithdrawalRequest' when calling createWithdrawal");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WithdrawalInfo;
      return this.apiClient.callApi(
        '/withdrawals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccountByTypeAndCurrency operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getAccountByTypeAndCurrencyCallback
     * @param {String} error Error message, if any.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Balance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Receive current account balances
     * @param {String} account Account
     * @param {String} currency Currency
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getAccountByTypeAndCurrencyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/Balance}
     */
    getAccountByTypeAndCurrency(account, currency, callback) {
      let postBody = null;
      // verify the required parameter 'account' is set
      if (account === undefined || account === null) {
        throw new Error("Missing the required parameter 'account' when calling getAccountByTypeAndCurrency");
      }
      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling getAccountByTypeAndCurrency");
      }

      let pathParams = {
        'account': account,
        'currency': currency
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Balance;
      return this.apiClient.callApi(
        '/accounts/{account}/{currency}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccounts operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getAccountsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/BalanceMap} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Receive current account balances
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/BalanceMap}
     */
    getAccounts(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BalanceMap;
      return this.apiClient.callApi(
        '/accounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDepositAddress operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getDepositAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositAddressCrypto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a deposit address. Currently only crypto currencies are supported
     * @param {String} currency Currency
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getDepositAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositAddressCrypto}
     */
    getDepositAddress(currency, callback) {
      let postBody = null;
      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling getDepositAddress");
      }

      let pathParams = {
        'currency': currency
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DepositAddressCrypto;
      return this.apiClient.callApi(
        '/deposits/{currency}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDepositById operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getDepositByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get status about a deposit
     * @param {String} depositId Deposit ID
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getDepositByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo}
     */
    getDepositById(depositId, callback) {
      let postBody = null;
      // verify the required parameter 'depositId' is set
      if (depositId === undefined || depositId === null) {
        throw new Error("Missing the required parameter 'depositId' when calling getDepositById");
      }

      let pathParams = {
        'depositId': depositId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DepositInfo;
      return this.apiClient.callApi(
        '/deposits/{depositId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeposits operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getDepositsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of deposits
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from Epoch timestamp in ms
     * @param {Number} opts.to Epoch timestamp in ms
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getDepositsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo>}
     */
    getDeposits(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'from': opts['from'],
        'to': opts['to']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DepositInfo];
      return this.apiClient.callApi(
        '/deposits', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWhitelist operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getWhitelistCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WhitelistEntry>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all whitelisted withdrawal accounts
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getWhitelistCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WhitelistEntry>}
     */
    getWhitelist(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [WhitelistEntry];
      return this.apiClient.callApi(
        '/whitelist', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWhitelistByCurrency operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getWhitelistByCurrencyCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WhitelistEntry>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all whitelisted withdrawal accounts
     * @param {String} currency Currency
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getWhitelistByCurrencyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WhitelistEntry>}
     */
    getWhitelistByCurrency(currency, callback) {
      let postBody = null;
      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling getWhitelistByCurrency");
      }

      let pathParams = {
        'currency': currency
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [WhitelistEntry];
      return this.apiClient.callApi(
        '/whitelist/{currency}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWithdrawalById operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getWithdrawalByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WithdrawalInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get status about a withdrawal
     * @param {String} withdrawalId Withdrawal ID
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getWithdrawalByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WithdrawalInfo}
     */
    getWithdrawalById(withdrawalId, callback) {
      let postBody = null;
      // verify the required parameter 'withdrawalId' is set
      if (withdrawalId === undefined || withdrawalId === null) {
        throw new Error("Missing the required parameter 'withdrawalId' when calling getWithdrawalById");
      }

      let pathParams = {
        'withdrawalId': withdrawalId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WithdrawalInfo;
      return this.apiClient.callApi(
        '/withdrawals/{withdrawalId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWithdrawals operation.
     * @callback module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getWithdrawalsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WithdrawalInfo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of withdrawals
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from Epoch timestamp in ms
     * @param {Number} opts.to Epoch timestamp in ms
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.api/PaymentsApi~getWithdrawalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/WithdrawalInfo>}
     */
    getWithdrawals(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'from': opts['from'],
        'to': opts['to']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [WithdrawalInfo];
      return this.apiClient.callApi(
        '/withdrawals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
