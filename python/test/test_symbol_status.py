# coding: utf-8

"""
    Blockchain.com Exchange REST API

    ## Introduction Welcome to Blockchain.com's Exchange API and developer documentation. These documents detail and give examples of various functionality offered by the API such as receiving real time market data, requesting balance information and performing trades. ## To Get Started Create or log into your existing Blockchain.com Exchange account Select API from the drop down menu Fill out form and click “Create New API Key Now” Once generated you can view your keys under API Settings   # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest
import datetime

import openapi_client
from openapi_client.com.blockchain.exchange.rest.model.symbol_status import SymbolStatus  # noqa: E501
from openapi_client.rest import ApiException

class TestSymbolStatus(unittest.TestCase):
    """SymbolStatus unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test SymbolStatus
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.symbol_status.SymbolStatus()  # noqa: E501
        if include_optional :
            return SymbolStatus(
                base_currency = 'BTC-USD', 
                base_currency_scale = 8, 
                counter_currency = 'BTC-USD', 
                counter_currency_scale = 2, 
                min_price_increment = 10, 
                min_price_increment_scale = 0, 
                min_order_size = 10, 
                min_order_size_scale = 2, 
                max_order_size = 0, 
                max_order_size_scale = 8, 
                lot_size = 5, 
                lot_size_scale = 2, 
                status = 'open', 
                id = 1, 
                auction_price = 0.0, 
                auction_size = 0.0, 
                auction_time = 1530, 
                imbalance = 0.0
            )
        else :
            return SymbolStatus(
        )

    def testSymbolStatus(self):
        """Test SymbolStatus"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
