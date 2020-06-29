{-
   Blockchain.com Exchange REST API
   ## Introduction Welcome to Blockchain.com's Exchange API and developer documentation. These documents detail and give examples of various functionality offered by the API such as receiving real time market data, requesting balance information and performing trades. ## To Get Started Create or log into your existing Blockchain.com Exchange account Select API from the drop down menu Fill out form and click “Create New API Key Now” Once generated you can view your keys under API Settings 

   The version of the OpenAPI document: 1.0.0

   NOTE: This file is auto generated by the openapi-generator.
   https://github.com/openapitools/openapi-generator.git
   Do not edit this file manually.
-}


module Data.TimeInForceStop exposing (TimeInForceStop(..), decoder, encode, toString)

import Dict exposing (Dict)
import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Pipeline exposing (optional, required)
import Json.Encode as Encode


{-| \"GTC\" for Good Till Cancel, \"GTD\" Good Till Date
-}
type TimeInForceStop
    = GTC
    | GTD



decoder : Decoder TimeInForceStop
decoder =
    Decode.string
        |> Decode.andThen
            (\str ->
                case str of
                    "GTC" ->
                        Decode.succeed GTC

                    "GTD" ->
                        Decode.succeed GTD

                    other ->
                        Decode.fail <| "Unknown type: " ++ other
            )



encode : TimeInForceStop -> Encode.Value
encode model =
    case model of
        GTC ->
            Encode.string "GTC"

        GTD ->
            Encode.string "GTD"




toString : TimeInForceStop -> String
toString model =
    case model of
        GTC ->
            "GTC"

        GTD ->
            "GTD"



