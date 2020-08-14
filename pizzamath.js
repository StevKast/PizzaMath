$(document).ready(function () {

    $("#pizzaForm").keyup(function () {

        var name, cost, diameter, area, inPerDollar;

        name = $("#name").val();
        cost = $("#cost").val();
        diameter = $("#pizzaDiameter").val();
        area = calcArea(diameter / 2);
        inPerDollar = area / cost;
        $("#pizzaResults").text(area + " in/sq");
    });

    $("#submit").click(function () {
        var name, cost, diameter, area, inPerDollar;

        name = $("#name").val();
        cost = $("#cost").val();
        diameter = $("#pizzaDiameter").val();
        area = calcArea(diameter / 2);
        inPerDollar = area / cost;
        addResult(name, cost, diameter, area, inPerDollar);
    });

});

function addResult(name, cost, diameter, area, inPerDollar) {
    $('table tbody').after('<tr><th scope="row">' +
        name + '</th><td>' + cost + '</td><td>' + diameter + '</td><td>' +
        area + '</td><td>' + inPerDollar + '</td></tr>');
}

function calcArea(radius) {
    return 3.14 * (radius * radius);
}