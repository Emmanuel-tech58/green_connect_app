import React, {useEffect} from 'react';
import * as d3 from 'd3';

const Dashboard = () => {
    // const changeStroke = () => {
    //     setStroke(stroke * -1);
    //     stroke === 1 ? d3.select(".target").style("stroke-width", 5) : d3.select(".target").style("stroke-width", 1);
        
    // }

    useEffect(() => {
        const margin = { top: 50, right: 40, bottom: 30, left: 100 },
        width = 450 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

        const svg = d3
        .select("#area")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

        const x = d3.scaleLinear().domain([0, 100]).range([0, width]);
        svg
        .append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x));

        const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);
        svg.append("g").call(d3.axisLeft(y));
      }, []);

    return (
        <div className="App">
            <svg id="area" height={200} width={450}></svg>
        </div>
    );
}

export default Dashboard;
