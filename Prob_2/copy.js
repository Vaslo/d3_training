    
function updateViz(data)
{

    var circle = d3.select("#viz")
    .selectAll("circle")
    .data(data);
circle.exit().remove();

circle.enter().append("circle").merge(circle)
.attr("cx",function(d){ return (width/2)+d["x"];})
.attr("cy",function(d){ return (height/2)+d["y"];})
.attr("fill","green")
.attr("r",function(d){ return d["r"]/2;});    


}