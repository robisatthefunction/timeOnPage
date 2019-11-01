/**
* In Shared Code
* Register as a custom module, call method from variations
*/
var timeOnPage = (function() {
  var measureTo = function(numericMetric) {
    var startAt = new Date();
    window.addEventListener(('onbeforeunload' in window ? 'beforeunload' : 'unload'), function() {
      var elapsedTime = (new Date() - startAt) / 1000;
      window.optimizely.push({
       "type": "event",
       "eventName": numericMetric,
       "tags": {
         "value": elapsedTime
       }
      });
    });
  }
  return {measureTo: measureTo};
})();

window.optimizely.push({
  type: "registerModule",
  moduleName: "timeonpage",
  module: timeOnPage
});

/**
* Code to be installed within "Variation Code"
*
* This will allow us to measure on a specific per-page basis.
* Because you can select a specific page within the variation editor
*/
window.optimizely.get("custom/timeonpage").measureTo('name_of_numeric');
