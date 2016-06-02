var request = require('request');
var parseString = require('xml2js').parseString;
var _ = require('underscore');
var fs = require('fs'),
    xml2js = require('xml2js');

module.exports = {
  buildXML: function(obj) {
    // var xml = [xml];

    // console.log(builder);
    // // var blah = builder.buildObject(xml);

    // var obj = {name: "Super", Surname: "Man", age: 23};

    var obj = obj[0];
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(obj, explicitRoot: false);

    console.log(xml);

    return xml;
  }
};