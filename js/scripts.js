$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var keyNumbers= ['1','2','3','69','420']
    var userInput = ($("#number").val());
    var finalString = "";
    var stringArray = [];
// ////////////////////////
    console.log(userInput)
    for (var index = 0; index <= userInput; index ++) {
      var indexString = index.toString();
      if (indexString.includes("3")) {
        stringArray[index] = " I'm sorry, I'm afraid I can't do that"
      }
      else if (indexString.includes("2")) {
        stringArray[index] = " Boop!"
      }
      else if (indexString.includes("1")) {
        stringArray[index] = " Beep!"
      }
      else if (indexString.includes("69")) {
        stringArray[index] = " Your a naughty boy"
      }
      else {
        stringArray[index]= indexString;
      }
      console.log(indexString)
    }
  $("#results").text(stringArray.toString());
  });
});
