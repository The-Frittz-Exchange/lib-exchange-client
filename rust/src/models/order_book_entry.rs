/*
 * Blockchain.com Exchange REST API
 *
 * ## Introduction Welcome to Blockchain.com's Exchange API and developer documentation. These documents detail and give examples of various functionality offered by the API such as receiving real time market data, requesting balance information and performing trades. ## To Get Started Create or log into your existing Blockchain.com Exchange account Select API from the drop down menu Fill out form and click “Create New API Key Now” Once generated you can view your keys under API Settings 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://openapi-generator.tech
 */




#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct OrderBookEntry {
    #[serde(rename = "px", skip_serializing_if = "Option::is_none")]
    pub px: Option<f64>,
    #[serde(rename = "qty", skip_serializing_if = "Option::is_none")]
    pub qty: Option<f64>,
    #[serde(rename = "num", skip_serializing_if = "Option::is_none")]
    pub num: Option<i32>,
}

impl OrderBookEntry {
    pub fn new() -> OrderBookEntry {
        OrderBookEntry {
            px: None,
            qty: None,
            num: None,
        }
    }
}


