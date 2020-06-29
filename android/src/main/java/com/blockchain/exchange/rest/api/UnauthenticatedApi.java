/**
 * Blockchain.com Exchange REST API
 * ## Introduction Welcome to Blockchain.com's Exchange API and developer documentation. These documents detail and give examples of various functionality offered by the API such as receiving real time market data, requesting balance information and performing trades. ## To Get Started Create or log into your existing Blockchain.com Exchange account Select API from the drop down menu Fill out form and click “Create New API Key Now” Once generated you can view your keys under API Settings 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

package com.blockchain.exchange.rest.api;

import com.blockchain.exchange.rest.ApiInvoker;
import com.blockchain.exchange.rest.ApiException;
import com.blockchain.exchange.rest.Pair;

import com.blockchain.exchange.rest.model.*;

import java.util.*;

import com.android.volley.Response;
import com.android.volley.VolleyError;

import com.blockchain.exchange.rest.model.OrderBook;
import com.blockchain.exchange.rest.model.PriceEvent;
import com.blockchain.exchange.rest.model.SymbolStatus;

import org.apache.http.HttpEntity;
import org.apache.http.entity.mime.MultipartEntityBuilder;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;

public class UnauthenticatedApi {
  String basePath = "https://api.blockchain.com/v3/exchange";
  ApiInvoker apiInvoker = ApiInvoker.getInstance();

  public void addHeader(String key, String value) {
    getInvoker().addDefaultHeader(key, value);
  }

  public ApiInvoker getInvoker() {
    return apiInvoker;
  }

  public void setBasePath(String basePath) {
    this.basePath = basePath;
  }

  public String getBasePath() {
    return basePath;
  }

  /**
  * L2 Order Book
  * Level 2 Order Book data is available through the l2 channel. This channel returns the volume available at each price. All the price levels are retrieved with this channel. Each entry in bids and asks arrays is a price level, along with its price (px), quantity (qty) and number of orders (num) attributes.
   * @param symbol Symbol
   * @return OrderBook
  */
  public OrderBook getL2OrderBook (String symbol) throws TimeoutException, ExecutionException, InterruptedException, ApiException {
    Object postBody = null;
    // verify the required parameter 'symbol' is set
    if (symbol == null) {
      VolleyError error = new VolleyError("Missing the required parameter 'symbol' when calling getL2OrderBook",
        new ApiException(400, "Missing the required parameter 'symbol' when calling getL2OrderBook"));
    }

    // create path and map variables
    String path = "/l2/{symbol}".replaceAll("\\{" + "symbol" + "\\}", apiInvoker.escapeString(symbol.toString()));

    // query params
    List<Pair> queryParams = new ArrayList<Pair>();
    // header params
    Map<String, String> headerParams = new HashMap<String, String>();
    // form params
    Map<String, String> formParams = new HashMap<String, String>();
    String[] contentTypes = {
    };
    String contentType = contentTypes.length > 0 ? contentTypes[0] : "application/json";

    if (contentType.startsWith("multipart/form-data")) {
      // file uploading
      MultipartEntityBuilder localVarBuilder = MultipartEntityBuilder.create();
      HttpEntity httpEntity = localVarBuilder.build();
      postBody = httpEntity;
    } else {
      // normal form params
    }

    String[] authNames = new String[] { "ApiKeyAuth" };

    try {
      String localVarResponse = apiInvoker.invokeAPI (basePath, path, "GET", queryParams, postBody, headerParams, formParams, contentType, authNames);
      if (localVarResponse != null) {
         return (OrderBook) ApiInvoker.deserialize(localVarResponse, "", OrderBook.class);
      } else {
         return null;
      }
    } catch (ApiException ex) {
       throw ex;
    } catch (InterruptedException ex) {
       throw ex;
    } catch (ExecutionException ex) {
      if (ex.getCause() instanceof VolleyError) {
        VolleyError volleyError = (VolleyError)ex.getCause();
        if (volleyError.networkResponse != null) {
          throw new ApiException(volleyError.networkResponse.statusCode, volleyError.getMessage());
        }
      }
      throw ex;
    } catch (TimeoutException ex) {
      throw ex;
    }
  }

      /**
   * L2 Order Book
   * Level 2 Order Book data is available through the l2 channel. This channel returns the volume available at each price. All the price levels are retrieved with this channel. Each entry in bids and asks arrays is a price level, along with its price (px), quantity (qty) and number of orders (num) attributes.
   * @param symbol Symbol
  */
  public void getL2OrderBook (String symbol, final Response.Listener<OrderBook> responseListener, final Response.ErrorListener errorListener) {
    Object postBody = null;

    // verify the required parameter 'symbol' is set
    if (symbol == null) {
      VolleyError error = new VolleyError("Missing the required parameter 'symbol' when calling getL2OrderBook",
        new ApiException(400, "Missing the required parameter 'symbol' when calling getL2OrderBook"));
    }

    // create path and map variables
    String path = "/l2/{symbol}".replaceAll("\\{format\\}","json").replaceAll("\\{" + "symbol" + "\\}", apiInvoker.escapeString(symbol.toString()));

    // query params
    List<Pair> queryParams = new ArrayList<Pair>();
    // header params
    Map<String, String> headerParams = new HashMap<String, String>();
    // form params
    Map<String, String> formParams = new HashMap<String, String>();



    String[] contentTypes = {
      
    };
    String contentType = contentTypes.length > 0 ? contentTypes[0] : "application/json";

    if (contentType.startsWith("multipart/form-data")) {
      // file uploading
      MultipartEntityBuilder localVarBuilder = MultipartEntityBuilder.create();
      

      HttpEntity httpEntity = localVarBuilder.build();
      postBody = httpEntity;
    } else {
      // normal form params
          }

    String[] authNames = new String[] { "ApiKeyAuth" };

    try {
      apiInvoker.invokeAPI(basePath, path, "GET", queryParams, postBody, headerParams, formParams, contentType, authNames,
        new Response.Listener<String>() {
          @Override
          public void onResponse(String localVarResponse) {
            try {
              responseListener.onResponse((OrderBook) ApiInvoker.deserialize(localVarResponse,  "", OrderBook.class));
            } catch (ApiException exception) {
               errorListener.onErrorResponse(new VolleyError(exception));
            }
          }
      }, new Response.ErrorListener() {
          @Override
          public void onErrorResponse(VolleyError error) {
            errorListener.onErrorResponse(error);
          }
      });
    } catch (ApiException ex) {
      errorListener.onErrorResponse(new VolleyError(ex));
    }
  }
  /**
  * L3 Order Book
  * Level 3 Order Book data is available through the l3 channel. This channel returns all the order updates reaching the exchange; by applying the updates to the snapshot you can recreate the full state of the orderbook. Each entry in bids and asks arrays is an order, along with its id (id), price (px) and quantity (qty) attributes.
   * @param symbol Symbol
   * @return OrderBook
  */
  public OrderBook getL3OrderBook (String symbol) throws TimeoutException, ExecutionException, InterruptedException, ApiException {
    Object postBody = null;
    // verify the required parameter 'symbol' is set
    if (symbol == null) {
      VolleyError error = new VolleyError("Missing the required parameter 'symbol' when calling getL3OrderBook",
        new ApiException(400, "Missing the required parameter 'symbol' when calling getL3OrderBook"));
    }

    // create path and map variables
    String path = "/l3/{symbol}".replaceAll("\\{" + "symbol" + "\\}", apiInvoker.escapeString(symbol.toString()));

    // query params
    List<Pair> queryParams = new ArrayList<Pair>();
    // header params
    Map<String, String> headerParams = new HashMap<String, String>();
    // form params
    Map<String, String> formParams = new HashMap<String, String>();
    String[] contentTypes = {
    };
    String contentType = contentTypes.length > 0 ? contentTypes[0] : "application/json";

    if (contentType.startsWith("multipart/form-data")) {
      // file uploading
      MultipartEntityBuilder localVarBuilder = MultipartEntityBuilder.create();
      HttpEntity httpEntity = localVarBuilder.build();
      postBody = httpEntity;
    } else {
      // normal form params
    }

    String[] authNames = new String[] { "ApiKeyAuth" };

    try {
      String localVarResponse = apiInvoker.invokeAPI (basePath, path, "GET", queryParams, postBody, headerParams, formParams, contentType, authNames);
      if (localVarResponse != null) {
         return (OrderBook) ApiInvoker.deserialize(localVarResponse, "", OrderBook.class);
      } else {
         return null;
      }
    } catch (ApiException ex) {
       throw ex;
    } catch (InterruptedException ex) {
       throw ex;
    } catch (ExecutionException ex) {
      if (ex.getCause() instanceof VolleyError) {
        VolleyError volleyError = (VolleyError)ex.getCause();
        if (volleyError.networkResponse != null) {
          throw new ApiException(volleyError.networkResponse.statusCode, volleyError.getMessage());
        }
      }
      throw ex;
    } catch (TimeoutException ex) {
      throw ex;
    }
  }

      /**
   * L3 Order Book
   * Level 3 Order Book data is available through the l3 channel. This channel returns all the order updates reaching the exchange; by applying the updates to the snapshot you can recreate the full state of the orderbook. Each entry in bids and asks arrays is an order, along with its id (id), price (px) and quantity (qty) attributes.
   * @param symbol Symbol
  */
  public void getL3OrderBook (String symbol, final Response.Listener<OrderBook> responseListener, final Response.ErrorListener errorListener) {
    Object postBody = null;

    // verify the required parameter 'symbol' is set
    if (symbol == null) {
      VolleyError error = new VolleyError("Missing the required parameter 'symbol' when calling getL3OrderBook",
        new ApiException(400, "Missing the required parameter 'symbol' when calling getL3OrderBook"));
    }

    // create path and map variables
    String path = "/l3/{symbol}".replaceAll("\\{format\\}","json").replaceAll("\\{" + "symbol" + "\\}", apiInvoker.escapeString(symbol.toString()));

    // query params
    List<Pair> queryParams = new ArrayList<Pair>();
    // header params
    Map<String, String> headerParams = new HashMap<String, String>();
    // form params
    Map<String, String> formParams = new HashMap<String, String>();



    String[] contentTypes = {
      
    };
    String contentType = contentTypes.length > 0 ? contentTypes[0] : "application/json";

    if (contentType.startsWith("multipart/form-data")) {
      // file uploading
      MultipartEntityBuilder localVarBuilder = MultipartEntityBuilder.create();
      

      HttpEntity httpEntity = localVarBuilder.build();
      postBody = httpEntity;
    } else {
      // normal form params
          }

    String[] authNames = new String[] { "ApiKeyAuth" };

    try {
      apiInvoker.invokeAPI(basePath, path, "GET", queryParams, postBody, headerParams, formParams, contentType, authNames,
        new Response.Listener<String>() {
          @Override
          public void onResponse(String localVarResponse) {
            try {
              responseListener.onResponse((OrderBook) ApiInvoker.deserialize(localVarResponse,  "", OrderBook.class));
            } catch (ApiException exception) {
               errorListener.onErrorResponse(new VolleyError(exception));
            }
          }
      }, new Response.ErrorListener() {
          @Override
          public void onErrorResponse(VolleyError error) {
            errorListener.onErrorResponse(error);
          }
      });
    } catch (ApiException ex) {
      errorListener.onErrorResponse(new VolleyError(ex));
    }
  }
  /**
  * Symbols
  * When the symbol is not halted the auction data in the message may be blank. When a symbol is in a halt state the auction data will populate as the book builds. When an opening time has been chosen, the auction-time field will show the opening time. Subsequent updates will be sent only if the symbol status changes in any way.
   * @param symbol Symbol
   * @return SymbolStatus
  */
  public SymbolStatus getSymbolByName (String symbol) throws TimeoutException, ExecutionException, InterruptedException, ApiException {
    Object postBody = null;
    // verify the required parameter 'symbol' is set
    if (symbol == null) {
      VolleyError error = new VolleyError("Missing the required parameter 'symbol' when calling getSymbolByName",
        new ApiException(400, "Missing the required parameter 'symbol' when calling getSymbolByName"));
    }

    // create path and map variables
    String path = "/symbols/{symbol}".replaceAll("\\{" + "symbol" + "\\}", apiInvoker.escapeString(symbol.toString()));

    // query params
    List<Pair> queryParams = new ArrayList<Pair>();
    // header params
    Map<String, String> headerParams = new HashMap<String, String>();
    // form params
    Map<String, String> formParams = new HashMap<String, String>();
    String[] contentTypes = {
    };
    String contentType = contentTypes.length > 0 ? contentTypes[0] : "application/json";

    if (contentType.startsWith("multipart/form-data")) {
      // file uploading
      MultipartEntityBuilder localVarBuilder = MultipartEntityBuilder.create();
      HttpEntity httpEntity = localVarBuilder.build();
      postBody = httpEntity;
    } else {
      // normal form params
    }

    String[] authNames = new String[] { "ApiKeyAuth" };

    try {
      String localVarResponse = apiInvoker.invokeAPI (basePath, path, "GET", queryParams, postBody, headerParams, formParams, contentType, authNames);
      if (localVarResponse != null) {
         return (SymbolStatus) ApiInvoker.deserialize(localVarResponse, "", SymbolStatus.class);
      } else {
         return null;
      }
    } catch (ApiException ex) {
       throw ex;
    } catch (InterruptedException ex) {
       throw ex;
    } catch (ExecutionException ex) {
      if (ex.getCause() instanceof VolleyError) {
        VolleyError volleyError = (VolleyError)ex.getCause();
        if (volleyError.networkResponse != null) {
          throw new ApiException(volleyError.networkResponse.statusCode, volleyError.getMessage());
        }
      }
      throw ex;
    } catch (TimeoutException ex) {
      throw ex;
    }
  }

      /**
   * Symbols
   * When the symbol is not halted the auction data in the message may be blank. When a symbol is in a halt state the auction data will populate as the book builds. When an opening time has been chosen, the auction-time field will show the opening time. Subsequent updates will be sent only if the symbol status changes in any way.
   * @param symbol Symbol
  */
  public void getSymbolByName (String symbol, final Response.Listener<SymbolStatus> responseListener, final Response.ErrorListener errorListener) {
    Object postBody = null;

    // verify the required parameter 'symbol' is set
    if (symbol == null) {
      VolleyError error = new VolleyError("Missing the required parameter 'symbol' when calling getSymbolByName",
        new ApiException(400, "Missing the required parameter 'symbol' when calling getSymbolByName"));
    }

    // create path and map variables
    String path = "/symbols/{symbol}".replaceAll("\\{format\\}","json").replaceAll("\\{" + "symbol" + "\\}", apiInvoker.escapeString(symbol.toString()));

    // query params
    List<Pair> queryParams = new ArrayList<Pair>();
    // header params
    Map<String, String> headerParams = new HashMap<String, String>();
    // form params
    Map<String, String> formParams = new HashMap<String, String>();



    String[] contentTypes = {
      
    };
    String contentType = contentTypes.length > 0 ? contentTypes[0] : "application/json";

    if (contentType.startsWith("multipart/form-data")) {
      // file uploading
      MultipartEntityBuilder localVarBuilder = MultipartEntityBuilder.create();
      

      HttpEntity httpEntity = localVarBuilder.build();
      postBody = httpEntity;
    } else {
      // normal form params
          }

    String[] authNames = new String[] { "ApiKeyAuth" };

    try {
      apiInvoker.invokeAPI(basePath, path, "GET", queryParams, postBody, headerParams, formParams, contentType, authNames,
        new Response.Listener<String>() {
          @Override
          public void onResponse(String localVarResponse) {
            try {
              responseListener.onResponse((SymbolStatus) ApiInvoker.deserialize(localVarResponse,  "", SymbolStatus.class));
            } catch (ApiException exception) {
               errorListener.onErrorResponse(new VolleyError(exception));
            }
          }
      }, new Response.ErrorListener() {
          @Override
          public void onErrorResponse(VolleyError error) {
            errorListener.onErrorResponse(error);
          }
      });
    } catch (ApiException ex) {
      errorListener.onErrorResponse(new VolleyError(ex));
    }
  }
  /**
  * Symbols
  * When the symbol is not halted the auction data in the message may be blank. When a symbol is in a halt state the auction data will populate as the book builds. When an opening time has been chosen, the auction-time field will show the opening time. Subsequent updates will be sent only if the symbol status changes in any way.
   * @return Map<String, SymbolStatus>
  */
  public Map<String, SymbolStatus> getSymbols () throws TimeoutException, ExecutionException, InterruptedException, ApiException {
    Object postBody = null;

    // create path and map variables
    String path = "/symbols";

    // query params
    List<Pair> queryParams = new ArrayList<Pair>();
    // header params
    Map<String, String> headerParams = new HashMap<String, String>();
    // form params
    Map<String, String> formParams = new HashMap<String, String>();
    String[] contentTypes = {
    };
    String contentType = contentTypes.length > 0 ? contentTypes[0] : "application/json";

    if (contentType.startsWith("multipart/form-data")) {
      // file uploading
      MultipartEntityBuilder localVarBuilder = MultipartEntityBuilder.create();
      HttpEntity httpEntity = localVarBuilder.build();
      postBody = httpEntity;
    } else {
      // normal form params
    }

    String[] authNames = new String[] { "ApiKeyAuth" };

    try {
      String localVarResponse = apiInvoker.invokeAPI (basePath, path, "GET", queryParams, postBody, headerParams, formParams, contentType, authNames);
      if (localVarResponse != null) {
         return (Map<String, SymbolStatus>) ApiInvoker.deserialize(localVarResponse, "map", SymbolStatus.class);
      } else {
         return null;
      }
    } catch (ApiException ex) {
       throw ex;
    } catch (InterruptedException ex) {
       throw ex;
    } catch (ExecutionException ex) {
      if (ex.getCause() instanceof VolleyError) {
        VolleyError volleyError = (VolleyError)ex.getCause();
        if (volleyError.networkResponse != null) {
          throw new ApiException(volleyError.networkResponse.statusCode, volleyError.getMessage());
        }
      }
      throw ex;
    } catch (TimeoutException ex) {
      throw ex;
    }
  }

      /**
   * Symbols
   * When the symbol is not halted the auction data in the message may be blank. When a symbol is in a halt state the auction data will populate as the book builds. When an opening time has been chosen, the auction-time field will show the opening time. Subsequent updates will be sent only if the symbol status changes in any way.

  */
  public void getSymbols (final Response.Listener<Map<String, SymbolStatus>> responseListener, final Response.ErrorListener errorListener) {
    Object postBody = null;


    // create path and map variables
    String path = "/symbols".replaceAll("\\{format\\}","json");

    // query params
    List<Pair> queryParams = new ArrayList<Pair>();
    // header params
    Map<String, String> headerParams = new HashMap<String, String>();
    // form params
    Map<String, String> formParams = new HashMap<String, String>();



    String[] contentTypes = {
      
    };
    String contentType = contentTypes.length > 0 ? contentTypes[0] : "application/json";

    if (contentType.startsWith("multipart/form-data")) {
      // file uploading
      MultipartEntityBuilder localVarBuilder = MultipartEntityBuilder.create();
      

      HttpEntity httpEntity = localVarBuilder.build();
      postBody = httpEntity;
    } else {
      // normal form params
          }

    String[] authNames = new String[] { "ApiKeyAuth" };

    try {
      apiInvoker.invokeAPI(basePath, path, "GET", queryParams, postBody, headerParams, formParams, contentType, authNames,
        new Response.Listener<String>() {
          @Override
          public void onResponse(String localVarResponse) {
            try {
              responseListener.onResponse((Map<String, SymbolStatus>) ApiInvoker.deserialize(localVarResponse,  "map", SymbolStatus.class));
            } catch (ApiException exception) {
               errorListener.onErrorResponse(new VolleyError(exception));
            }
          }
      }, new Response.ErrorListener() {
          @Override
          public void onErrorResponse(VolleyError error) {
            errorListener.onErrorResponse(error);
          }
      });
    } catch (ApiException ex) {
      errorListener.onErrorResponse(new VolleyError(ex));
    }
  }
  /**
  * Price
  * 
   * @param symbol Symbol
   * @return PriceEvent
  */
  public PriceEvent getTickerBySymbol (String symbol) throws TimeoutException, ExecutionException, InterruptedException, ApiException {
    Object postBody = null;
    // verify the required parameter 'symbol' is set
    if (symbol == null) {
      VolleyError error = new VolleyError("Missing the required parameter 'symbol' when calling getTickerBySymbol",
        new ApiException(400, "Missing the required parameter 'symbol' when calling getTickerBySymbol"));
    }

    // create path and map variables
    String path = "/tickers/{symbol}".replaceAll("\\{" + "symbol" + "\\}", apiInvoker.escapeString(symbol.toString()));

    // query params
    List<Pair> queryParams = new ArrayList<Pair>();
    // header params
    Map<String, String> headerParams = new HashMap<String, String>();
    // form params
    Map<String, String> formParams = new HashMap<String, String>();
    String[] contentTypes = {
    };
    String contentType = contentTypes.length > 0 ? contentTypes[0] : "application/json";

    if (contentType.startsWith("multipart/form-data")) {
      // file uploading
      MultipartEntityBuilder localVarBuilder = MultipartEntityBuilder.create();
      HttpEntity httpEntity = localVarBuilder.build();
      postBody = httpEntity;
    } else {
      // normal form params
    }

    String[] authNames = new String[] { "ApiKeyAuth" };

    try {
      String localVarResponse = apiInvoker.invokeAPI (basePath, path, "GET", queryParams, postBody, headerParams, formParams, contentType, authNames);
      if (localVarResponse != null) {
         return (PriceEvent) ApiInvoker.deserialize(localVarResponse, "", PriceEvent.class);
      } else {
         return null;
      }
    } catch (ApiException ex) {
       throw ex;
    } catch (InterruptedException ex) {
       throw ex;
    } catch (ExecutionException ex) {
      if (ex.getCause() instanceof VolleyError) {
        VolleyError volleyError = (VolleyError)ex.getCause();
        if (volleyError.networkResponse != null) {
          throw new ApiException(volleyError.networkResponse.statusCode, volleyError.getMessage());
        }
      }
      throw ex;
    } catch (TimeoutException ex) {
      throw ex;
    }
  }

      /**
   * Price
   * 
   * @param symbol Symbol
  */
  public void getTickerBySymbol (String symbol, final Response.Listener<PriceEvent> responseListener, final Response.ErrorListener errorListener) {
    Object postBody = null;

    // verify the required parameter 'symbol' is set
    if (symbol == null) {
      VolleyError error = new VolleyError("Missing the required parameter 'symbol' when calling getTickerBySymbol",
        new ApiException(400, "Missing the required parameter 'symbol' when calling getTickerBySymbol"));
    }

    // create path and map variables
    String path = "/tickers/{symbol}".replaceAll("\\{format\\}","json").replaceAll("\\{" + "symbol" + "\\}", apiInvoker.escapeString(symbol.toString()));

    // query params
    List<Pair> queryParams = new ArrayList<Pair>();
    // header params
    Map<String, String> headerParams = new HashMap<String, String>();
    // form params
    Map<String, String> formParams = new HashMap<String, String>();



    String[] contentTypes = {
      
    };
    String contentType = contentTypes.length > 0 ? contentTypes[0] : "application/json";

    if (contentType.startsWith("multipart/form-data")) {
      // file uploading
      MultipartEntityBuilder localVarBuilder = MultipartEntityBuilder.create();
      

      HttpEntity httpEntity = localVarBuilder.build();
      postBody = httpEntity;
    } else {
      // normal form params
          }

    String[] authNames = new String[] { "ApiKeyAuth" };

    try {
      apiInvoker.invokeAPI(basePath, path, "GET", queryParams, postBody, headerParams, formParams, contentType, authNames,
        new Response.Listener<String>() {
          @Override
          public void onResponse(String localVarResponse) {
            try {
              responseListener.onResponse((PriceEvent) ApiInvoker.deserialize(localVarResponse,  "", PriceEvent.class));
            } catch (ApiException exception) {
               errorListener.onErrorResponse(new VolleyError(exception));
            }
          }
      }, new Response.ErrorListener() {
          @Override
          public void onErrorResponse(VolleyError error) {
            errorListener.onErrorResponse(error);
          }
      });
    } catch (ApiException ex) {
      errorListener.onErrorResponse(new VolleyError(ex));
    }
  }
  /**
  * Price
  * 
   * @return List<PriceEvent>
  */
  public List<PriceEvent> getTickers () throws TimeoutException, ExecutionException, InterruptedException, ApiException {
    Object postBody = null;

    // create path and map variables
    String path = "/tickers";

    // query params
    List<Pair> queryParams = new ArrayList<Pair>();
    // header params
    Map<String, String> headerParams = new HashMap<String, String>();
    // form params
    Map<String, String> formParams = new HashMap<String, String>();
    String[] contentTypes = {
    };
    String contentType = contentTypes.length > 0 ? contentTypes[0] : "application/json";

    if (contentType.startsWith("multipart/form-data")) {
      // file uploading
      MultipartEntityBuilder localVarBuilder = MultipartEntityBuilder.create();
      HttpEntity httpEntity = localVarBuilder.build();
      postBody = httpEntity;
    } else {
      // normal form params
    }

    String[] authNames = new String[] { "ApiKeyAuth" };

    try {
      String localVarResponse = apiInvoker.invokeAPI (basePath, path, "GET", queryParams, postBody, headerParams, formParams, contentType, authNames);
      if (localVarResponse != null) {
         return (List<PriceEvent>) ApiInvoker.deserialize(localVarResponse, "array", PriceEvent.class);
      } else {
         return null;
      }
    } catch (ApiException ex) {
       throw ex;
    } catch (InterruptedException ex) {
       throw ex;
    } catch (ExecutionException ex) {
      if (ex.getCause() instanceof VolleyError) {
        VolleyError volleyError = (VolleyError)ex.getCause();
        if (volleyError.networkResponse != null) {
          throw new ApiException(volleyError.networkResponse.statusCode, volleyError.getMessage());
        }
      }
      throw ex;
    } catch (TimeoutException ex) {
      throw ex;
    }
  }

      /**
   * Price
   * 

  */
  public void getTickers (final Response.Listener<List<PriceEvent>> responseListener, final Response.ErrorListener errorListener) {
    Object postBody = null;


    // create path and map variables
    String path = "/tickers".replaceAll("\\{format\\}","json");

    // query params
    List<Pair> queryParams = new ArrayList<Pair>();
    // header params
    Map<String, String> headerParams = new HashMap<String, String>();
    // form params
    Map<String, String> formParams = new HashMap<String, String>();



    String[] contentTypes = {
      
    };
    String contentType = contentTypes.length > 0 ? contentTypes[0] : "application/json";

    if (contentType.startsWith("multipart/form-data")) {
      // file uploading
      MultipartEntityBuilder localVarBuilder = MultipartEntityBuilder.create();
      

      HttpEntity httpEntity = localVarBuilder.build();
      postBody = httpEntity;
    } else {
      // normal form params
          }

    String[] authNames = new String[] { "ApiKeyAuth" };

    try {
      apiInvoker.invokeAPI(basePath, path, "GET", queryParams, postBody, headerParams, formParams, contentType, authNames,
        new Response.Listener<String>() {
          @Override
          public void onResponse(String localVarResponse) {
            try {
              responseListener.onResponse((List<PriceEvent>) ApiInvoker.deserialize(localVarResponse,  "array", PriceEvent.class));
            } catch (ApiException exception) {
               errorListener.onErrorResponse(new VolleyError(exception));
            }
          }
      }, new Response.ErrorListener() {
          @Override
          public void onErrorResponse(VolleyError error) {
            errorListener.onErrorResponse(error);
          }
      });
    } catch (ApiException ex) {
      errorListener.onErrorResponse(new VolleyError(ex));
    }
  }
}
