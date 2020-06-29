/* 
 * Blockchain.com Exchange REST API
 *
 * ## Introduction Welcome to Blockchain.com's Exchange API and developer documentation. These documents detail and give examples of various functionality offered by the API such as receiving real time market data, requesting balance information and performing trades. ## To Get Started Create or log into your existing Blockchain.com Exchange account Select API from the drop down menu Fill out form and click “Create New API Key Now” Once generated you can view your keys under API Settings 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using NUnit.Framework;

using System;
using System.Linq;
using System.IO;
using System.Collections.Generic;
using Org.OpenAPITools.com.blockchain.exchange.rest.api;
using Org.OpenAPITools.com.blockchain.exchange.rest.model;
using Org.OpenAPITools.Client;
using System.Reflection;
using Newtonsoft.Json;

namespace Org.OpenAPITools.Test
{
    /// <summary>
    ///  Class for testing CreateWithdrawalRequest
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the model.
    /// </remarks>
    public class CreateWithdrawalRequestTests
    {
        // TODO uncomment below to declare an instance variable for CreateWithdrawalRequest
        //private CreateWithdrawalRequest instance;

        /// <summary>
        /// Setup before each test
        /// </summary>
        [SetUp]
        public void Init()
        {
            // TODO uncomment below to create an instance of CreateWithdrawalRequest
            //instance = new CreateWithdrawalRequest();
        }

        /// <summary>
        /// Clean up after each test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of CreateWithdrawalRequest
        /// </summary>
        [Test]
        public void CreateWithdrawalRequestInstanceTest()
        {
            // TODO uncomment below to test "IsInstanceOf" CreateWithdrawalRequest
            //Assert.IsInstanceOf(typeof(CreateWithdrawalRequest), instance);
        }


        /// <summary>
        /// Test the property 'Amount'
        /// </summary>
        [Test]
        public void AmountTest()
        {
            // TODO unit test for the property 'Amount'
        }
        /// <summary>
        /// Test the property 'Currency'
        /// </summary>
        [Test]
        public void CurrencyTest()
        {
            // TODO unit test for the property 'Currency'
        }
        /// <summary>
        /// Test the property 'Beneficiary'
        /// </summary>
        [Test]
        public void BeneficiaryTest()
        {
            // TODO unit test for the property 'Beneficiary'
        }
        /// <summary>
        /// Test the property 'SendMax'
        /// </summary>
        [Test]
        public void SendMaxTest()
        {
            // TODO unit test for the property 'SendMax'
        }

    }

}
