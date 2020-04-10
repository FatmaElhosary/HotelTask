const express = require("express");
const request = require("request");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const inputjson=require('./routes/hotelApi')
//const routes=require('./routes/hotelApi');
//set up express app
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))
//use html views
app.set("view engine", "ejs");
//to add css file
app.use("/styles", express.static("styles"));
//initialize routes
app.use("/api", require("./routes/hotelApi"));

/* var hotelData = [
  { name: "knzy", price: 800, destination: "fayoum", date: 10 - 7 - 2020 },
  { name: "sunrise", price: 2000, destination: "cairo", date: 10 - 10 - 2020 },
  { name: "ahlam", price: 1000, destination: "giza", date: 10 - 9 - 2020 },
  { name: "ce", price: 500, destination: "fayoum", date: 10 - 7 - 2020 },
  { name: "ce", price: 500, destination: "hurghada", date: 10 - 7 - 2020 },
  { name: "zero", price: 600, destination: "sharm", date: 10 - 8 - 2020 },
  { name: "zeroo", price: 1100, destination: "sharm", date: 10 - 8 - 2020 },
  { name: "ce", price: 1000, destination: "hurghada", date: 10 - 7 - 2020 },
  { name: "qaood", price: 2500, destination: "alex", date: 10 - 6 - 2020 },
]; */
/*
//user input
var inputfromuser = {
  /* name: "",
  destination: "hurghada",
  fromPrice: 500,
  toPrice: 700,
  fromDate: new Date(10 - 10 - 2020),
  toDate: new Date(15 - 10 - 2020), */
//};
/*
var hotelResult = [];
function getHotels(inputfromuser) {
  for (var i = 0; i < hotelData.length; i++) {
    if (inputfromuser.name != "") {
      if (inputfromuser.destination != "") {
        if (inputfromuser.fromPrice != 0) {
          if (inputfromuser.toPrice != 0) {
            if (
              ///// ///search by name and decstination and from&toprice////////////
              hotelData[i].name.includes(inputfromuser.name.toLowerCase()) &&
              hotelData[i].destination == inputfromuser.destination &&
              hotelData[i].price >= inputfromuser.fromPrice &&
              hotelData[i].price <= inputfromuser.toPrice
            ) {
              hotelResult.push(hotelData[i]);
            }
          } else {
            //name,des,fromPrice
            if (
              ///// ///search by name and decstination and fromprice////////////
              hotelData[i].name.includes(inputfromuser.name.toLowerCase()) &&
              hotelData[i].destination == inputfromuser.destination &&
              hotelData[i].price >= inputfromuser.fromPrice
            ) {
              hotelResult.push(hotelData[i]);
            }
          }
        } else {
          if (inputfromuser.toPrice != 0) {
            ///name,des,toprice

            if (
              ///// ///search by name and decstination and fromprice////////////
              hotelData[i].name.includes(inputfromuser.name.toLowerCase()) &&
              hotelData[i].destination == inputfromuser.destination &&
              hotelData[i].price <= inputfromuser.toPrice
            ) {
              hotelResult.push(hotelData[i]);
            }
          } else {
            //search by name an destination //////////
            if (
              hotelData[i].name.includes(inputfromuser.name.toLowerCase()) &&
              hotelData[i].destination == inputfromuser.destination
            ) {
              hotelResult.push(hotelData[i]);
            }
          }
        }
      } else {
        if (inputfromuser.fromPrice != 0) {
          if (inputfromuser.toPrice != 0) {
            //name,from,to
            ///////////////////////////////////////////////////
            if (
              hotelData[i].name.includes(inputfromuser.name.toLowerCase()) &&
              hotelData[i].price >= inputfromuser.fromPrice &&
              hotelData[i].price <= inputfromuser.toPrice
            ) {
              hotelResult.push(hotelData[i]);
            }
          } else {
            ///search name and from price///////////
            if (
              hotelData[i].name.includes(inputfromuser.name.toLowerCase()) &&
              hotelData[i].price >= inputfromuser.fromPrice
            ) {
              hotelResult.push(hotelData[i]);
            }
          }
        } else {
          if (inputfromuser.toPrice != 0) {
            // search by name and toPrice
            if (
              hotelData[i].name.includes(inputfromuser.name.toLowerCase()) &&
              hotelData[i].price <= inputfromuser.toPrice
            ) {
              hotelResult.push(hotelData[i]);
            }
          } else {
            ///////////////// search by name only /////////
            if (hotelData[i].name.includes(inputfromuser.name.toLowerCase())) {
              hotelResult.push(hotelData[i]);
            }
          }
        }
      }
      //////////////////////////////
    } else {
      if (inputfromuser.destination != "") {
        if (inputfromuser.fromPrice != 0) {
          if (inputfromuser.toPrice != 0) {
            //des,fromprice ,toprice
            if (
              hotelData[i].destination == inputfromuser.destination &&
              hotelData[i].price >= inputfromuser.fromPrice &&
              hotelData[i].price <= inputfromuser.toPrice
            ) {
              hotelResult.push(hotelData[i]);
            }
          } else {
            ///search by destiantion and fromPrice
            if (
              hotelData[i].destination == inputfromuser.destination &&
              hotelData[i].price >= inputfromuser.fromPrice
            ) {
              hotelResult.push(hotelData[i]);
            }
          }
        } else {
          if (inputfromuser.toPrice != 0) {
            //search by dectination and toPrice
            if (
              hotelData[i].destination == inputfromuser.destination &&
              hotelData[i].price <= inputfromuser.toPrice
            ) {
              hotelResult.push(hotelData[i]);
            }
          } else {
            //search by dectination only/////////
            if (hotelData[i].destination == inputfromuser.destination) {
              hotelResult.push(hotelData[i]);
            }
          }
        }
      } else {
        if (inputfromuser.fromPrice != 0) {
          if (inputfromuser.toPrice != 0) {
            //search by fromPrice and two price
            if (
              hotelData[i].price >= inputfromuser.fromPrice &&
              hotelData[i].price <= inputfromuser.toPrice
            ) {
              hotelResult.push(hotelData[i]);
            }
          } else {
            ///search with from price only/////////
            if (hotelData[i].price >= inputfromuser.fromPrice) {
              hotelResult.push(hotelData[i]);
            }
          }
        } else {
          if (inputfromuser.toPrice != 0) {
            ///search with to price only/////////
            if (hotelData[i].price <= inputfromuser.toPrice) {
              hotelResult.push(hotelData[i]);
            }
          } else {
          }
        }
      }
    }
  }
  //console.log(inputfromuser);
  orderHotels(hotelResult, "price");
  console.log(hotelResult);
  return hotelResult;
}
*/
//getHotels(inputfromuser);
//listen for requests
//app.set('port', process.env.PORT || 3000);
app.listen(process.env.port || 4000, function () {
  console.log("now listening for request");
});
////////// error handling /////////
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});
/////////////end order by name or price  statement func//////////////////
/* function orderHotels(hotelResult, orderKey) {
  if (orderKey == "price") {
    return (hotelResult = hotelResult.sort((a, b) =>
      a.price > b.price
        ? 1
        : a.price === b.price
        ? a.name > b.name
          ? 1
          : -1
        : -1
    ));
  } else if (orderKey == "name") {
    return (hotelResult = hotelResult.sort((a, b) =>
      a.name > b.name
        ? 1
        : a.name === b.name
        ? a.price > b.price
          ? 1
          : -1
        : -1
    ));
  }
} */
/* app.get('/',function(req,res){
  console.log('get request');
  res.send(inputfromuser);
}); */
/* fetch("https://api.myjson.com/bins/tl0bp")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Prints result from `response.json()` in getRequest
  })
  .catch((error) => console.error(error)); */

/* //get home page
 app.get("/", function (req, res) {
  //res.send("welcome from home");
 //res.sendFile(__dirname+'/index.html');
  res.render('index');
});

  app.listen(3000); */

/*  let url = "";
  let options = {json: true};
  
  
  
  request(url, options, (error, res, body) => {
      if (error) {
          return  console.log(error)
      };
  
      if (!error && res.statusCode == 200) {
          console.log(body);
          // do something with JSON, using the 'body' variable
      };
  });
 */

/* var options = {
    method: 'get',
    url: 'https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=PAR&adults=1&radius=5&radiusUnit=KM&paymentPolicy=NONE&includeClosed=false&bestRateOnly=true&view=FULL&sort=PRICE',
    headers: {
      'x-rapidapi-key': '718fad1499msh185905483f8f7c5p1602c2jsnd8cab7b8732b'
    }
  };
 
  request(options, function (error, response, body) {
      if (error) throw new Error(error);
     
      //console.log( body );
  });
 */
////////////  get api//////////////////////
/*
var http = require("https");

var options = {
	"method": "GET",
	"hostname": "apk-api.com",
	"port": null,
	"path": "/api/com.freevpn.lite", //Replace com.freevpn.lite to your apps package name
	"headers": {
		"key": "aries_ganteng" //Remove this line to using your account
		/*"androidid": "", Install to get Device ID https://play.google.com/store/apps/details?id=com.evozi.deviceid
		"country": "us",
		"lang": "en",
		"useragent": "Android-Finsky/14.3.18-all (versionCode=81431800,sdk=19,device=hammerhead,hardware=hammerhead,product=hammerhead,build=KTU84P:user)",
		"password": "",
    "username": ""*/
/*

	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});
req.end();
*/
