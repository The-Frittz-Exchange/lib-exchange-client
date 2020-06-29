/*
 * Blockchain.com Exchange REST API
 *
 * ## Introduction Welcome to Blockchain.com's Exchange API and developer documentation. These documents detail and give examples of various functionality offered by the API such as receiving real time market data, requesting balance information and performing trades. ## To Get Started Create or log into your existing Blockchain.com Exchange account Select API from the drop down menu Fill out form and click “Create New API Key Now” Once generated you can view your keys under API Settings 
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi
// Fees struct for Fees
type Fees struct {
	Tier int32 `json:"tier,omitempty"`
	MakerRate float64 `json:"makerRate"`
	TakerRate float64 `json:"takerRate"`
	VolumeInUSD float64 `json:"volumeInUSD"`
}
