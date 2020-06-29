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
*/
package com.blockchain.exchange.rest.model


import com.squareup.moshi.Json
/**
 * 
 * @param makerRate 
 * @param takerRate 
 * @param volumeInUSD 
 * @param tier 
 */

data class Fees (
    @Json(name = "makerRate")
    val makerRate: kotlin.Double,
    @Json(name = "takerRate")
    val takerRate: kotlin.Double,
    @Json(name = "volumeInUSD")
    val volumeInUSD: kotlin.Double,
    @Json(name = "tier")
    val tier: kotlin.Int? = null
)

