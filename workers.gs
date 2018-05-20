
/*functions can use their results to pass data from one function to the other, as seen here. All of these functions are tied
together with the "running" function in the scripts.gs file*/

//defining the data input from the active sheet
function defining() {
  var sheet = SpreadsheetApp.getActiveSheet();
  return sheet.getDataRange();
}

//reading will use a function argument to obtain the information that came back from difining and then return those values
function reading(range) {
  return range.getValues(); 
}

//showing takes the values returned by reading and prints them out
function showing(values) {
  Logger.log(values);
}


//these functions are tied together in the running function in scripts.gs


