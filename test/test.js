let express = require(express);
let app = express();
var expect = require("chai").expect;
const { request } = require("express");
var requst = require("request");

describe("Add two numbers", function(){
    var url = 'http://localhost:8080/addTwoNumbers/3/5';

    it("returns status 200 to check if api works", function(done){

        request(url, function(error, response){
            expect(response.statusCode).to.equal(200);
            document();
        });
    });

});
