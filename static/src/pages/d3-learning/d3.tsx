import React, { FC, memo, useState, useEffect, CSSProperties } from 'react';
import * as d3 from 'd3';

const D3: FC = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    //数据
    const dataset = [2.5, 2.1, 1.7, 1.3, 0.9];
    //定义比例尺
    const linear = d3
      .scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([0, 500]);
    const axisLeft = d3.axisLeft(linear);
    const axisBottom = d3.axisBottom(linear);

    d3.select('#home')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500)
      .append('g')
      .attr('transform', 'translate(60,30)')
          .call(axisLeft)
          .append('g')
          .attr('transform', 'translate(0,30)')
          .call(axisBottom)
  }, []);

  return (
    <div className="pages home" role="home" id="home">
      <h1>D3 - Learning</h1>
    </div>
  );
};

export default memo(D3);
