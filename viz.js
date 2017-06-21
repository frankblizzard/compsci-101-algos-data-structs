// data
let data = [4, 8, 15, 16, 23, 42];


const width = 800;
const height = 200;
const barpadding = 1;

// Selects the container with jQuery-ish selectors
const svg = d3.select(".container")
							// Appends an SVG element to the DOM 
							.append("svg")
							// Define an attribute for the SVG 
							.attr("width", width)
							.attr("height", height);

const xScale = d3.scale.ordinal()
								// input domain maps to output range
                .domain(d3.range(data.length))
		// this says “calculate even bands starting at 
		// 0 and ending at w, then set this scale’s range to those bands.” In our case, we 
		// specified 20 values in the domain. 0.05 is the spacing
                .rangeRoundBands([0, width], 0.05);

// Look up linear vs scaleBand in d3
const yScale = d3.scale.linear()
							 .domain([0, d3.max(data)])
							 .range([0, height])

 svg
	// Creates an empty set of rect elements with class 'bar'
	.selectAll("rect")
	// Adds objects or array of data to be turned into elements in the DOM	
	.data(data)
	// Join the data with the empty set defined in selectAll();
	.enter()
	// Append a rect element for every item in data
	.append("rect")
	.attr("x", (d, i) => xScale(i))
	.attr("y", (d) => height - yScale(d))
	.attr("width", xScale.rangeBand())
	.attr("height", (d) => yScale(d))
	// Gradient effect
	.attr("fill", (d) => `rgb(0, 0, ${d * 10})`)

// Text in the bars
 svg
	.selectAll("text")
	.data(data)
	.enter()
	.append("text")
	.text((d) => d)
	.attr("text-anchor", "middle")
	.attr("x", (d, i) => xScale(i) + xScale.rangeBand() / 2)
	.attr("y", (d) => height - yScale(d) + 20)
	.attr("font-family", "sans-serif")
  .attr("font-size", "20px")
	.attr("fill", "white");

function redraw() {
	const bars = svg.selectAll("rect").data(data);
	const text = svg.selectAll("text").data(data);

	  // ENTER
		bars
		.enter()
	  .append("rect")
		.attr("x", width)
		.attr("y", (d) => height - yScale(d))
		.attr("width", xScale.rangeBand())
		.attr("height", (d) => yScale(d))
		.attr("fill", (d) => `rgb(0, 0, ${d * 10})`);

		// UPDATE
		bars
		 .transition()
		 .ease("linear")
		 .duration(500)
		 .each("start", function() {      // <-- Executes at start of transition
       d3.select(this).attr("fill", "magenta");
		 })
		.attr("x", (d, i) => xScale(i))
		.attr("y", (d, i) => height - yScale(d))
		.attr("width", xScale.rangeBand())
		.attr("height", (d) => yScale(d));

	// EXIT
	bars.exit()
    .transition()
    .duration(500)
    .attr("x", width)
    .remove();
		
	// ENTER
	text
		.enter()
		.append("text")
		.text((d) => d)
		.attr("text-anchor", "middle")
		.attr("x", width)
		.attr("y", (d) => yScale(d) + 20)
		.attr("font-family", "sans-serif")
		.attr("font-size", "20px")
		.attr("fill", "white");

	// UPDATE

		text
		 .transition()
		 .ease("linear")
		 .duration(500)
		 .text((d) => d)
		 .attr("x", (d, i) => xScale(i) + xScale.rangeBand() / 2)
		 .attr("y", (d) => { 
			console.log(height, yScale(d));
			return height - yScale(d) + 20;
		});

	// EXIT
	text.exit()
    .transition()
    .duration(500)
    .attr("x", width)
    .remove();
}


// Ordered Array
function insertion(element) {
	data.push(element);

	xScale.domain(d3.range(data.length));
	redraw();
}

function deletion(idx) {

	data.splice(idx, 1);

	xScale.domain(d3.range(data.length));
	redraw();
}


d3.select(".but").on("click", function() {
	deletion(2);
});

