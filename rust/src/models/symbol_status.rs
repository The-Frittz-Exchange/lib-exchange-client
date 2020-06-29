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
pub struct SymbolStatus {
    /// Blockchain symbol identifier
    #[serde(rename = "base_currency", skip_serializing_if = "Option::is_none")]
    pub base_currency: Option<String>,
    /// The number of decimals the currency can be split in
    #[serde(rename = "base_currency_scale", skip_serializing_if = "Option::is_none")]
    pub base_currency_scale: Option<i32>,
    /// Blockchain symbol identifier
    #[serde(rename = "counter_currency", skip_serializing_if = "Option::is_none")]
    pub counter_currency: Option<String>,
    /// The number of decimals the currency can be split in
    #[serde(rename = "counter_currency_scale", skip_serializing_if = "Option::is_none")]
    pub counter_currency_scale: Option<i32>,
    /// The price of the instrument must be a multiple of min_price_increment * (10^-min_price_increment_scale)
    #[serde(rename = "min_price_increment", skip_serializing_if = "Option::is_none")]
    pub min_price_increment: Option<i64>,
    #[serde(rename = "min_price_increment_scale", skip_serializing_if = "Option::is_none")]
    pub min_price_increment_scale: Option<i32>,
    /// The minimum quantity for an order for this instrument must be min_order_size*(10^-min_order_size_scale)
    #[serde(rename = "min_order_size", skip_serializing_if = "Option::is_none")]
    pub min_order_size: Option<i64>,
    #[serde(rename = "min_order_size_scale", skip_serializing_if = "Option::is_none")]
    pub min_order_size_scale: Option<i32>,
    /// The maximum quantity for an order for this instrument is max_order_size*(10^-max_order_size_scale). If this equal to zero, there is no limit
    #[serde(rename = "max_order_size", skip_serializing_if = "Option::is_none")]
    pub max_order_size: Option<i64>,
    #[serde(rename = "max_order_size_scale", skip_serializing_if = "Option::is_none")]
    pub max_order_size_scale: Option<i32>,
    #[serde(rename = "lot_size", skip_serializing_if = "Option::is_none")]
    pub lot_size: Option<i64>,
    #[serde(rename = "lot_size_scale", skip_serializing_if = "Option::is_none")]
    pub lot_size_scale: Option<i32>,
    /// Symbol status; open, close, suspend, halt, halt-freeze.
    #[serde(rename = "status", skip_serializing_if = "Option::is_none")]
    pub status: Option<Status>,
    #[serde(rename = "id", skip_serializing_if = "Option::is_none")]
    pub id: Option<i64>,
    /// If the symbol is halted and will open on an auction, this will be the opening price.
    #[serde(rename = "auction_price", skip_serializing_if = "Option::is_none")]
    pub auction_price: Option<f64>,
    /// Opening size
    #[serde(rename = "auction_size", skip_serializing_if = "Option::is_none")]
    pub auction_size: Option<f64>,
    /// Opening time in HHMM format
    #[serde(rename = "auction_time", skip_serializing_if = "Option::is_none")]
    pub auction_time: Option<i32>,
    /// Auction imbalance. If > 0 then there will be buy orders left over at the auction price. If < 0 then there will be sell orders left over at the auction price.
    #[serde(rename = "imbalance", skip_serializing_if = "Option::is_none")]
    pub imbalance: Option<f64>,
}

impl SymbolStatus {
    pub fn new() -> SymbolStatus {
        SymbolStatus {
            base_currency: None,
            base_currency_scale: None,
            counter_currency: None,
            counter_currency_scale: None,
            min_price_increment: None,
            min_price_increment_scale: None,
            min_order_size: None,
            min_order_size_scale: None,
            max_order_size: None,
            max_order_size_scale: None,
            lot_size: None,
            lot_size_scale: None,
            status: None,
            id: None,
            auction_price: None,
            auction_size: None,
            auction_time: None,
            imbalance: None,
        }
    }
}

/// Symbol status; open, close, suspend, halt, halt-freeze.
#[derive(Clone, Copy, Debug, Eq, PartialEq, Ord, PartialOrd, Hash, Serialize, Deserialize)]
pub enum Status {
    #[serde(rename = "open")]
    Open,
    #[serde(rename = "close")]
    Close,
    #[serde(rename = "suspend")]
    Suspend,
    #[serde(rename = "halt")]
    Halt,
    #[serde(rename = "halt-freeze")]
    HaltFreeze,
}

