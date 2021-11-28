//doubleChar("String") ==> "SSttrriinngg"

function doubleChar(str) {
  var stringTmp = '';
  for (var i = 0; i < str.length; i++) {
    //console.log(str[i]);
    stringTmp += str[i];
    stringTmp += str[i];
  }
  console.log(stringTmp);
  return stringTmp;
}

doubleChar("string");
