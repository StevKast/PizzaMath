$(document).ready(function () {

    $("#pizzaForm").keyup(function () {
        
        var diameter = $("#pizzaDiameter").val();
        $("#pizzaResults").text(calcArea(diameter / 2) + " in/sq");
    });

});

function calcArea(radius) {
    return 3.14 * (radius * radius);
}