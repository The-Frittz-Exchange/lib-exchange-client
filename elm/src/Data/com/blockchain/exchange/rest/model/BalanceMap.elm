{-
   Blockchain.com Exchange REST API
   ## Introduction Welcome to Blockchain.com's Exchange API and developer documentation. These documents detail and give examples of various functionality offered by the API such as receiving real time market data, requesting balance information and performing trades. ## To Get Started Create or log into your existing Blockchain.com Exchange account Select API from the drop down menu Fill out form and click “Create New API Key Now” Once generated you can view your keys under API Settings 

   The version of the OpenAPI document: 1.0.0

   NOTE: This file is auto generated by the openapi-generator.
   https://github.com/openapitools/openapi-generator.git
   Do not edit this file manually.
-}


module Data.BalanceMap exposing (BalanceMap, decoder, encode, encodeWithTag, toString)

import Data.Balance as Balance exposing (Balance)
import Dict exposing (Dict)
import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Pipeline exposing (optional, required)
import Json.Encode as Encode


type alias BalanceMap =
    { primary : (List Balance)
    }


decoder : Decoder BalanceMap
decoder =
    Decode.succeed BalanceMap
        |> required "primary" (Decode.list Balance.decoder)



encode : BalanceMap -> Encode.Value
encode =
    Encode.object << encodePairs


encodeWithTag : ( String, String ) -> BalanceMap -> Encode.Value
encodeWithTag (tagField, tag) model =
    Encode.object <| encodePairs model ++ [ ( tagField, Encode.string tag ) ]


encodePairs : BalanceMap -> List (String, Encode.Value)
encodePairs model =
    [ ( "primary", (Encode.list Balance.encode) model.primary )
    ]



toString : BalanceMap -> String
toString =
    Encode.encode 0 << encode




