/* container bound scripts for sheets work for defining custom functions
and for detecting the "active" sheet that a user is currently using so that 
we can perform some action on that sheet. Neither of these things can be done with
a standalone script*/

/*there are a number of ways to run a container bound script, such as a custom menu item, 
a button, or an event. In this case, we have left this so that the main functions can simply be invoked
from the ide, a trigger can be added later since this is serving as a template*/


/*the running function below ties together the defining, reading and showing functions from
workers.gs and shows the "data range". That is, it shows all of the data in the sheet. Those functions do the work, this function just pulls it all together */

function running() {
  //the range below comes from the defining function. That variable, range, is then plugged into the 
  //reading function as instructed in this script.
 var range = defining();
  /*the values below come from the reading function. The defined variable range when processed by reading
  produces values, which is used as a variable below.*/
 var values = reading(range);
 showing(values);  
}







