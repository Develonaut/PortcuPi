var request = require('request');
var parseString = require('xml2js').parseString;
var _ = require('underscore');
var fs = require('fs'),
    xml2js = require('xml2js');

module.exports = {
  buildXML: function(obj) {
    var obj = obj[0];
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(obj);
    return xml;
  }
};