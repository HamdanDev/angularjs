/// <reference path="Script001.js" />
/*Example 11*/
myApp.factory('StringService', function () {
    return {
        ProcessString : function(input)
        {
            if (!input) {
                return input;
            }

            var output = input[0];

            for (i = 1; i < input.length; i++) {
                if (input[i] == input[i].toUpperCase())
                    output += " ";
                output += input[i];
            }
            return output;
        }
    };
});
/*Example 11*/