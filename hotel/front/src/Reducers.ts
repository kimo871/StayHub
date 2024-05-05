export const combineReducers =   (reducers:any)=>{
    return (state:any,action:any)=>{
        let State: any ={};
       Object.entries(reducers).map((item:any)=>{
        let oldState : any = state[item[0]];
        let reducer_func : any   = item[1];
        let newState : any = reducer_func(oldState,action);
        State[item[0]]=newState;
       })
       return State;
    }
}
// ===============================================================================================================

export const hotels_reducer = (state:any,action:any)=>{
    console.log("bro")
    switch(action.type){
      case "ADD_HOTELS" :{
         console.log(action.payload,"mm");
         return action.payload.hotels;
      }

      case "HOTEL_DETAILS":{
        return new Array(action.payload.hotel);
      }
      default : {
       return state;
      }
    }
 }

 // ===============================================================================================================

 export const countries_reducer = (state:any,action:any)=>{
    switch(action.type){
      case "ADD_COUNTRIES" :{
         console.log(action.payload,"mm");
         return new Map(action.payload.countries.map((item:any)=>[item.code,item]));
      }
      default : {
       return state;
      }
    }
 }

 // ===============================================================================================================
 
 export const errors_reducer = (state:any,action:any)=>{
    console.log("here error");
    console.log(action)
   switch(action.type){
     case "FAILURE" :{
        return action.payload;
     }

     case "SUCCESS":{
        return [];
     }

     case "AUTHENTICATED":{
        return [];
     }

     case "CLEAR":{
        return [];
     }
     default : {
      return state;
     }
   }
 }

 // ===============================================================================================================
 
 export const user_reducer = (state:any , action:any)=>{
   switch(action.type){
     case "AUTHENTICATED":{
        return action.payload;
     }

     case "TOKEN_EXPIRED":{
        return null;
     }

     case "LOGOUT":{
        return {"name":'', 'email':'', 'status':'', 'type':''};
     }

     default :{
        return state;
     }
   }
 }
 export const authentication_reducer = (state:any,action:any)=>{
 switch(action.type){
   case "LOGOUT" :{
      return false;
   }
   case "TOKEN_EXPIRED":{
      return false;
   }

   case "AUTHENTICATED":{
    return true;
   }

   default : {
    return state;
   }
 }
}


export const success_reducer = (state:any,action:any)=>{
    console.log("here success");
    switch(action.type){
        case "SUCCESS":{
           return action.payload;
        }
        
        case "CLEAR":{
            console.log("hwa ah")
            return [];
        }

        case "FAILURE":{
            return [];
        }
        default : {
        return state;
        }
      }
 }


// ===============================================================================================================


export const rootReducer = combineReducers({Countries:countries_reducer,Results:hotels_reducer,Success:success_reducer ,Errors:errors_reducer,User:user_reducer , isAuthenticated:authentication_reducer});

// ===============================================================================================================


//Middlewares


// ===============================================================================================================


export const dataMiddleware = (dispatch:any)=>(next:any)=>(action:any)=>{
    let Status : number;
    
    switch(action.method){
        case "GET":{
            fetch(action.payload.url,{
                method:"GET",
                headers:action.payload.headers
              }).then((res)=> {Status = res.status; console.log(res.status); return res.json()}).then(res=> Status==200 ? dispatch({type:action.type,payload:res.success}) : dispatch({type:"FAILURE",payload:res.errors}))
              .then(res => {if(action.payload.then!==undefined)action.payload.then()});
              return;
        }

       case "POST":{
        fetch(action.payload.url,{
            method:"POST",
            headers:action.payload.headers,
            body : action.payload.formData
          }).then((res)=> {Status = res.status; return res.json()}).then(res=> Status==200 ? dispatch({type:action.type,payload:res.success}) : dispatch({type:"FAILURE",payload:res.errors}))
          .then(res => {if(action.payload.then!==undefined)action.payload.then()});
          return ;
       }
       default :{
       break;
       }
    }

    return next(action);
}





// ===============================================================================================================


  [
    {
        "hotel_id": 1362336,
        "accessibilityLabel": "Hotel Linkway.\n2 out of 5 stars.\n8.4 Very Good 336 reviews.\n‎Khar‬ • ‎4.6 km from center‬\n‎1.4 km from beach‬.\n Hotel room : Beds: 1 double or 2 twins.\n704 AED.\n+85 AED taxes and charges.\nFree cancellation.\nNo prepayment needed.",
        "property": {
            "name": "Hotel Linkway",
            "priceBreakdown": {
                "benefitBadges": [],
                "taxExceptions": [],
                "grossPrice": {
                    "currency": "AED",
                    "value": 704.374971524051
                },
                "excludedPrice": {
                    "value": 84.5249946936053,
                    "currency": "AED"
                }
            },
            "latitude": 19.0718236623439,
            "id": 1362336,
            "isFirstPage": true,
            "optOutFromGalleryChanges": 0,
            "wishlistName": "Mumbai",
            "checkin": {
                "untilTime": "17:00",
                "fromTime": "12:00"
            },
            "blockIds": [
                "136233601_142265761_0_0_0"
            ],
            "qualityClass": 0,
            "reviewCount": 336,
            "longitude": 72.8343397378922,
            "propertyClass": 2,
            "accuratePropertyClass": 2,
            "currency": "INR",
            "ufi": -2092174,
            "checkinDate": "2024-04-14",
            "reviewScoreWord": "Very Good",
            "reviewScore": 8.4,
            "rankingPosition": 0,
            "checkout": {
                "fromTime": "00:00",
                "untilTime": "12:00"
            },
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/162282985.jpg?k=8442c7cc0bfdd20c0d7f92e11aa6dbf52e8b3836565582fb6514f212aa2778a8&o="
            ],
            "position": 0,
            "isPreferred": true,
            "countryCode": "in",
            "checkoutDate": "2024-04-19",
            "mainPhotoId": 162282985
        }
    },
    {
        "hotel_id": 8683233,
        "accessibilityLabel": "Hotel Adore Palace - Near Mumbai Airport & Visa Consulate.\n4 out of 5 stars.\n7.2 Good 601 reviews.\n‎Western Suburbs‬ • ‎2.4 km from center‬.\n Hotel room : 3 beds.\nOriginal price 616 AED. Current price 555 AED..\n+67 AED taxes and charges.",
        "property": {
            "id": 8683233,
            "isFirstPage": true,
            "optOutFromGalleryChanges": 0,
            "priceBreakdown": {
                "strikethroughPrice": {
                    "currency": "AED",
                    "value": 616.328100083545
                },
                "grossPrice": {
                    "value": 554.695290075191,
                    "currency": "AED"
                },
                "taxExceptions": [],
                "excludedPrice": {
                    "value": 66.5634333212141,
                    "currency": "AED"
                },
                "benefitBadges": [
                    {
                        "identifier": "Mobile Rate",
                        "explanation": "Mobile-only price",
                        "text": "Mobile-only price",
                        "variant": "constructive"
                    }
                ]
            },
            "name": "Hotel Adore Palace - Near Mumbai Airport & Visa Consulate",
            "latitude": 19.0972285985653,
            "wishlistName": "Mumbai",
            "blockIds": [
                "868323302_373544898_3_1_0"
            ],
            "checkin": {
                "untilTime": "00:00",
                "fromTime": "12:00"
            },
            "qualityClass": 0,
            "reviewCount": 601,
            "longitude": 72.8837781412635,
            "accuratePropertyClass": 4,
            "propertyClass": 4,
            "currency": "INR",
            "ufi": -2092174,
            "checkinDate": "2024-04-14",
            "reviewScoreWord": "Good",
            "rankingPosition": 1,
            "reviewScore": 7.2,
            "checkout": {
                "fromTime": "00:00",
                "untilTime": "11:00"
            },
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/419368105.jpg?k=0e4a61ce0bab8694cbd24cc02da11add836f71a1f0abc8685b54fa684546106a&o="
            ],
            "position": 1,
            "mainPhotoId": 419368105,
            "countryCode": "in",
            "isPreferred": true,
            "checkoutDate": "2024-04-19"
        }
    },
    {
        "hotel_id": 11478339,
        "accessibilityLabel": "Collection O Sunset Residency.\n3 out of 5 stars.\n7.0 Good 18 reviews.\n‎17 km from center‬.\n Hotel room : 1 bed.\nOriginal price 870 AED. Current price 365 AED..\n+55 AED taxes and charges.\nFree cancellation.\nNo prepayment needed.",
        "property": {
            "ufi": -2092174,
            "checkinDate": "2024-04-14",
            "reviewScoreWord": "Good",
            "rankingPosition": 2,
            "reviewScore": 7,
            "checkout": {
                "fromTime": "00:00",
                "untilTime": "11:00"
            },
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/531689061.jpg?k=4e9c542de52d21dfa8bf07259edc3f2d894d4dde4af09e056f2a068e10fd2f48&o="
            ],
            "position": 2,
            "mainPhotoId": 531689061,
            "isPreferred": true,
            "countryCode": "in",
            "checkoutDate": "2024-04-19",
            "isFirstPage": true,
            "id": 11478339,
            "optOutFromGalleryChanges": 1,
            "priceBreakdown": {
                "strikethroughPrice": {
                    "currency": "AED",
                    "value": 869.96032029864
                },
                "grossPrice": {
                    "value": 365.383510619172,
                    "currency": "AED"
                },
                "taxExceptions": [],
                "excludedPrice": {
                    "value": 55.0719964029302,
                    "currency": "AED"
                },
                "benefitBadges": [
                    {
                        "identifier": "Limited Time Deal",
                        "text": "Limited-time Deal",
                        "explanation": "Limited-time Deal",
                        "variant": "constructive"
                    }
                ]
            },
            "name": "Collection O Sunset Residency",
            "latitude": 19.023582,
            "wishlistName": "Mumbai",
            "blockIds": [
                "1147833902_387620418_3_0_0"
            ],
            "checkin": {
                "fromTime": "12:00",
                "untilTime": "00:00"
            },
            "qualityClass": 0,
            "reviewCount": 18,
            "longitude": 73.031555,
            "propertyClass": 3,
            "accuratePropertyClass": 3,
            "currency": "INR"
        }
    },
    {
        "hotel_id": 8778629,
        "accessibilityLabel": "Hotel Ariana Residency.\n4 out of 5 stars.\n7.0 Good 496 reviews.\n‎Western Suburbs‬ • ‎7 km from center‬\n‎1.5 km from beach‬\n‎This property has cribs available‬.\n Hotel room : 2 beds.\n1179 AED.\n+142 AED taxes and charges.",
        "property": {
            "isFirstPage": true,
            "id": 8778629,
            "optOutFromGalleryChanges": 0,
            "name": "Hotel Ariana Residency",
            "priceBreakdown": {
                "grossPrice": {
                    "value": 1179.42086052237,
                    "currency": "AED"
                },
                "taxExceptions": [],
                "excludedPrice": {
                    "currency": "AED",
                    "value": 141.530500099232
                },
                "benefitBadges": []
            },
            "latitude": 19.1275934612682,
            "blockIds": [
                "877862903_386352140_1_2_66520453480448"
            ],
            "checkin": {
                "fromTime": "12:00",
                "untilTime": "00:00"
            },
            "wishlistName": "Mumbai",
            "reviewCount": 496,
            "qualityClass": 0,
            "currency": "INR",
            "isPreferredPlus": true,
            "longitude": 72.8326159372177,
            "accuratePropertyClass": 4,
            "propertyClass": 4,
            "checkinDate": "2024-04-14",
            "ufi": -2092174,
            "reviewScoreWord": "Good",
            "checkout": {
                "untilTime": "11:00",
                "fromTime": "00:00"
            },
            "rankingPosition": 3,
            "reviewScore": 7,
            "mainPhotoId": 392019082,
            "countryCode": "in",
            "isPreferred": true,
            "checkoutDate": "2024-04-19",
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/392019082.jpg?k=d825a25be93ddb1a2bc16e0fdb573ec8bcb9ed69e286890b207ca558748dca32&o="
            ],
            "position": 3
        }
    },
    {
        "hotel_id": 1102756,
        "accessibilityLabel": "Abode Bombay.\n8.7 Excellent 1271 reviews.\n‎Colaba‬ • ‎18 km from center‬\n‎This property has free cribs available‬.\n Hotel room : Beds: 1 double or 2 twins.\n1181 AED.\n+142 AED taxes and charges.",
        "property": {
            "ufi": -2092174,
            "checkinDate": "2024-04-14",
            "reviewScoreWord": "Excellent",
            "rankingPosition": 4,
            "reviewScore": 8.7,
            "checkout": {
                "fromTime": "00:00",
                "untilTime": "12:00"
            },
            "position": 4,
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/79058206.jpg?k=ba0d68cf7a749cd7335f2dc318e86d02d3136dafba044e5d2f95dad102e7de2e&o="
            ],
            "mainPhotoId": 79058206,
            "checkoutDate": "2024-04-19",
            "isPreferred": true,
            "countryCode": "in",
            "optOutFromGalleryChanges": 0,
            "id": 1102756,
            "isFirstPage": true,
            "latitude": 18.92376390558,
            "name": "Abode Bombay",
            "priceBreakdown": {
                "benefitBadges": [],
                "excludedPrice": {
                    "currency": "AED",
                    "value": 141.685022355156
                },
                "grossPrice": {
                    "value": 1180.70854601719,
                    "currency": "AED"
                },
                "taxExceptions": []
            },
            "wishlistName": "Mumbai",
            "blockIds": [
                "110275603_372587651_2_1_0"
            ],
            "checkin": {
                "fromTime": "14:00",
                "untilTime": "00:00"
            },
            "qualityClass": 0,
            "reviewCount": 1271,
            "accuratePropertyClass": 0,
            "propertyClass": 0,
            "longitude": 72.8323817253113,
            "currency": "INR"
        }
    },
    {
        "hotel_id": 10684742,
        "accessibilityLabel": "Arts International.\n3 out of 5 for property rating.\n7.6 Good 380 reviews.\n‎Santacruz‬ • ‎4.5 km from center‬\n‎1 km from beach‬\n‎This property has cribs available‬.\n Private room : 1 bed.\nOriginal price 964 AED. Current price 848 AED..\n+102 AED taxes and charges.",
        "property": {
            "checkoutDate": "2024-04-19",
            "isPreferred": true,
            "countryCode": "in",
            "mainPhotoId": 489416079,
            "position": 5,
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/489416079.jpg?k=5451d14fec77b36a51d80c2ccd1b118827b93676f263db0abb781e82554bdfcf&o="
            ],
            "checkout": {
                "fromTime": "11:00",
                "untilTime": "11:00"
            },
            "reviewScore": 7.6,
            "rankingPosition": 5,
            "reviewScoreWord": "Good",
            "checkinDate": "2024-04-14",
            "ufi": -2092174,
            "currency": "INR",
            "accuratePropertyClass": 0,
            "propertyClass": 0,
            "longitude": 72.8361314,
            "reviewCount": 380,
            "qualityClass": 3,
            "checkin": {
                "fromTime": "12:00",
                "untilTime": "12:00"
            },
            "blockIds": [
                "1068474201_383079883_3_2_0"
            ],
            "wishlistName": "Mumbai",
            "latitude": 19.0862384,
            "name": "Arts International",
            "priceBreakdown": {
                "strikethroughPrice": {
                    "value": 964.113242273545,
                    "currency": "AED"
                },
                "excludedPrice": {
                    "currency": "AED",
                    "value": 101.810356108448
                },
                "taxExceptions": [],
                "grossPrice": {
                    "value": 848.41965320072,
                    "currency": "AED"
                },
                "benefitBadges": [
                    {
                        "identifier": "Mobile Rate",
                        "text": "Mobile-only price",
                        "explanation": "Mobile-only price",
                        "variant": "constructive"
                    }
                ]
            },
            "optOutFromGalleryChanges": 0,
            "isFirstPage": true,
            "id": 10684742
        }
    },
    {
        "hotel_id": 11740607,
        "accessibilityLabel": "Collection O Kalyan West.\n3 out of 5 stars.\n8.0 Very Good 1 review.\n‎31 km from center‬.\n Hotel room : 1 bed.\nOriginal price 577 AED. Current price 283 AED..\n+45 AED taxes and charges.\nFree cancellation.\nNo prepayment needed.",
        "property": {
            "ufi": -2092174,
            "checkinDate": "2024-04-14",
            "reviewScoreWord": "Very Good",
            "rankingPosition": 7,
            "reviewScore": 8,
            "checkout": {
                "untilTime": "11:00",
                "fromTime": "00:00"
            },
            "position": 7,
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/544045594.jpg?k=ada9a97918d0c43724216e4d52133e20bac3b3bdc3163af5631cd7594839f70a&o="
            ],
            "mainPhotoId": 544045594,
            "checkoutDate": "2024-04-19",
            "countryCode": "in",
            "optOutFromGalleryChanges": 1,
            "id": 11740607,
            "isFirstPage": true,
            "latitude": 19.235956,
            "priceBreakdown": {
                "strikethroughPrice": {
                    "currency": "AED",
                    "value": 577.164851666808
                },
                "excludedPrice": {
                    "value": 45.1632897593639,
                    "currency": "AED"
                },
                "grossPrice": {
                    "currency": "AED",
                    "value": 282.810953410479
                },
                "taxExceptions": [],
                "benefitBadges": [
                    {
                        "variant": "constructive",
                        "explanation": "Getaway Deal",
                        "text": "Getaway Deal",
                        "identifier": "Getaway 2021 Deals"
                    }
                ]
            },
            "name": "Collection O Kalyan West",
            "wishlistName": "Mumbai",
            "blockIds": [
                "1174060702_389987094_3_0_0"
            ],
            "checkin": {
                "untilTime": "00:00",
                "fromTime": "12:00"
            },
            "qualityClass": 0,
            "reviewCount": 1,
            "propertyClass": 3,
            "accuratePropertyClass": 3,
            "longitude": 73.11965,
            "currency": "INR"
        }
    },
    {
        "hotel_id": 11476731,
        "accessibilityLabel": "Hotel saffron inn.\n7.0 Good 10 reviews.\n‎Western Suburbs‬ • ‎4.5 km from center‬.\n Hotel room : 7 beds.\nOriginal price 248 AED. Current price 223 AED..\n+27 AED taxes and charges.",
        "property": {
            "ufi": -2092174,
            "checkinDate": "2024-04-14",
            "reviewScoreWord": "Good",
            "reviewScore": 7,
            "rankingPosition": 8,
            "checkout": {
                "untilTime": "00:00",
                "fromTime": "11:00"
            },
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/524974704.jpg?k=08f156337d875162c4433e354ce0b318685eb8432a8cadd65db402b233ba886c&o="
            ],
            "position": 8,
            "countryCode": "in",
            "checkoutDate": "2024-04-19",
            "mainPhotoId": 524974704,
            "priceBreakdown": {
                "strikethroughPrice": {
                    "currency": "AED",
                    "value": 247.869552479314
                },
                "benefitBadges": [
                    {
                        "identifier": "Mobile Rate",
                        "text": "Mobile-only price",
                        "explanation": "Mobile-only price",
                        "variant": "constructive"
                    }
                ],
                "excludedPrice": {
                    "currency": "AED",
                    "value": 26.7699110694117
                },
                "taxExceptions": [],
                "grossPrice": {
                    "currency": "AED",
                    "value": 223.082597231382
                }
            },
            "name": "Hotel saffron inn",
            "latitude": 19.113884863865,
            "id": 11476731,
            "isFirstPage": true,
            "optOutFromGalleryChanges": 0,
            "wishlistName": "Mumbai",
            "checkin": {
                "untilTime": "00:00",
                "fromTime": "12:00"
            },
            "blockIds": [
                "1147673101_387598941_1_42_0"
            ],
            "qualityClass": 0,
            "reviewCount": 10,
            "longitude": 72.862386280899,
            "propertyClass": 0,
            "accuratePropertyClass": 0,
            "currency": "INR"
        }
    },
    {
        "hotel_id": 266426,
        "accessibilityLabel": "Bloom Hotel - Juhu.\n4 out of 5 stars.\n7.4 Good 757 reviews.\n‎Juhu‬ • ‎6 km from center‬\n‎100 m from beach‬.\n Hotel room : 2 beds.\n1500 AED.\n+180 AED taxes and charges.",
        "property": {
            "checkout": {
                "untilTime": "11:00",
                "fromTime": "00:00"
            },
            "reviewScore": 7.4,
            "rankingPosition": 9,
            "isPreferred": true,
            "countryCode": "in",
            "checkoutDate": "2024-04-19",
            "mainPhotoId": 312794371,
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/312794371.jpg?k=d7d7b3dcc9a972039c3b3944ee625d71e0f1fcaf2d8a90bf35e5bc34caad549b&o="
            ],
            "position": 9,
            "checkinDate": "2024-04-14",
            "ufi": -2092174,
            "reviewScoreWord": "Good",
            "reviewCount": 757,
            "qualityClass": 0,
            "currency": "INR",
            "longitude": 72.8276100754738,
            "propertyClass": 4,
            "accuratePropertyClass": 4,
            "priceBreakdown": {
                "taxExceptions": [],
                "grossPrice": {
                    "currency": "AED",
                    "value": 1500.31868934623
                },
                "excludedPrice": {
                    "currency": "AED",
                    "value": 180.038238697379
                },
                "benefitBadges": []
            },
            "name": "Bloom Hotel - Juhu",
            "latitude": 19.0894544731556,
            "id": 266426,
            "isFirstPage": true,
            "optOutFromGalleryChanges": 0,
            "checkin": {
                "fromTime": "14:00",
                "untilTime": "00:00"
            },
            "blockIds": [
                "26642605_367744574_2_42_0"
            ],
            "wishlistName": "Mumbai"
        }
    },
    {
        "hotel_id": 9788371,
        "accessibilityLabel": "OYO Hotel 68419 Gulzar.\n3 out of 5 stars.\n3.3 Poor 12 reviews.\n‎In city center‬\n‎1.8 km from beach‬.\n1 bed.\nOriginal price 689 AED. Current price 338 AED..\n+52 AED taxes and charges.",
        "property": {
            "longitude": 72.8319,
            "propertyClass": 3,
            "accuratePropertyClass": 3,
            "currency": "INR",
            "qualityClass": 0,
            "reviewCount": 12,
            "wishlistName": "Mumbai",
            "blockIds": [
                "978837102_370159015_2_0_0"
            ],
            "checkin": {
                "untilTime": "00:00",
                "fromTime": "12:00"
            },
            "isFirstPage": true,
            "id": 9788371,
            "optOutFromGalleryChanges": 1,
            "name": "OYO Hotel 68419 Gulzar",
            "priceBreakdown": {
                "strikethroughPrice": {
                    "value": 689.149026045845,
                    "currency": "AED"
                },
                "benefitBadges": [
                    {
                        "identifier": "Getaway 2021 Deals",
                        "text": "Getaway Deal",
                        "explanation": "Getaway Deal",
                        "variant": "constructive"
                    }
                ],
                "taxExceptions": [],
                "grossPrice": {
                    "currency": "AED",
                    "value": 337.683084395274
                },
                "excludedPrice": {
                    "value": 51.7479462360974,
                    "currency": "AED"
                }
            },
            "latitude": 18.957718,
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/521873947.jpg?k=b5b04c0e883bd7f60395f7e46cececa043ff091b4b2bb518ff473e668f602c11&o="
            ],
            "position": 10,
            "mainPhotoId": 521873947,
            "countryCode": "in",
            "checkoutDate": "2024-04-19",
            "rankingPosition": 10,
            "reviewScore": 3.3,
            "checkout": {
                "untilTime": "11:00",
                "fromTime": "00:00"
            },
            "reviewScoreWord": "Poor",
            "ufi": -2092174,
            "checkinDate": "2024-04-14"
        }
    },
    {
        "hotel_id": 11542991,
        "accessibilityLabel": "Home2 Studio Apartments.\n3 out of 5 for property rating.\n8.8 Excellent 20 reviews.\n‎Santacruz‬ • ‎2.6 km from center‬\n‎3 km from beach‬.\n Entire studio – 23 m² : 1 bed • 1 bedroom • 1 bathroom.\nOriginal price 969 AED. Current price 872 AED..\n+105 AED taxes and charges.\nNo prepayment needed.",
        "property": {
            "reviewScoreWord": "Excellent",
            "checkinDate": "2024-04-14",
            "ufi": -2092174,
            "checkoutDate": "2024-04-19",
            "countryCode": "in",
            "mainPhotoId": 530121261,
            "position": 11,
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/530121261.jpg?k=fb8de37ab0a1a7ad99824b98350dd9a272561c63319c6617f523053807bfed39&o="
            ],
            "checkout": {
                "fromTime": "06:00",
                "untilTime": "11:00"
            },
            "reviewScore": 8.8,
            "rankingPosition": 11,
            "checkin": {
                "untilTime": "00:00",
                "fromTime": "14:00"
            },
            "blockIds": [
                "1154299101_388762067_3_1_0"
            ],
            "wishlistName": "Mumbai",
            "latitude": 19.080735481033,
            "priceBreakdown": {
                "grossPrice": {
                    "value": 871.664027261014,
                    "currency": "AED"
                },
                "taxExceptions": [],
                "excludedPrice": {
                    "currency": "AED",
                    "value": 104.599680933337
                },
                "benefitBadges": [
                    {
                        "text": "Mobile-only price",
                        "explanation": "Mobile-only price",
                        "identifier": "Mobile Rate",
                        "variant": "constructive"
                    }
                ],
                "strikethroughPrice": {
                    "value": 968.515585845571,
                    "currency": "AED"
                }
            },
            "name": "Home2 Studio Apartments",
            "optOutFromGalleryChanges": 0,
            "id": 11542991,
            "isFirstPage": true,
            "currency": "INR",
            "propertyClass": 0,
            "accuratePropertyClass": 0,
            "longitude": 72.853678856063,
            "reviewCount": 20,
            "qualityClass": 3
        }
    },
    {
        "hotel_id": 10711938,
        "accessibilityLabel": "Townhouse Mumbai International Airport - Formerly Ace Residency.\n3 out of 5 stars.\n6.6 Pleasant 62 reviews.\n‎Western Suburbs‬ • ‎4.6 km from center‬.\n Hotel room : 3 beds.\nOriginal price 892 AED. Current price 437 AED..\n+64 AED taxes and charges.\nFree cancellation.\nNo prepayment needed.",
        "property": {
            "ufi": -2092174,
            "checkinDate": "2024-04-14",
            "reviewScoreWord": "Pleasant",
            "rankingPosition": 12,
            "reviewScore": 6.6,
            "checkout": {
                "untilTime": "11:00",
                "fromTime": "00:00"
            },
            "position": 12,
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/526563525.jpg?k=be185eb6241875eca578daa4b9d3fd71432bfea59b38dedb8bfbfa08ec9c2cf1&o="
            ],
            "mainPhotoId": 526563525,
            "checkoutDate": "2024-04-19",
            "countryCode": "in",
            "optOutFromGalleryChanges": 1,
            "isFirstPage": true,
            "id": 10711938,
            "latitude": 19.116507,
            "priceBreakdown": {
                "strikethroughPrice": {
                    "value": 892.421077203113,
                    "currency": "AED"
                },
                "excludedPrice": {
                    "currency": "AED",
                    "value": 63.7003606893751
                },
                "grossPrice": {
                    "value": 437.286547946704,
                    "currency": "AED"
                },
                "taxExceptions": [],
                "benefitBadges": [
                    {
                        "variant": "constructive",
                        "text": "Getaway Deal",
                        "explanation": "Getaway Deal",
                        "identifier": "Getaway 2021 Deals"
                    }
                ]
            },
            "name": "Townhouse Mumbai International Airport - Formerly Ace Residency",
            "wishlistName": "Mumbai",
            "blockIds": [
                "1071193802_380862331_2_0_0"
            ],
            "checkin": {
                "untilTime": "00:00",
                "fromTime": "12:00"
            },
            "qualityClass": 0,
            "reviewCount": 62,
            "propertyClass": 3,
            "accuratePropertyClass": 3,
            "longitude": 72.88667,
            "currency": "INR"
        }
    },
    {
        "hotel_id": 244538,
        "accessibilityLabel": "Hotel Bawa Continental.\n3 out of 5 stars.\n7.9 Good 900 reviews.\n‎Juhu‬ • ‎6 km from center‬\n‎200 m from beach‬.\n Hotel room : Beds: 1 double or 2 twins.\n1411 AED.\n+169 AED taxes and charges.",
        "property": {
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/189285663.jpg?k=15330f682a23ad9108f47c8d9fd7aacf7be7d034a8bd9ea55f3a19ff7b6f55dd&o="
            ],
            "position": 13,
            "countryCode": "in",
            "isPreferred": true,
            "checkoutDate": "2024-04-19",
            "mainPhotoId": 189285663,
            "reviewScore": 7.9,
            "rankingPosition": 13,
            "checkout": {
                "untilTime": "12:00",
                "fromTime": "00:00"
            },
            "reviewScoreWord": "Good",
            "ufi": -2092174,
            "checkinDate": "2024-04-14",
            "longitude": 72.8274813294411,
            "accuratePropertyClass": 3,
            "propertyClass": 3,
            "currency": "INR",
            "qualityClass": 0,
            "reviewCount": 900,
            "wishlistName": "Mumbai",
            "checkin": {
                "untilTime": "00:00",
                "fromTime": "14:00"
            },
            "blockIds": [
                "24453801_353464034_2_2_0"
            ],
            "priceBreakdown": {
                "grossPrice": {
                    "value": 1410.95111483412,
                    "currency": "AED"
                },
                "taxExceptions": [],
                "excludedPrice": {
                    "value": 169.314129995628,
                    "currency": "AED"
                },
                "benefitBadges": []
            },
            "name": "Hotel Bawa Continental",
            "latitude": 19.1005713466047,
            "id": 244538,
            "isFirstPage": true,
            "optOutFromGalleryChanges": 0
        }
    },
    {
        "hotel_id": 9071042,
        "accessibilityLabel": "Adiva Residency Beacon, Grant Road, Mumbai.\n3 out of 5 stars.\n7.8 Good 309 reviews.\n‎In city center‬\n‎1.2 km from beach‬.\n Hotel room : 1 bed.\nOriginal price 1541 AED. Current price 1232 AED..\n+148 AED taxes and charges.",
        "property": {
            "propertyClass": 3,
            "accuratePropertyClass": 3,
            "longitude": 72.822031,
            "currency": "INR",
            "qualityClass": 0,
            "reviewCount": 309,
            "wishlistName": "Mumbai",
            "blockIds": [
                "907104201_362055066_2_2_0"
            ],
            "checkin": {
                "untilTime": "00:00",
                "fromTime": "14:00"
            },
            "optOutFromGalleryChanges": 1,
            "isFirstPage": true,
            "id": 9071042,
            "latitude": 18.961787,
            "priceBreakdown": {
                "benefitBadges": [
                    {
                        "variant": "constructive",
                        "identifier": "Mobile Rate",
                        "explanation": "Mobile-only price",
                        "text": "Mobile-only price"
                    }
                ],
                "grossPrice": {
                    "value": 1232.48010642421,
                    "currency": "AED"
                },
                "taxExceptions": [],
                "excludedPrice": {
                    "currency": "AED",
                    "value": 147.897609465136
                },
                "strikethroughPrice": {
                    "currency": "AED",
                    "value": 1540.60013303026
                }
            },
            "name": "Adiva Residency Beacon, Grant Road, Mumbai",
            "position": 14,
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/409734404.jpg?k=4848b3a591807f3775ddcac4faa9f8fc04cb028a13b35a38bf7328d29a044008&o="
            ],
            "mainPhotoId": 409734404,
            "checkoutDate": "2024-04-19",
            "isPreferred": true,
            "countryCode": "in",
            "rankingPosition": 14,
            "reviewScore": 7.8,
            "checkout": {
                "untilTime": "12:00",
                "fromTime": "00:00"
            },
            "reviewScoreWord": "Good",
            "ufi": -2092174,
            "checkinDate": "2024-04-14"
        }
    },
    {
        "hotel_id": 78794,
        "accessibilityLabel": "Trident Nariman Point.\n5 out of 5 stars.\n8.7 Excellent 4153 reviews.\n‎In city center‬\n‎2.8 km from beach‬.\n Hotel room : 1 bed.\n3148 AED.\n+567 AED taxes and charges.",
        "property": {
            "wishlistName": "Mumbai",
            "blockIds": [
                "7879404_356687655_2_1_0"
            ],
            "checkin": {
                "untilTime": "00:00",
                "fromTime": "14:00"
            },
            "isFirstPage": true,
            "id": 78794,
            "optOutFromGalleryChanges": 0,
            "priceBreakdown": {
                "benefitBadges": [],
                "excludedPrice": {
                    "value": 566.58164023359,
                    "currency": "AED"
                },
                "grossPrice": {
                    "value": 3147.67565399811,
                    "currency": "AED"
                },
                "taxExceptions": []
            },
            "name": "Trident Nariman Point",
            "latitude": 18.9276509091609,
            "longitude": 72.8205800056458,
            "propertyClass": 5,
            "accuratePropertyClass": 5,
            "currency": "INR",
            "qualityClass": 0,
            "reviewCount": 4153,
            "reviewScoreWord": "Excellent",
            "ufi": -2092174,
            "checkinDate": "2024-04-14",
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/32810813.jpg?k=7b5f861c6aad4e51ef13e55c8b68ac945cebdf77aeca84d9c2798bb9af46d24d&o="
            ],
            "position": 15,
            "mainPhotoId": 32810813,
            "isPreferred": true,
            "countryCode": "in",
            "checkoutDate": "2024-04-19",
            "rankingPosition": 15,
            "reviewScore": 8.7,
            "checkout": {
                "untilTime": "12:00",
                "fromTime": "00:00"
            }
        }
    },
    {
        "hotel_id": 9360612,
        "accessibilityLabel": "Novotel Mumbai International Airport.\n5 out of 5 stars.\n8.5 Very Good 803 reviews.\n‎Western Suburbs‬ • ‎3.8 km from center‬.\n Hotel room : 1 bed.\nOriginal price 2487 AED. Current price 2238 AED..\n+403 AED taxes and charges.\nFree cancellation.\nNo prepayment needed.",
        "property": {
            "checkoutDate": "2024-04-19",
            "countryCode": "in",
            "isPreferred": true,
            "mainPhotoId": 464507594,
            "position": 16,
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/464507594.jpg?k=80733cd39f9c9d4929b05d54d5b4fd8b811bbf8128670584a0a33426920a7f4e&o="
            ],
            "checkout": {
                "untilTime": "12:00",
                "fromTime": "00:00"
            },
            "reviewScore": 8.5,
            "rankingPosition": 16,
            "reviewScoreWord": "Very Good",
            "checkinDate": "2024-04-14",
            "ufi": -2092174,
            "currency": "INR",
            "propertyClass": 5,
            "accuratePropertyClass": 5,
            "longitude": 72.875298,
            "reviewCount": 803,
            "qualityClass": 0,
            "checkin": {
                "untilTime": "00:00",
                "fromTime": "15:00"
            },
            "blockIds": [
                "936061202_365769414_2_42_0"
            ],
            "wishlistName": "Mumbai",
            "latitude": 19.110109,
            "priceBreakdown": {
                "strikethroughPrice": {
                    "value": 2487.10400101571,
                    "currency": "AED"
                },
                "taxExceptions": [],
                "grossPrice": {
                    "value": 2238.39360091413,
                    "currency": "AED"
                },
                "excludedPrice": {
                    "value": 402.910864174783,
                    "currency": "AED"
                },
                "benefitBadges": [
                    {
                        "variant": "constructive",
                        "identifier": "Mobile Rate",
                        "text": "Mobile-only price",
                        "explanation": "Mobile-only price"
                    }
                ]
            },
            "name": "Novotel Mumbai International Airport",
            "optOutFromGalleryChanges": 0,
            "id": 9360612,
            "isFirstPage": true
        }
    },
    {
        "hotel_id": 10997140,
        "accessibilityLabel": "OYO Samadhan Lodging & Boarding.\n3 out of 5 stars.\n8.7 Excellent 23 reviews.\n‎44 km from center‬.\n1 bed.\nOriginal price 610 AED. Current price 244 AED..\n+41 AED taxes and charges.\nFree cancellation.\nNo prepayment needed.",
        "property": {
            "reviewScore": 8.7,
            "rankingPosition": 17,
            "checkout": {
                "fromTime": "00:00",
                "untilTime": "11:00"
            },
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/524514779.jpg?k=e9efc52f1a95844737ca1c8803444231b81ce63912f8ca475f82a747f7bedf5e&o="
            ],
            "position": 17,
            "countryCode": "in",
            "checkoutDate": "2024-04-19",
            "mainPhotoId": 524514779,
            "ufi": -2092174,
            "checkinDate": "2024-04-14",
            "reviewScoreWord": "Excellent",
            "qualityClass": 0,
            "reviewCount": 23,
            "longitude": 73.30009,
            "propertyClass": 3,
            "accuratePropertyClass": 3,
            "currency": "INR",
            "priceBreakdown": {
                "strikethroughPrice": {
                    "currency": "AED",
                    "value": 610.455373758463
                },
                "benefitBadges": [
                    {
                        "identifier": "Limited Time Deal",
                        "explanation": "Limited-time Deal",
                        "text": "Limited-time Deal",
                        "variant": "constructive"
                    }
                ],
                "excludedPrice": {
                    "currency": "AED",
                    "value": 40.5278340490708
                },
                "grossPrice": {
                    "value": 244.182149503385,
                    "currency": "AED"
                },
                "taxExceptions": []
            },
            "name": "OYO Samadhan Lodging & Boarding",
            "latitude": 19.09625,
            "id": 10997140,
            "isFirstPage": true,
            "optOutFromGalleryChanges": 1,
            "wishlistName": "Mumbai",
            "checkin": {
                "untilTime": "00:00",
                "fromTime": "12:00"
            },
            "blockIds": [
                "1099714002_383036571_3_0_0"
            ]
        }
    },
    {
        "hotel_id": 1087584,
        "accessibilityLabel": "Hotel Causeway, Colaba.\n1 out of 5 stars.\n7.2 Good 436 reviews.\n‎Colaba‬ • ‎18 km from center‬.\n Hotel room : Beds: 1 double or 2 twins.\n863 AED.\n+104 AED taxes and charges.\nNo prepayment needed.",
        "property": {
            "checkin": {
                "fromTime": "12:00",
                "untilTime": "00:00"
            },
            "blockIds": [
                "108758401_198493559_2_0_0"
            ],
            "wishlistName": "Mumbai",
            "name": "Hotel Causeway, Colaba",
            "priceBreakdown": {
                "excludedPrice": {
                    "currency": "AED",
                    "value": 103.543118499666
                },
                "taxExceptions": [],
                "grossPrice": {
                    "value": 862.859340116963,
                    "currency": "AED"
                },
                "benefitBadges": []
            },
            "latitude": 18.9224337086062,
            "isFirstPage": true,
            "id": 1087584,
            "optOutFromGalleryChanges": 0,
            "currency": "INR",
            "longitude": 72.8315877914429,
            "propertyClass": 1,
            "accuratePropertyClass": 1,
            "reviewCount": 436,
            "qualityClass": 0,
            "reviewScoreWord": "Good",
            "checkinDate": "2024-04-14",
            "ufi": -2092174,
            "isPreferred": true,
            "countryCode": "in",
            "checkoutDate": "2024-04-19",
            "mainPhotoId": 89782712,
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/89782712.jpg?k=dacb4a8b84518268170a3af0dcff604510a4e24412dbfccbce9e01fe5ada1d01&o="
            ],
            "position": 18,
            "checkout": {
                "fromTime": "00:00",
                "untilTime": "12:00"
            },
            "reviewScore": 7.2,
            "rankingPosition": 18
        }
    },
    {
        "hotel_id": 8154912,
        "accessibilityLabel": "Hotel BENTLY.\n3 out of 5 stars.\n7.3 Good 311 reviews.\n‎Western Suburbs‬ • ‎3 km from center‬.\n Hotel room : 2 beds.\n393 AED.\n+47 AED taxes and charges.\nNo prepayment needed.",
        "property": {
            "checkoutDate": "2024-04-19",
            "countryCode": "in",
            "mainPhotoId": 531521853,
            "position": 19,
            "photoUrls": [
                "https://cf.bstatic.com/xdata/images/hotel/square60/531521853.jpg?k=74eddb42c7a95c85683dc27c0bb74e63903b62555b5742642e8af54f626629b7&o="
            ],
            "checkout": {
                "fromTime": "00:00",
                "untilTime": "11:00"
            },
            "reviewScore": 7.3,
            "rankingPosition": 19,
            "reviewScoreWord": "Good",
            "checkinDate": "2024-04-14",
            "ufi": -2092174,
            "currency": "INR",
            "accuratePropertyClass": 3,
            "propertyClass": 3,
            "longitude": 72.891169,
            "reviewCount": 311,
            "qualityClass": 0,
            "checkin": {
                "fromTime": "12:00",
                "untilTime": "12:00"
            },
            "blockIds": [
                "815491202_343998252_3_2_0"
            ],
            "wishlistName": "Mumbai",
            "latitude": 19.100187,
            "name": "Hotel BENTLY",
            "priceBreakdown": {
                "benefitBadges": [],
                "taxExceptions": [],
                "grossPrice": {
                    "currency": "AED",
                    "value": 392.689046624659
                },
                "excludedPrice": {
                    "value": 47.1226845416849,
                    "currency": "AED"
                }
            },
            "optOutFromGalleryChanges": 0,
            "id": 8154912,
            "isFirstPage": true
        }
    }
]