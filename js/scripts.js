
$(document).ready(function() {
  $("form#holiday").submit(function() {
		event.preventDefault();

    var q1 = $('input[name="q1"]:checked').val();
    var q2 = $('input[name="q2"]:checked').val();
    var q3 = $('input[name="q3"]:checked').val();
    var q4 = $('input[name="q4"]:checked').val();
    var q5 = $('input[name="q5"]:checked').val();
    var greeceCount = 0;
    var irelandCount = 0;
    var portugalCount = 0;
    if (q1 === "greece") {
      greeceCount++;
    } else if (q1 === "ireland") {
      irelandCount++;
    } else {
      portugalCount++;
    }

    if (q2 === "greece") {
      greeceCount++;
    } else if (q2 === "ireland") {
      irelandCount++;
    } else {
      portugalCount++;
    }

    if (q3 === "greece") {
      greeceCount++;
    } else if (q3 === "ireland") {
      irelandCount++;
    } else {
      portugalCount++;
    }
    if (q4 === "greece") {
      greeceCount++;
    } else if (q4 === "ireland") {
      irelandCount++;
    } else {
      portugalCount++;
    }
    if (q5 === "greece") {
      greeceCount++;
    } else if (q5 === "ireland") {
      irelandCount++;
    } else {
      portugalCount++;
    }

    if (greeceCount > 2 || irelandCount > 2 || portugalCount > 2) {
      if (greeceCount > 2) $("#output").text("You are off to beautiful GREECE!!")
      else if (irelandCount > 2) $("#output").text("You are off to the Emerald Isle!")
      else if (portugalCount > 2) $("#output").text("You will enjoy a magnificent adventure in Portugal.")
      
    } else {
      if (greeceCount >= 2) $("#output").text("You are off to beautiful GREECE!!")
      else if (irelandCount >= 2) $("#output").text("You are off to the Emerald Isle!")
      else if (portugalCount >= 2)
      $("#output").text("You will enjoy a magnificent adventure in Portugal.")

    }



	});
});
