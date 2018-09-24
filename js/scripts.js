var add = function(number1, number2){
	return number1 + number2;
};
var subtract = function(number1, number2){
	return number1 - number2;
};
var multiply = function(number1, number2){
	return number1 * number2;
};
var divide = function(number1, number2){
	return number1 / number2;
};

$(document).ready(function() {
  $("form#calculator").submit(function() {
		event.preventDefault();
    var motive = $("#input1").val();
    var number2 = parseInt($("#input2").val());
		var operator = $("input:radio[name=operator]:checked").val();
		var result;
		if (operator === "add"){
			result = add(number1, number2);
		} else if (operator === "subtract"){
			result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
    $("#output").text(result);

	});
});

// 		var result1 = add(number1, number2);
// 		$(".result1").text(result1);
// 		var result2 = subtract(number3, number4);
// 		$(".result2").text(result2);
// 		var result3 = multiply(number5, number6);
// 		$(".result3").text(result3);
// 		var result4 = divide(number7, number8);
// 		$(".result4").text(result4);
//
// 		$(".feedback").show();
// 		var feeling = $("input:radio[name=feeling]:checked").val();
//
// 		event.preventDefault();
//   });
//
//
//
//
// });
