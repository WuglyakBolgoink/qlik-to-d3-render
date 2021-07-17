'use strict';

if (!String.prototype.hashCode) {
    String.prototype.hashCode = function () {
        if (this.length === 0) {
            return 0;
        }

        let hash = 0;
        let i;
        let chr;

        for (i = 0; i < this.length; i++) {
            chr = this.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }

        return hash;
    };
}

function RadarChart(id, data, options) {
    const cfg = {
        w: 600,				//Width of the circle
        h: 600,				//Height of the circle
        margin: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        }, //The margins of the SVG
        levels: 5,				//How many levels or inner circles should there be drawn
        maxValue: 0, 			//What is the value that the biggest circle will represent
        labelFactor: 1.25, 	//How much farther than the radius of the outer circle should the labels be placed
        wrapWidth: 60, 		//The number of pixels after which a label needs to be given a new line
        opacityArea: 0.35, 	//The opacity of the area of the blob
        dotRadius: 4, 			//The size of the colored circles of each blog
        opacityCircles: 0.1, 	//The opacity of the circles of each blob
        strokeWidth: 2, 		//The width of the stroke around each blob
        roundStrokes: false,	//If true the area and stroke will follow a round path (cardinal-closed)
        color: d3.scaleOrdinal(d3.schemeCategory10),	//Color function
        showLegend: false,
        legendTitle: '',
        legendPosition: {
            x: 20,
            y: 20
        }, // the position of the legend, from the top-left corner of the svg
        axisName: 'axis',
        areaName: 'areaName',
        value: 'value',
        colors: {
            circle: {
                fill: '#cdcdcd',
                stroke: '#cdcdcd'

            },
            text: {
                fill: '#000'
            }
        }
    };

    initConfig(options);

    // Map the fields specified in the configuration to the axis and value variables
    const axisName = cfg['axisName'];
    const areaName = cfg['areaName'];
    const valueField = cfg['value'];

    const categories = data.map(el => el.key);

    //Calculate the average value for each area
    // data = data.map(function (d) {
    //     const average = d3.mean(d.values, (e) => {
    //         return e[valueField];
    //     });
    //
    //     d[`${ valueField }Average`] = Number(average.toFixed(2));
    //
    //     return d;
    // });

    // console.log('[RadarChart] data', data);

    // Sort the data for the areas from largest to smallest
    // by average value as an approximation of actual blob area
    // so that that the smallest area is drawn last
    // and therefore appears on top
    // data = data.sort(function (a, b) {
    //     const aAverage = a[`${ valueField }Average`];
    //     const bAverage = b[`${ valueField }Average`];
    //
    //     return bAverage - aAverage;
    // });

    // Convert the nested data passed in
    // into an array of values arrays
    data = data.map(function (d) {
        return d.values;
    });

    // console.log('[RadarChart] data', data);

    // If the supplied maxValue is smaller than the actual one, replace by the max in the data
    const maxValue = Math.max(cfg.maxValue, getMaxValue(data));

    const allAxis = getAllAxis(data); // Names of each axis
    const total = allAxis.length; // The number of different axes

    // console.log('[RadarChart] allAxis', JSON.stringify(allAxis, null, 2));

    const radius = Math.min(cfg.w / 2, cfg.h / 2); // Radius of the outermost circle
    const angleSlice = Math.PI * 2 / total; // The width in radians of each "slice"

    // Scale for the radius
    const rScale = d3.scaleLinear()
        .range([ 0, radius ])
        .domain([ 0, maxValue ]);

    /////////////////////////////////////////////////////////
    //////////// Create the container SVG and g /////////////
    /////////////////////////////////////////////////////////

    // Remove whatever chart with the same id/class was present before
    d3.select(id).select('svg').remove();

    //Initiate the radar chart SVG
    const svg = d3
        .select(id)
        .append('svg')
        .attr('width', cfg.w + cfg.margin.left + cfg.margin.right)
        .attr('height', cfg.h + cfg.margin.top + cfg.margin.bottom)
        .attr('class', 'radar' + id.hashCode());

    //Append a g element
    const g = svg.append('g')
        .attr('transform', 'translate(' + (cfg.w / 2 + cfg.margin.left) + ',' + (cfg.h / 2 + cfg.margin.top) + ')');

    /////////////////////////////////////////////////////////
    ////////// Glow filter for some extra pizzazz ///////////
    /////////////////////////////////////////////////////////

    //Filter for the outside glow
    const filter = g.append('defs').append('filter').attr('id', 'glow');
    const feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation', '2.5').attr('result', 'coloredBlur');
    const feMerge = filter.append('feMerge');
    const feMergeNode_1 = feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    const feMergeNode_2 = feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    /////////////////////////////////////////////////////////
    /////////////// Draw the Circular grid //////////////////
    /////////////////////////////////////////////////////////

    //Wrapper for the grid & axes
    const axisGrid = g.append('g').attr('class', 'axisWrapper');

    //Draw the background circles
    axisGrid
        .selectAll('.levels')
        .data(d3.range(1, (cfg.levels + 1)).reverse())
        .enter()
        .append('circle')
        .attr('class', 'gridCircle')
        .attr('r', (d, i) => {
            return radius / cfg.levels * d;
        })
        .style('fill', cfg.colors.circle.fill)
        .style('stroke', cfg.colors.circle.stroke)
        .style('fill-opacity', cfg.opacityCircles)
        .style('filter', 'url(#glow)');

    //Text indicating at what % each level is
    axisGrid
        .selectAll('.axisLabel')
        .data(d3.range(1, (cfg.levels + 1)).reverse())
        .enter().append('text')
        .attr('class', 'axisLabel')
        .attr('x', 4)
        .attr('y', (d) => {
            return -d * radius / cfg.levels;
        })
        .attr('dy', '0.4em')
        .style('font-size', '14px')
        .style('font-weight', '600')
        .attr('fill', cfg.colors.text.fill)
        .text((d, i) => {
            const circleSectionValue = (maxValue * d) / cfg.levels;
            return Number(Math.floor(circleSectionValue).toFixed(0));
        });

    /////////////////////////////////////////////////////////
    //////////////////// Draw the axes //////////////////////
    /////////////////////////////////////////////////////////

    //Create the straight lines radiating outward from the center
    const axis = axisGrid
        .selectAll('.axis')
        .data(allAxis)
        .enter()
        .append('g')
        .attr('class', 'axis');

    //Append the lines
    axis.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', function (d, i) {
            return rScale(maxValue * 1.1) * Math.cos(angleSlice * i - Math.PI / 2);
        })
        .attr('y2', function (d, i) {
            return rScale(maxValue * 1.1) * Math.sin(angleSlice * i - Math.PI / 2);
        })
        .attr('class', 'line')
        .style('stroke', 'white')
        .style('stroke-width', '2px');

    //Append the labels at each axis
    axis.append('text')
        .attr('class', 'legend')
        .style('font-size', '11px')
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .attr('x', (d, i) => {
            return rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice * i - Math.PI / 2);
        })
        .attr('y', (d, i) => {
            return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice * i - Math.PI / 2);
        })
        .text((d) => {
            return d;
        })
        .call(wrap, cfg.wrapWidth);

    /////////////////////////////////////////////////////////
    ///////////// Draw the radar chart blobs ////////////////
    /////////////////////////////////////////////////////////

    //The radial line function
    const radarLine = d3.lineRadial()
        .curve(d3.curveLinearClosed)
        .radius((d) => {
            return rScale(d.value);
        })
        .angle((d, i) => {
            if (d) {
                return getPosition(d) * angleSlice;
            }

            return 0; // should not happens
        });

    if (cfg.roundStrokes) {
        radarLine.curve(d3.curveCardinalClosed);
    }

    // Create a wrapper for the blobs
    const blobWrapper = g.selectAll('.radarWrapper')
        .data(data)
        .enter().append('g')
        .attr('class', 'radarWrapper');

    // Append the backgrounds
    blobWrapper
        .append('path')
        .attr('class', (d) => {
            return `radarArea ra_${ id.hashCode() + d[0][areaName].hashCode() }`; //Remove spaces from the areaName string to make one valid class name
        })
        .attr('d', (d, i) => {
            return radarLine(d);
        })
        .style('fill', (d, i) => {
            return cfg.color(i);
        })
        .style('fill-opacity', cfg.opacityArea)
        .on('mouseover', function (d, i) {
            //Dim all blobs
            d3
                .selectAll('.radarArea')
                .transition()
                .duration(200)
                .style('fill-opacity', 0.1);

            //Bring back the hovered over blob
            d3
                .select(this)
                .transition()
                .duration(200)
                .style('fill-opacity', 0.7);
        })
        .on('mouseout', () => {
            //Bring back all blobs
            d3
                .selectAll('.radarArea')
                .transition()
                .duration(200)
                .style('fill-opacity', cfg.opacityArea);
        });

    //Create the outlines
    blobWrapper.append('path')
        .attr('class', 'radarStroke')
        .attr('d', function (d, i) {
            return radarLine(d);
        })
        .style('stroke-width', cfg.strokeWidth + 'px')
        .style('stroke', function (d, i) {
            return cfg.color(i);
        })
        .style('fill', 'none')
        .style('filter', 'url(#glow)');

    // Append the circles
    blobWrapper
        .selectAll('.radarCircle')
        .data(function (d, i) {
            return d;
        })
        .enter()
        .append('circle')
        .attr('class', 'radarCircle')
        .attr('r', cfg.dotRadius)
        .attr('cx', function (d, i) {
            return rScale(d.value) * Math.cos(angleSlice * getPosition(d) - Math.PI / 2);
        })
        .attr('cy', function (d, i) {
            return rScale(d.value) * Math.sin(angleSlice * getPosition(d) - Math.PI / 2);
        })
        .style('fill', function (d, i, j) {
            return cfg.color(j);
        })
        .style('fill-opacity', 0.8);

    /////////////////////////////////////////////////////////
    //////// Append invisible circles for tooltip ///////////
    /////////////////////////////////////////////////////////

    //Wrapper for the invisible circles on top
    var blobCircleWrapper = g
        .selectAll('.radarCircleWrapper')
        .data(data)
        .enter()
        .append('g')
        .attr('class', 'radarCircleWrapper');

    //Append a set of invisible circles on top for the mouseover pop-up
    //Set up the small tooltip for when you hover over a circle

    blobCircleWrapper
        .selectAll('.radarInvisibleCircle')
        .data(function (d, i) {
            return d;
        })
        .enter()
        .append('circle')
        .attr('class', 'radarInvisibleCircle')
        .attr('r', cfg.dotRadius * 1.5)
        .attr('cx', function (d, i) {
            return rScale(d[valueField]) * Math.cos(angleSlice * getPosition(d) - Math.PI / 2);
        })
        .attr('cy', function (d, i) {
            return rScale(d[valueField]) * Math.sin(angleSlice * getPosition(d) - Math.PI / 2);
        })
        .style('fill', 'none')
        .style('pointer-events', 'all')
        .on('mouseover', function (event, d) {
            const newX = parseFloat(d3.select(this).attr('cx')) - 10;
            const newY = parseFloat(d3.select(this).attr('cy')) - 10;

            tooltip
                .attr('x', newX)
                .attr('y', newY)
                .text(d[valueField])
                .transition()
                .duration(200)
                .style('opacity', 1);
        })
        .on('mouseout', function () {
            tooltip
                .transition()
                .duration(200)
                .style('opacity', 0);
        });

    const tooltip = g
        .append('text')
        .attr('class', 'tooltip')
        .style('opacity', 0);

    /////////////////////////////////////////////////////////
    /////////////////// Helper Function /////////////////////
    /////////////////////////////////////////////////////////

    //Taken from http://bl.ocks.org/mbostock/7555321
    //Wraps SVG text
    function wrap(text, width) {
        text.each(function () {
            var text = d3.select(this),
                words = text.text().split(/\s+/).reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.4, // ems
                y = text.attr('y'),
                x = text.attr('x'),
                dy = parseFloat(text.attr('dy')),
                tspan = text.text(null).append('tspan').attr('x', x).attr('y', y).attr('dy', dy + 'em');

            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(' '));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(' '));
                    line = [ word ];
                    tspan = text.append('tspan').attr('x', x).attr('y', y).attr('dy', ++lineNumber * lineHeight + dy + 'em').text(word);
                }
            }
        });
    }//wrap

    // on mouseover for the legend symbol
    function cellover(d) {
        //Dim all blobs
        d3
            .selectAll('.radarArea')
            .transition()
            .duration(200)
            .style('fill-opacity', 0.1);

        //Bring back the hovered over blob
        d3
            .select('.ra_' + id.hashCode() + data[categories.indexOf(d)][0][areaName].hashCode())
            .transition()
            .duration(200)
            .style('fill-opacity', 0.7);
    } // cellover

    // on mouseout for the legend symbol
    function cellout() {
        //Bring back all blobs
        d3.selectAll('.radarArea')
            .transition().duration(200)
            .style('fill-opacity', cfg.opacityArea);
    } // cellout

    if (cfg.showLegend) {
        /////////////////////////////////////////////////////////
        /////////////////// Draw the Legend /////////////////////
        /////////////////////////////////////////////////////////

        svg
            .append('g')
            .attr('class', 'legendOrdinal')
            .attr('transform', 'translate(' + cfg['legendPosition']['x'] + ',' + cfg['legendPosition']['y'] + ')');

        const legendOrdinal = d3.legendColor()
            // d3 symbol creates a path-string, for example
            // "M0,-8.059274488676564L9.306048591020996,8.059274488676564 -9.306048591020996,8.059274488676564Z"
            .shape('path', d3.symbol().type(d3.symbolTriangle).size(150)())
            .shapePadding(10)
            .scale(cfg.color.domain(categories))
            .title(cfg.legendTitle)
            .labels(
                cfg
                    .color
                    .domain()
                    .map(function (d, i) {
                        try {
                            return data[i][0][areaName];
                        } catch (e) {
                            console.error('[e]', e);
                        }

                        return 'n/A';
                    })
            );

        legendOrdinal
            .on('cellover', function (d) {
                cellover(d);
            })
            .on('cellout', function (d) {
                cellout();
            });

        svg.select('.legendOrdinal')
            .call(legendOrdinal);
    }

    //Put all of the options into a variable called cfg
    function initConfig(options) {
        if ('undefined' !== typeof options) {
            for (var i in options) {
                if ('undefined' !== typeof options[i]) {
                    cfg[i] = options[i];
                }
            }//for i
        }//if
    }

    /**
     * @param data
     * @returns {number}
     */
    function getMaxValue(data) {
        return d3.max(data, (i) => {
            return d3.max(i.map((o) => {
                return o[valueField];
            }));
        });
    }

    function getAllAxis(data) {
        return data
            .flat()
            .map(el => el.axis)
            .filter((v, i, a) => a.indexOf(v) === i);
        // .sort()
    }

    function getPosition(d) {
        const found = data.reduce((acc, dataValues, index) => {
            const el = dataValues[0];

            if (el && el.category === d.category) {
                acc = {
                    index,
                    dataValues
                };
            }

            return acc;
        }, undefined);

        const startAfterOtherCirle = data.reduce((acc, values, index) => {
            if (index < found.index) {
                acc += values.length;
            }

            return acc;
        }, 0);

        return found.dataValues.map(el => el.axis).indexOf(d.axis) + startAfterOtherCirle;
    }

}

class QlikRadarRenderService {

    getRadarChart() {
        return RadarChart;
    }

}

angular
    .module('qlik.ui.radar')
    .service('QlikRadarRenderService', QlikRadarRenderService);
