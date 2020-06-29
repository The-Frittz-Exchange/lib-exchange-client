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

import ApiClient from '../ApiClient';

/**
 * The DepositInfo model module.
 * @module com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo
 * @version 1.0.0
 */
class DepositInfo {
    /**
     * Constructs a new <code>DepositInfo</code>.
     * @alias module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo
     * @param depositId {String} Unique ID for this withdrawal
     * @param amount {Number} The amount that is credited in the currency specified
     * @param currency {String} 
     * @param address {String} Address to deposit to. If a tag or memo must be used, it is separated by a colon.
     * @param state {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo.StateEnum} 
     */
    constructor(depositId, amount, currency, address, state) { 
        
        DepositInfo.initialize(this, depositId, amount, currency, address, state);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, depositId, amount, currency, address, state) { 
        obj['depositId'] = depositId;
        obj['amount'] = amount;
        obj['currency'] = currency;
        obj['address'] = address;
        obj['state'] = state;
    }

    /**
     * Constructs a <code>DepositInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo} obj Optional instance to populate.
     * @return {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo} The populated <code>DepositInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DepositInfo();

            if (data.hasOwnProperty('depositId')) {
                obj['depositId'] = ApiClient.convertToType(data['depositId'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('txHash')) {
                obj['txHash'] = ApiClient.convertToType(data['txHash'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Unique ID for this withdrawal
 * @member {String} depositId
 */
DepositInfo.prototype['depositId'] = undefined;

/**
 * The amount that is credited in the currency specified
 * @member {Number} amount
 */
DepositInfo.prototype['amount'] = undefined;

/**
 * @member {String} currency
 */
DepositInfo.prototype['currency'] = undefined;

/**
 * Address to deposit to. If a tag or memo must be used, it is separated by a colon.
 * @member {String} address
 */
DepositInfo.prototype['address'] = undefined;

/**
 * The transaction hash of the transaction that deposited funds
 * @member {String} txHash
 */
DepositInfo.prototype['txHash'] = undefined;

/**
 * @member {module:com.blockchain.exchange.rest/com.blockchain.exchange.rest.model/DepositInfo.StateEnum} state
 */
DepositInfo.prototype['state'] = undefined;

/**
 * Time in ms since 01/01/1970 (epoch)
 * @member {Number} timestamp
 */
DepositInfo.prototype['timestamp'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
DepositInfo['StateEnum'] = {

    /**
     * value: "REJECTED"
     * @const
     */
    "REJECTED": "REJECTED",

    /**
     * value: "UNCONFIRMED"
     * @const
     */
    "UNCONFIRMED": "UNCONFIRMED",

    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED"
};



export default DepositInfo;

