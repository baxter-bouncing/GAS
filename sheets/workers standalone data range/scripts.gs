/*the running function below ties together the defining, reading and showing functions from
workers.gs and shows the "data range". That is, it shows all of the data in the sheet. Those functions do the work, 
this function just pulls it all together */

//this function will open the default sheet, Sheet1. paste the id here and it will be passed into the functions in workers.gs.
function running() {
 var range = defining("id", "sheetName");
 var values = reading(range);
showing(values); 
}
  


/*if we are not performing tasks on the defualt Sheet1, then in the function above, we need to also 
include sheetName after the id. it will look like this var range = defining(id, sheetName)*/