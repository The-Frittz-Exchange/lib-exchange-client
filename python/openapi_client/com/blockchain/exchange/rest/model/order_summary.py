# coding: utf-8

"""
    Blockchain.com Exchange REST API

    ## Introduction Welcome to Blockchain.com's Exchange API and developer documentation. These documents detail and give examples of various functionality offered by the API such as receiving real time market data, requesting balance information and performing trades. ## To Get Started Create or log into your existing Blockchain.com Exchange account Select API from the drop down menu Fill out form and click “Create New API Key Now” Once generated you can view your keys under API Settings   # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from openapi_client.configuration import Configuration


class OrderSummary(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'ex_ord_id': 'int',
        'cl_ord_id': 'str',
        'ord_status': 'OrderStatus',
        'text': 'str',
        'symbol': 'str',
        'last_shares': 'float',
        'last_px': 'float',
        'leaves_qty': 'float',
        'cum_qty': 'float',
        'avg_px': 'float',
        'timestamp': 'int'
    }

    attribute_map = {
        'ex_ord_id': 'exOrdId',
        'cl_ord_id': 'clOrdId',
        'ord_status': 'ordStatus',
        'text': 'text',
        'symbol': 'symbol',
        'last_shares': 'lastShares',
        'last_px': 'lastPx',
        'leaves_qty': 'leavesQty',
        'cum_qty': 'cumQty',
        'avg_px': 'avgPx',
        'timestamp': 'timestamp'
    }

    def __init__(self, ex_ord_id=None, cl_ord_id=None, ord_status=None, text=None, symbol=None, last_shares=None, last_px=None, leaves_qty=None, cum_qty=None, avg_px=None, timestamp=None, local_vars_configuration=None):  # noqa: E501
        """OrderSummary - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._ex_ord_id = None
        self._cl_ord_id = None
        self._ord_status = None
        self._text = None
        self._symbol = None
        self._last_shares = None
        self._last_px = None
        self._leaves_qty = None
        self._cum_qty = None
        self._avg_px = None
        self._timestamp = None
        self.discriminator = None

        if ex_ord_id is not None:
            self.ex_ord_id = ex_ord_id
        if cl_ord_id is not None:
            self.cl_ord_id = cl_ord_id
        if ord_status is not None:
            self.ord_status = ord_status
        if text is not None:
            self.text = text
        if symbol is not None:
            self.symbol = symbol
        if last_shares is not None:
            self.last_shares = last_shares
        if last_px is not None:
            self.last_px = last_px
        if leaves_qty is not None:
            self.leaves_qty = leaves_qty
        if cum_qty is not None:
            self.cum_qty = cum_qty
        if avg_px is not None:
            self.avg_px = avg_px
        if timestamp is not None:
            self.timestamp = timestamp

    @property
    def ex_ord_id(self):
        """Gets the ex_ord_id of this OrderSummary.  # noqa: E501

        The unique order id assigned by the exchange  # noqa: E501

        :return: The ex_ord_id of this OrderSummary.  # noqa: E501
        :rtype: int
        """
        return self._ex_ord_id

    @ex_ord_id.setter
    def ex_ord_id(self, ex_ord_id):
        """Sets the ex_ord_id of this OrderSummary.

        The unique order id assigned by the exchange  # noqa: E501

        :param ex_ord_id: The ex_ord_id of this OrderSummary.  # noqa: E501
        :type: int
        """

        self._ex_ord_id = ex_ord_id

    @property
    def cl_ord_id(self):
        """Gets the cl_ord_id of this OrderSummary.  # noqa: E501

        Reference field provided by client and cannot exceed 20 characters  # noqa: E501

        :return: The cl_ord_id of this OrderSummary.  # noqa: E501
        :rtype: str
        """
        return self._cl_ord_id

    @cl_ord_id.setter
    def cl_ord_id(self, cl_ord_id):
        """Sets the cl_ord_id of this OrderSummary.

        Reference field provided by client and cannot exceed 20 characters  # noqa: E501

        :param cl_ord_id: The cl_ord_id of this OrderSummary.  # noqa: E501
        :type: str
        """
        if (self.local_vars_configuration.client_side_validation and
                cl_ord_id is not None and len(cl_ord_id) > 20):
            raise ValueError("Invalid value for `cl_ord_id`, length must be less than or equal to `20`")  # noqa: E501

        self._cl_ord_id = cl_ord_id

    @property
    def ord_status(self):
        """Gets the ord_status of this OrderSummary.  # noqa: E501


        :return: The ord_status of this OrderSummary.  # noqa: E501
        :rtype: OrderStatus
        """
        return self._ord_status

    @ord_status.setter
    def ord_status(self, ord_status):
        """Sets the ord_status of this OrderSummary.


        :param ord_status: The ord_status of this OrderSummary.  # noqa: E501
        :type: OrderStatus
        """

        self._ord_status = ord_status

    @property
    def text(self):
        """Gets the text of this OrderSummary.  # noqa: E501

        The reason for rejecting the order, if applicable  # noqa: E501

        :return: The text of this OrderSummary.  # noqa: E501
        :rtype: str
        """
        return self._text

    @text.setter
    def text(self, text):
        """Sets the text of this OrderSummary.

        The reason for rejecting the order, if applicable  # noqa: E501

        :param text: The text of this OrderSummary.  # noqa: E501
        :type: str
        """

        self._text = text

    @property
    def symbol(self):
        """Gets the symbol of this OrderSummary.  # noqa: E501

        Blockchain symbol identifier  # noqa: E501

        :return: The symbol of this OrderSummary.  # noqa: E501
        :rtype: str
        """
        return self._symbol

    @symbol.setter
    def symbol(self, symbol):
        """Sets the symbol of this OrderSummary.

        Blockchain symbol identifier  # noqa: E501

        :param symbol: The symbol of this OrderSummary.  # noqa: E501
        :type: str
        """
        if (self.local_vars_configuration.client_side_validation and
                symbol is not None and not re.search(r'^[A-Z]{3,5}-[A-Z]{3,5}$', symbol)):  # noqa: E501
            raise ValueError(r"Invalid value for `symbol`, must be a follow pattern or equal to `/^[A-Z]{3,5}-[A-Z]{3,5}$/`")  # noqa: E501

        self._symbol = symbol

    @property
    def last_shares(self):
        """Gets the last_shares of this OrderSummary.  # noqa: E501

        The executed quantity for the order's last fill  # noqa: E501

        :return: The last_shares of this OrderSummary.  # noqa: E501
        :rtype: float
        """
        return self._last_shares

    @last_shares.setter
    def last_shares(self, last_shares):
        """Sets the last_shares of this OrderSummary.

        The executed quantity for the order's last fill  # noqa: E501

        :param last_shares: The last_shares of this OrderSummary.  # noqa: E501
        :type: float
        """

        self._last_shares = last_shares

    @property
    def last_px(self):
        """Gets the last_px of this OrderSummary.  # noqa: E501

        The executed price for the last fill  # noqa: E501

        :return: The last_px of this OrderSummary.  # noqa: E501
        :rtype: float
        """
        return self._last_px

    @last_px.setter
    def last_px(self, last_px):
        """Sets the last_px of this OrderSummary.

        The executed price for the last fill  # noqa: E501

        :param last_px: The last_px of this OrderSummary.  # noqa: E501
        :type: float
        """

        self._last_px = last_px

    @property
    def leaves_qty(self):
        """Gets the leaves_qty of this OrderSummary.  # noqa: E501

        For Open and Partially Filled orders this is the remaining quantity open for execution. For Canceled and Expired orders this is the quantity than was still open before cancellation/expiration. For Rejected order this is equal to orderQty. For other states this is always zero.  # noqa: E501

        :return: The leaves_qty of this OrderSummary.  # noqa: E501
        :rtype: float
        """
        return self._leaves_qty

    @leaves_qty.setter
    def leaves_qty(self, leaves_qty):
        """Sets the leaves_qty of this OrderSummary.

        For Open and Partially Filled orders this is the remaining quantity open for execution. For Canceled and Expired orders this is the quantity than was still open before cancellation/expiration. For Rejected order this is equal to orderQty. For other states this is always zero.  # noqa: E501

        :param leaves_qty: The leaves_qty of this OrderSummary.  # noqa: E501
        :type: float
        """

        self._leaves_qty = leaves_qty

    @property
    def cum_qty(self):
        """Gets the cum_qty of this OrderSummary.  # noqa: E501

        The quantity of the order which has been filled  # noqa: E501

        :return: The cum_qty of this OrderSummary.  # noqa: E501
        :rtype: float
        """
        return self._cum_qty

    @cum_qty.setter
    def cum_qty(self, cum_qty):
        """Sets the cum_qty of this OrderSummary.

        The quantity of the order which has been filled  # noqa: E501

        :param cum_qty: The cum_qty of this OrderSummary.  # noqa: E501
        :type: float
        """

        self._cum_qty = cum_qty

    @property
    def avg_px(self):
        """Gets the avg_px of this OrderSummary.  # noqa: E501

        Calculated the Volume Weighted Average Price of all fills for this order  # noqa: E501

        :return: The avg_px of this OrderSummary.  # noqa: E501
        :rtype: float
        """
        return self._avg_px

    @avg_px.setter
    def avg_px(self, avg_px):
        """Sets the avg_px of this OrderSummary.

        Calculated the Volume Weighted Average Price of all fills for this order  # noqa: E501

        :param avg_px: The avg_px of this OrderSummary.  # noqa: E501
        :type: float
        """

        self._avg_px = avg_px

    @property
    def timestamp(self):
        """Gets the timestamp of this OrderSummary.  # noqa: E501

        Time in ms since 01/01/1970 (epoch)  # noqa: E501

        :return: The timestamp of this OrderSummary.  # noqa: E501
        :rtype: int
        """
        return self._timestamp

    @timestamp.setter
    def timestamp(self, timestamp):
        """Sets the timestamp of this OrderSummary.

        Time in ms since 01/01/1970 (epoch)  # noqa: E501

        :param timestamp: The timestamp of this OrderSummary.  # noqa: E501
        :type: int
        """

        self._timestamp = timestamp

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, OrderSummary):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, OrderSummary):
            return True

        return self.to_dict() != other.to_dict()
