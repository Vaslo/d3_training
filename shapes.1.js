var data = [10,5,5,8,9,3,2];

var height = 405

var viz = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

viz.selectAll("rect").data(data).enter().append("rect").attr("tokenid",function(d,i){ return d*i*64;}).attr("height",function(d,i){ return d*10;}).attr("width","15").attr("fill","steelblue").attr("x",function(d,i){return 20*i; }).attr("y",function(d,i){return ((height/2.0)-(5.0*d));});

// var newX = 300;

// svg.selectAll("circle.first")
// 		.data(dataArray)
// 		.enter().append("circle")
// 						.attr("class","first")
// 						.attr("cx",function(d,i){newX+=(d*3)+(i*20);return newX;})
// 						.attr("cy","100")
// 						.attr("r",function(d,i){return d*3;});

// var newX = 600;						
// svg.selectAll("ellipse")
// 		.data(dataArray)
// 		.enter().append("ellipse")
// 						.attr("class","second")
// 						.attr("cx",function(d,i){newX+=(d*6)+(i*20);return newX;})
// 						.attr("cy","100")
// 						.attr("rx",function(d){return d*3;})
// 						.attr("ry","30")

				
// var newX = 900;	
// svg.selectAll("line")
// 		.data(dataArray)
// 		.enter().append("line")
// 						.attr("x1",newX)
// 						.style("stroke","green")
// 						.attr("stroke","blue")
// 						.attr("stroke-width","2")
// 						.attr("y1",function(d,i){return 80+(i*20);})
// 						.attr("x2",function(d){return newX+(d*15);})


// 						.attr("y2",function(d,i){return 80+(i*20);});

// var textArray = ['start','middle','end'];

// svg.append("text").selectAll("tspan")
// 	.data(textArray)
// 	.enter().append("tspan")
// 		.attr("x",newX)
// 		.attr("y",function(d,i){return 150 +(i*30);})
// 		.attr("fill","none")
// 		.attr("stroke","blue")
// 		.attr("stroke-width","2")
// 		.attr("dominant-baseline","middle")
// 		.attr("text-anchor","start")
// 		.attr("font-size","30")
// 		.text(function(d){return d;});

// // svg.append("text")
// // 			.attr("x",newX)
// // 			.attr("y",150)
// // 			.attr("fill","none")
// // 			.attr("stroke","blue")
// // 			.attr("stroke-width","2")
// // 			.attr("text-anchor","start")
// // 			.attr("dominant-baseline","middle")
// // 			.attr("font-size","30")
// // 			.text("start");
		
// // svg.append("text")
// // 			.attr("x",newX)
// // 			.attr("y",180)
// // 			.attr("fill","blue")
// // 			.attr("stroke","none")
// // 			.attr("text-anchor","middle")
// // 			.attr("dominant-baseline","middle")
// // 			.attr("font-size","30")
// // 			.text("middle");

// // svg.append("text")
// // 			.attr("x",newX)
// // 			.attr("y",210)
// // 			.attr("fill","none")
// // 			.attr("stroke","blue")
// // 			.attr("text-anchor","middle")
// // 			.attr("dominant-baseline","middle")
// // 			.attr("font-size","30")
// // 			.text("end");


			