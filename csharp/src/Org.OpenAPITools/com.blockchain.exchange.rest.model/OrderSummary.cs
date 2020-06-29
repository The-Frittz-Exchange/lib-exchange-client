/* 
 * Blockchain.com Exchange REST API
 *
 * ## Introduction Welcome to Blockchain.com's Exchange API and developer documentation. These documents detail and give examples of various functionality offered by the API such as receiving real time market data, requesting balance information and performing trades. ## To Get Started Create or log into your existing Blockchain.com Exchange account Select API from the drop down menu Fill out form and click “Create New API Key Now” Once generated you can view your keys under API Settings 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Org.OpenAPITools.Client.OpenAPIDateConverter;

namespace Org.OpenAPITools.com.blockchain.exchange.rest.model
{
    /// <summary>
    /// OrderSummary
    /// </summary>
    [DataContract]
    public partial class OrderSummary :  IEquatable<OrderSummary>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets OrdStatus
        /// </summary>
        [DataMember(Name="ordStatus", EmitDefaultValue=false)]
        public OrderStatus? OrdStatus { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="OrderSummary" /> class.
        /// </summary>
        /// <param name="exOrdId">The unique order id assigned by the exchange.</param>
        /// <param name="clOrdId">Reference field provided by client and cannot exceed 20 characters.</param>
        /// <param name="ordStatus">ordStatus.</param>
        /// <param name="text">The reason for rejecting the order, if applicable.</param>
        /// <param name="symbol">Blockchain symbol identifier.</param>
        /// <param name="lastShares">The executed quantity for the order&#39;s last fill.</param>
        /// <param name="lastPx">The executed price for the last fill.</param>
        /// <param name="leavesQty">For Open and Partially Filled orders this is the remaining quantity open for execution. For Canceled and Expired orders this is the quantity than was still open before cancellation/expiration. For Rejected order this is equal to orderQty. For other states this is always zero..</param>
        /// <param name="cumQty">The quantity of the order which has been filled.</param>
        /// <param name="avgPx">Calculated the Volume Weighted Average Price of all fills for this order.</param>
        /// <param name="timestamp">Time in ms since 01/01/1970 (epoch).</param>
        public OrderSummary(long exOrdId = default(long), string clOrdId = default(string), OrderStatus? ordStatus = default(OrderStatus?), string text = default(string), string symbol = default(string), double lastShares = default(double), double lastPx = default(double), double leavesQty = default(double), double cumQty = default(double), double avgPx = default(double), long timestamp = default(long))
        {
            this.ExOrdId = exOrdId;
            this.ClOrdId = clOrdId;
            this.OrdStatus = ordStatus;
            this.Text = text;
            this.Symbol = symbol;
            this.LastShares = lastShares;
            this.LastPx = lastPx;
            this.LeavesQty = leavesQty;
            this.CumQty = cumQty;
            this.AvgPx = avgPx;
            this.Timestamp = timestamp;
        }
        
        /// <summary>
        /// The unique order id assigned by the exchange
        /// </summary>
        /// <value>The unique order id assigned by the exchange</value>
        [DataMember(Name="exOrdId", EmitDefaultValue=false)]
        public long ExOrdId { get; set; }

        /// <summary>
        /// Reference field provided by client and cannot exceed 20 characters
        /// </summary>
        /// <value>Reference field provided by client and cannot exceed 20 characters</value>
        [DataMember(Name="clOrdId", EmitDefaultValue=false)]
        public string ClOrdId { get; set; }


        /// <summary>
        /// The reason for rejecting the order, if applicable
        /// </summary>
        /// <value>The reason for rejecting the order, if applicable</value>
        [DataMember(Name="text", EmitDefaultValue=false)]
        public string Text { get; set; }

        /// <summary>
        /// Blockchain symbol identifier
        /// </summary>
        /// <value>Blockchain symbol identifier</value>
        [DataMember(Name="symbol", EmitDefaultValue=false)]
        public string Symbol { get; set; }

        /// <summary>
        /// The executed quantity for the order&#39;s last fill
        /// </summary>
        /// <value>The executed quantity for the order&#39;s last fill</value>
        [DataMember(Name="lastShares", EmitDefaultValue=false)]
        public double LastShares { get; set; }

        /// <summary>
        /// The executed price for the last fill
        /// </summary>
        /// <value>The executed price for the last fill</value>
        [DataMember(Name="lastPx", EmitDefaultValue=false)]
        public double LastPx { get; set; }

        /// <summary>
        /// For Open and Partially Filled orders this is the remaining quantity open for execution. For Canceled and Expired orders this is the quantity than was still open before cancellation/expiration. For Rejected order this is equal to orderQty. For other states this is always zero.
        /// </summary>
        /// <value>For Open and Partially Filled orders this is the remaining quantity open for execution. For Canceled and Expired orders this is the quantity than was still open before cancellation/expiration. For Rejected order this is equal to orderQty. For other states this is always zero.</value>
        [DataMember(Name="leavesQty", EmitDefaultValue=false)]
        public double LeavesQty { get; set; }

        /// <summary>
        /// The quantity of the order which has been filled
        /// </summary>
        /// <value>The quantity of the order which has been filled</value>
        [DataMember(Name="cumQty", EmitDefaultValue=false)]
        public double CumQty { get; set; }

        /// <summary>
        /// Calculated the Volume Weighted Average Price of all fills for this order
        /// </summary>
        /// <value>Calculated the Volume Weighted Average Price of all fills for this order</value>
        [DataMember(Name="avgPx", EmitDefaultValue=false)]
        public double AvgPx { get; set; }

        /// <summary>
        /// Time in ms since 01/01/1970 (epoch)
        /// </summary>
        /// <value>Time in ms since 01/01/1970 (epoch)</value>
        [DataMember(Name="timestamp", EmitDefaultValue=false)]
        public long Timestamp { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class OrderSummary {\n");
            sb.Append("  ExOrdId: ").Append(ExOrdId).Append("\n");
            sb.Append("  ClOrdId: ").Append(ClOrdId).Append("\n");
            sb.Append("  OrdStatus: ").Append(OrdStatus).Append("\n");
            sb.Append("  Text: ").Append(Text).Append("\n");
            sb.Append("  Symbol: ").Append(Symbol).Append("\n");
            sb.Append("  LastShares: ").Append(LastShares).Append("\n");
            sb.Append("  LastPx: ").Append(LastPx).Append("\n");
            sb.Append("  LeavesQty: ").Append(LeavesQty).Append("\n");
            sb.Append("  CumQty: ").Append(CumQty).Append("\n");
            sb.Append("  AvgPx: ").Append(AvgPx).Append("\n");
            sb.Append("  Timestamp: ").Append(Timestamp).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as OrderSummary);
        }

        /// <summary>
        /// Returns true if OrderSummary instances are equal
        /// </summary>
        /// <param name="input">Instance of OrderSummary to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(OrderSummary input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ExOrdId == input.ExOrdId ||
                    (this.ExOrdId != null &&
                    this.ExOrdId.Equals(input.ExOrdId))
                ) && 
                (
                    this.ClOrdId == input.ClOrdId ||
                    (this.ClOrdId != null &&
                    this.ClOrdId.Equals(input.ClOrdId))
                ) && 
                (
                    this.OrdStatus == input.OrdStatus ||
                    (this.OrdStatus != null &&
                    this.OrdStatus.Equals(input.OrdStatus))
                ) && 
                (
                    this.Text == input.Text ||
                    (this.Text != null &&
                    this.Text.Equals(input.Text))
                ) && 
                (
                    this.Symbol == input.Symbol ||
                    (this.Symbol != null &&
                    this.Symbol.Equals(input.Symbol))
                ) && 
                (
                    this.LastShares == input.LastShares ||
                    (this.LastShares != null &&
                    this.LastShares.Equals(input.LastShares))
                ) && 
                (
                    this.LastPx == input.LastPx ||
                    (this.LastPx != null &&
                    this.LastPx.Equals(input.LastPx))
                ) && 
                (
                    this.LeavesQty == input.LeavesQty ||
                    (this.LeavesQty != null &&
                    this.LeavesQty.Equals(input.LeavesQty))
                ) && 
                (
                    this.CumQty == input.CumQty ||
                    (this.CumQty != null &&
                    this.CumQty.Equals(input.CumQty))
                ) && 
                (
                    this.AvgPx == input.AvgPx ||
                    (this.AvgPx != null &&
                    this.AvgPx.Equals(input.AvgPx))
                ) && 
                (
                    this.Timestamp == input.Timestamp ||
                    (this.Timestamp != null &&
                    this.Timestamp.Equals(input.Timestamp))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.ExOrdId != null)
                    hashCode = hashCode * 59 + this.ExOrdId.GetHashCode();
                if (this.ClOrdId != null)
                    hashCode = hashCode * 59 + this.ClOrdId.GetHashCode();
                if (this.OrdStatus != null)
                    hashCode = hashCode * 59 + this.OrdStatus.GetHashCode();
                if (this.Text != null)
                    hashCode = hashCode * 59 + this.Text.GetHashCode();
                if (this.Symbol != null)
                    hashCode = hashCode * 59 + this.Symbol.GetHashCode();
                if (this.LastShares != null)
                    hashCode = hashCode * 59 + this.LastShares.GetHashCode();
                if (this.LastPx != null)
                    hashCode = hashCode * 59 + this.LastPx.GetHashCode();
                if (this.LeavesQty != null)
                    hashCode = hashCode * 59 + this.LeavesQty.GetHashCode();
                if (this.CumQty != null)
                    hashCode = hashCode * 59 + this.CumQty.GetHashCode();
                if (this.AvgPx != null)
                    hashCode = hashCode * 59 + this.AvgPx.GetHashCode();
                if (this.Timestamp != null)
                    hashCode = hashCode * 59 + this.Timestamp.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            // ClOrdId (string) maxLength
            if(this.ClOrdId != null && this.ClOrdId.Length > 20)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for ClOrdId, length must be less than 20.", new [] { "ClOrdId" });
            }

            

            
            // Symbol (string) pattern
            Regex regexSymbol = new Regex(@"^[A-Z]{3,5}-[A-Z]{3,5}$", RegexOptions.CultureInvariant);
            if (false == regexSymbol.Match(this.Symbol).Success)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Symbol, must match a pattern of " + regexSymbol, new [] { "Symbol" });
            }

            yield break;
        }
    }

}
