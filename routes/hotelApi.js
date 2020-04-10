const express = require("express");
const router = express.Router();

var hotelResult = [];
 //get user input search
router.post("/hotels", function(req,res) {
  //var userinJson=req.body;
  //console.log(req.body);
  hotelResult = [];
  res.send(getHotels(req.body));
  console.log(getHotels(req.body));
}); 
var hotelData = [
    { name: "knzy", price: 800, destination: "fayoum", date: '10 - 7 - 2020' },
    { name: "sunrise", price: 2000, destination: "cairo", date: '10 - 10 - 2020' },
    { name: "ahlam", price: 1000, destination: "giza", date: '10 - 9 - 2020' },
    { name: "ce", price: 500, destination: "fayoum", date: '10 - 7 - 2020' },
    { name: "ce", price: 500, destination: "hurghada", date: '10 - 7 - 2020' },
    { name: "zero", price: 600, destination: "sharm", date: '10 - 8 - 2020' },
    { name: "zeroo", price: 1100, destination: "sharm", date: '10 - 8 - 2020' },
    { name: "ce", price: 1000, destination: "hurghada", date: '10 - 7 - 2020 '},
    { name: "qaood", price: 2500, destination: "alex", date: '10 - 6 - 2020' },
  ];


function getHotels(inputfromuser) {
  for (var i = 0; i < hotelData.length; i++) {
    if (inputfromuser.name != "") {
      if (inputfromuser.destination != "") {
        if (inputfromuser.fromPrice != 0) {
          if (inputfromuser.toPrice != 0) {
            if (
              ///// ///search by name and decstination and from&toprice////////////
              hotelData[i].name.includes(inputfromuser.name) &&
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
              hotelData[i].name.includes(inputfromuser.name) &&
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
              hotelData[i].name.includes(inputfromuser.name ) &&
              hotelData[i].destination == inputfromuser.destination &&
              hotelData[i].price <= inputfromuser.toPrice
            ) {
              hotelResult.push(hotelData[i]);
            }
          } else {
            //search by name an destination //////////
            if (
              hotelData[i].name.includes(inputfromuser.name ) &&
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
              hotelData[i].name.includes(inputfromuser.name ) &&
              hotelData[i].price >= inputfromuser.fromPrice &&
              hotelData[i].price <= inputfromuser.toPrice
            ) {
              hotelResult.push(hotelData[i]);
            }
          } else {
            ///search name and from price///////////
            if (
              hotelData[i].name.includes(inputfromuser.name ) &&
              hotelData[i].price >= inputfromuser.fromPrice
            ) {
              hotelResult.push(hotelData[i]);
            }
          }
        } else {
          if (inputfromuser.toPrice != 0) {
            // search by name and toPrice
            if (
              hotelData[i].name.includes(inputfromuser.name ) &&
              hotelData[i].price <= inputfromuser.toPrice
            ) {
              hotelResult.push(hotelData[i]);
            }
          } else {
            ///////////////// search by name only /////////
            if (hotelData[i].name.includes(inputfromuser.name )) {
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
/////////////end order by name or price  statement func//////////////////
function orderHotels(hotelResult, orderKey) {
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
  }
module.exports=router;