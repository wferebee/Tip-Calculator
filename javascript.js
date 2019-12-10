
$(document).ready(function() {

    var range = document.getElementById("range");
    var output = document.getElementById("rangeOutput");
    output.innerHTML = range.value;
    
    range.oninput = function() {

        var checkAmount = $('#checkAmount').val(); // gets number from cehamount div after slider has been slid
        console.log(checkAmount);

        var range = document.getElementById("range");                  //
        var output = document.getElementById("rangeOutput");           //  maybe redundant dont know yet
        output.innerHTML = range.value;                                //

        output.innerHTML = this.value;       // gets value from slider

        var tipCalc = 0;
        function tips () {                                               // writes out the tip
            tipCalc = (range.value * (1/100) * checkAmount).toFixed(2);
            return tipCalc;
        };
        tips();
        $('#tipCalc').text("$" + tipCalc);
        
        
        //var final = +tipCalc + +checkAmount;
        var final = (Number(tipCalc) + Number(checkAmount)).toFixed(2);
        $("#checkTotal").text("$" + final);

    };
});