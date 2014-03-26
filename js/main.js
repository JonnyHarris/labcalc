window._skel_config = {
    prefix: 'css/style',
        preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '481-1199', containers: 960 },
        mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};


$(document).ready(function () {

    $("#add").click(function () {
        var nooneValue = $("#noone").val();
        var notwoValue = $("#notwo").val();

        if ((nooneValue.length == 0) || (notwoValue.length == 0))
        {
            alert("Please enter two numbers");
        }

        $("#answer").val(calc.add(nooneValue, notwoValue));

    });
    $("#divide").click(function () {
        var nooneValue = $("#noone").val();
        var notwoValue = $("#notwo").val();
        if ((nooneValue.length == 0) || (notwoValue.length == 0)) {
            alert("Please enter two numbers");
        }
        $("#answer").val(calc.divide(nooneValue, notwoValue));

    });
    $("#multiply").click(function () {
        var nooneValue = $("#noone").val();
        var notwoValue = $("#notwo").val();
        if ((nooneValue.length == 0) || (notwoValue.length == 0)) {
            alert("Please enter two numbers");
        }
        $("#answer").val(calc.multiply(nooneValue, notwoValue));

    });
    $("#subtract").click(function () {
        var nooneValue = $("#noone").val();
        var notwoValue = $("#notwo").val();
        if ((nooneValue.length == 0) || (notwoValue.length == 0)) {
            alert("Please enter two numbers");
        }
        $("#answer").val(calc.subtract(nooneValue, notwoValue));

    });

 
    $("#clearbutton").click(function () {
        $("#noone").val("");
        $("#notwo").val("");
        $("#answer").val("");

    });
});
