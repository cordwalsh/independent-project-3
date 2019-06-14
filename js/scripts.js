$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var keyNumbers= ['1','2','3']
    var userInput = ($("#number").val());
    var finalString = "";
    var stringArray = [];
// ////////////////////////
    console.log(userInput)
    for (var index = 0; index <= userInput; index ++) {
      var indexString = index.toString();
      if (indexString.includes("3")) {
        // finalString+= " I'm sorry, I'm afraid I can't do that"
        stringArray[index] = " I'm sorry, I'm afraid I can't do that"
      }
      else if (indexString.includes("2")) {
        // finalString += " Boop!"
        stringArray[index] = " Boop!"
      }
      else if (indexString.includes("1")) {
          // finalString += " Beep!"
          stringArray[index] = " Beep!"
      }
      else {
        // finalString += " " + indexString;
        stringArray[index]= indexString;
      }


      console.log(indexString)
    }
  $("#results").append(stringArray.toString());

  });
});
