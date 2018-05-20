
/*functions can use their results to pass data from one function to the other, as seen here. All of these functions are tied
together with the "running" function in the scripts.gs file*/

/*defining the data input from the sheet identified by its ID. this is for all of the data in the ID'd sheet. */
/* WHEN ONLY USING SHEET ID THIS WILL GET DATA FROM THE DEFAULT SHEET IN THE WORKBOOK WHICH IS "Sheet1" OTHERWISE THE SHEET 
NAME WILL ALSO NEED TO BE INCLUDED AS IN THE EXAMPLE BELOW*/

/*the actual id can be placed inside the running function in the scripts files and it will be passed here*/
/*function defining(id) {
 var sheet = SpreadsheetApp.openById(id);
  return sheet.getDataRange();
}*/


/*different version of defining for when the Id'd sheet does not have a default Sheet1 or when
we intend to perform tasks on a named sheet*/
function defining(id, sheetName) {
 var ss = SpreadsheetApp.openById(id);
 var sheet = ss.getSheetByName(sheetName)
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


