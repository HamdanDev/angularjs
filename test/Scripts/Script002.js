/// <reference path="angular.js"/>

/* Example 9 */
myApp.filter("city", function ()
{
    return function (city)
    {
        switch(city)
        {
            case 1: return "tetouan";
            case 2: return "tanger";
            case 3: return "casa";
            case 4: return "somewhere";
        }
    }
})
/* End of Example 9 */
