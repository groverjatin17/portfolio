import React, { useRef, useEffect, useState } from "react";
import { select, line, curveCardinal } from "d3";

export default function D3() {
  const svgRef = useRef();

  const [data, changeData] = useState([20, 30, 45, 60, 20, 65, 75]);

  useEffect(() => {
    const svg = select(svgRef.current);
    const graphLine = line()
      .x((value, index) => index * 50)
      .y((value) => 150 - value)
      .curve(curveCardinal)
    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", (value) => graphLine(value))
      .attr("stroke", "blue")
      .attr("fill", "none")
    // svg
    //   .selectAll("circle")
    //   .data(data)
    //   .join("circle")
    //   .attr("cx", (value, index) => index * 50)
    //   .attr("cy", value => 150 - value )
    //   .attr("r", 5)
    //   .attr("stroke", 'red')
    //   .attr("fill", 'none');
  }, [data]);
  return (
    <>
      <svg ref={svgRef}>
      </svg>
      <button
        onClick={() => {
          changeData(data.map((value) => value + 5));
        }}
      >
        Click
      </button>
    </>
  );
}
