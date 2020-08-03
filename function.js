function getToolTipDiv() {
    return d3.selectAll("div").filter("#tooltip");
}

function getToolTipText(datum, shouldshowCylinders) {
    var cylinderText = datum.EngineCylinders == "0" ? "N/A" : datum.EngineCylinders;
    return "Maker: " + datum.Make + "<br/># Cylinders: " + cylinderText + "<br/>Highway Mileage: " + datum.AverageHighwayMPG + "<br/>City Mileage: " + datum.AverageCityMPG;
}
