$(document).ready(function() {
 $("#submitAll").click(function(event) {
    event.preventDefault();
    $("#output").text("");
    var multipleCount = function(number, multiplier) {
      var result = [];

      for (var i = multiplier; i <= number; i += multiplier) {
        result.push(i);
      }

      $("#output").text(result);
    }

    if (parseInt($("#targetNumber").val(), 10) && parseInt($("#countingNumber").val(), 10)) {
      var targetNumber = parseInt($("#targetNumber").val());
      var countingNumber = parseInt($("#countingNumber").val());

      multipleCount(targetNumber, countingNumber);
   } else {

    alert("Please input a number!");
   }
  });

});
