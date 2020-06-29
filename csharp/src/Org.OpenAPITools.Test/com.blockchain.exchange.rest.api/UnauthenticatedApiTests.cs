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
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using Org.OpenAPITools.Client;
using Org.OpenAPITools.com.blockchain.exchange.rest.api;
using Org.OpenAPITools.com.blockchain.exchange.rest.model;

namespace Org.OpenAPITools.Test
{
    /// <summary>
    ///  Class for testing UnauthenticatedApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class UnauthenticatedApiTests
    {
        private UnauthenticatedApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new UnauthenticatedApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of UnauthenticatedApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' UnauthenticatedApi
            //Assert.IsInstanceOf(typeof(UnauthenticatedApi), instance);
        }

        
        /// <summary>
        /// Test GetL2OrderBook
        /// </summary>
        [Test]
        public void GetL2OrderBookTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string symbol = null;
            //var response = instance.GetL2OrderBook(symbol);
            //Assert.IsInstanceOf(typeof(OrderBook), response, "response is OrderBook");
        }
        
        /// <summary>
        /// Test GetL3OrderBook
        /// </summary>
        [Test]
        public void GetL3OrderBookTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string symbol = null;
            //var response = instance.GetL3OrderBook(symbol);
            //Assert.IsInstanceOf(typeof(OrderBook), response, "response is OrderBook");
        }
        
        /// <summary>
        /// Test GetSymbolByName
        /// </summary>
        [Test]
        public void GetSymbolByNameTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string symbol = null;
            //var response = instance.GetSymbolByName(symbol);
            //Assert.IsInstanceOf(typeof(SymbolStatus), response, "response is SymbolStatus");
        }
        
        /// <summary>
        /// Test GetSymbols
        /// </summary>
        [Test]
        public void GetSymbolsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.GetSymbols();
            //Assert.IsInstanceOf(typeof(Dictionary<string, SymbolStatus>), response, "response is Dictionary<string, SymbolStatus>");
        }
        
        /// <summary>
        /// Test GetTickerBySymbol
        /// </summary>
        [Test]
        public void GetTickerBySymbolTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string symbol = null;
            //var response = instance.GetTickerBySymbol(symbol);
            //Assert.IsInstanceOf(typeof(PriceEvent), response, "response is PriceEvent");
        }
        
        /// <summary>
        /// Test GetTickers
        /// </summary>
        [Test]
        public void GetTickersTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.GetTickers();
            //Assert.IsInstanceOf(typeof(List<PriceEvent>), response, "response is List<PriceEvent>");
        }
        
    }

}
