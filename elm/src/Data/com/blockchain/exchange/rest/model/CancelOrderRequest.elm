{-
   Blockchain.com Exchange REST API
   ## Introduction Welcome to Blockchain.com's Exchange API and developer documentation. These documents detail and give examples of various functionality offered by the API such as receiving real time market data, requesting balance information and performing trades. ## To Get Started Create or log into your existing Blockchain.com Exchange account Select API from the drop down menu Fill out form and click “Create New API Key Now” Once generated you can view your keys under API Settings 

   The version of the OpenAPI document: 1.0.0

   NOTE: This file is auto generated by the openapi-generator.
   https://github.com/openapitools/openapi-generator.git
   Do not edit this file manually.
-}


module Data.CancelOrderRequest exposing (CancelOrderRequest, Action(..), decoder, encode, encodeWithTag, toString)

import Dict exposing (Dict)
import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Pipeline exposing (optional, required)
import Json.Encode as Encode


type alias CancelOrderRequest =
    { action : Action
    , orderID : Int
    }


type Action
    = CancelOrderRequest



decoder : Decoder CancelOrderRequest
decoder =
    Decode.succeed CancelOrderRequest
        |> required "action" actionDecoder
        |> required "orderID" Decode.int



encode : CancelOrderRequest -> Encode.Value
encode =
    Encode.object << encodePairs


encodeWithTag : ( String, String ) -> CancelOrderRequest -> Encode.Value
encodeWithTag (tagField, tag) model =
    Encode.object <| encodePairs model ++ [ ( tagField, Encode.string tag ) ]


encodePairs : CancelOrderRequest -> List (String, Encode.Value)
encodePairs model =
    [ ( "action", encodeAction model.action )
    , ( "orderID", Encode.int model.orderID )
    ]



toString : CancelOrderRequest -> String
toString =
    Encode.encode 0 << encode




actionDecoder : Decoder Action
actionDecoder =
    Decode.string
        |> Decode.andThen
            (\str ->
                case str of
                    "CancelOrderRequest" ->
                        Decode.succeed CancelOrderRequest

                    other ->
                        Decode.fail <| "Unknown type: " ++ other
            )



encodeAction : Action -> Encode.Value
encodeAction model =
    case model of
        CancelOrderRequest ->
            Encode.string "CancelOrderRequest"




