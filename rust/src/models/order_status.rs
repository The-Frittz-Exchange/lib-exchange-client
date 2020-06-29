/*
 * Blockchain.com Exchange REST API
 *
 * ## Introduction Welcome to Blockchain.com's Exchange API and developer documentation. These documents detail and give examples of various functionality offered by the API such as receiving real time market data, requesting balance information and performing trades. ## To Get Started Create or log into your existing Blockchain.com Exchange account Select API from the drop down menu Fill out form and click “Create New API Key Now” Once generated you can view your keys under API Settings 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://openapi-generator.tech
 */


/// 
#[derive(Clone, Copy, Debug, Eq, PartialEq, Ord, PartialOrd, Hash, Serialize, Deserialize)]
pub enum OrderStatus {
    #[serde(rename = "OPEN")]
    OPEN,
    #[serde(rename = "REJECTED")]
    REJECTED,
    #[serde(rename = "CANCELED")]
    CANCELED,
    #[serde(rename = "FILLED")]
    FILLED,
    #[serde(rename = "EXPIRED")]
    EXPIRED,

}




