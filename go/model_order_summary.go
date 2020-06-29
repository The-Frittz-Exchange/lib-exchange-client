/*
 * Blockchain.com Exchange REST API
 *
 * ## Introduction Welcome to Blockchain.com's Exchange API and developer documentation. These documents detail and give examples of various functionality offered by the API such as receiving real time market data, requesting balance information and performing trades. ## To Get Started Create or log into your existing Blockchain.com Exchange account Select API from the drop down menu Fill out form and click “Create New API Key Now” Once generated you can view your keys under API Settings 
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi
// OrderSummary struct for OrderSummary
type OrderSummary struct {
	// The unique order id assigned by the exchange
	ExOrdId int64 `json:"exOrdId,omitempty"`
	// Reference field provided by client and cannot exceed 20 characters
	ClOrdId string `json:"clOrdId,omitempty"`
	OrdStatus OrderStatus `json:"ordStatus,omitempty"`
	// The reason for rejecting the order, if applicable
	Text string `json:"text,omitempty"`
	// Blockchain symbol identifier
	Symbol string `json:"symbol,omitempty"`
	// The executed quantity for the order's last fill
	LastShares float64 `json:"lastShares,omitempty"`
	// The executed price for the last fill
	LastPx float64 `json:"lastPx,omitempty"`
	// For Open and Partially Filled orders this is the remaining quantity open for execution. For Canceled and Expired orders this is the quantity than was still open before cancellation/expiration. For Rejected order this is equal to orderQty. For other states this is always zero.
	LeavesQty float64 `json:"leavesQty,omitempty"`
	// The quantity of the order which has been filled
	CumQty float64 `json:"cumQty,omitempty"`
	// Calculated the Volume Weighted Average Price of all fills for this order
	AvgPx float64 `json:"avgPx,omitempty"`
	// Time in ms since 01/01/1970 (epoch)
	Timestamp int64 `json:"timestamp,omitempty"`
}
