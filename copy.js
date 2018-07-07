    
function updateViz(data)
{

d3.select("#viz")
        .selectAll("rect")
        .data(data)
    .enter().append("rect")
    .attr("tokenid",function(d,i){ return d*i*64;})
    .attr("height",function(d,i){ return d*10;})
    .attr("width","15")
    .attr("fill","steelblue ")
    .attr("x",function(d,i){return 20*i; })
    .attr("y",function(d,i){return ((height/2.0)-(5.0*d));});

}