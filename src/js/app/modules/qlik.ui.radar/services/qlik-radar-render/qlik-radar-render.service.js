'use strict';

const COLORS_PALETTE = Object.freeze({
    SEQUENTIAL: Object.freeze(['#FEE391', '#FEC44F', '#FE9929', '#EC7014', '#CC4C02', '#993404', '#662506']),
    SEQUENTIAL_REVERSE: Object.freeze(['#662506', '#993404', '#CC4C02', '#EC7014', '#FE9929', '#FEC44F', '#FEE391']),
    DIVERGING_RDYLBU: Object.freeze(['#D73027', '#F46D43', '#FEE090', '#ABD9E9', '#74ADD1', '#4575B4']),
    DIVERGING_BUYLRD: Object.freeze(['#D73027', '#FDAE61', '#ABD9E9', '#4575B4']),
    BLUES: Object.freeze(['#DEEBf7', '#C6DBEF', '#9ECAE1', '#6BAED6', '#4292C6', '#2171B5', '#08519C', '#08306B']),
    REDS: Object.freeze(['#FEE0D2', '#FCBBa1', '#FC9272', '#FB6A4A', '#EF3B2C', '#CB181D', '#A50F15', '#67000D']),
    YLGNBU: Object.freeze(['#EDF8B1', '#C7E9B4', '#7FCDBB', '#41B6C4', '#1D91C0', '#225EA8', '#253494', '#081D58']),
    TWELVE_COLORS: Object.freeze(['#332288', '#6699CC', '#88CCEE', '#44AA99', '#117733', '#999933', '#DDCC77', '#661100', '#CC6677', '#AA4466', '#882255', '#AA4499']),
    TWELVE_COLORS_REVERSE: Object.freeze(['#332288', '#6699CC', '#88CCEE', '#44AA99', '#117733', '#999933', '#DDCC77', '#661100', '#CC6677', '#AA4466', '#882255', '#AA4499'].reverse()),
    BLUE_PURPLE: Object.freeze(['#1ABC9C', '#7F8C8D', '#2ECC71', '#BDC3C7', '#3498DB', '#C0392B', '#9B59B6', '#D35400', '#34495E', '#F39C12', '#16A085', '#95A5A6']),
    BREEZE: Object.freeze(['#138185', '#26A0A7', '#65D3DA', '#79D69F', '#70BA6E', '#CBE989', '#EBF898', '#F9EC86', '#FAD144', '#EC983D', '#D76C6C', '#A54343'])
});

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

// ----

function paintChart(__cssClass, chartDefaultOptions, _htmlEl, _qLayout, dimensions, __c) {

}

function RadarChart(__cssClass, __originalFile, __options, __data) {
    console.clear();

    // TODO: откуда?
    const __c = {
        _inEditState: false,
        options: {
            noInteraction: false
        },
        backendApi: {
            selectValues: (a, b, c) => {
                console.warn('TODO -> [c.backendApi.selectValues]', a, b, c);
            }
        }
    };

    const chartOptions = _init(__options);
    console.log('[RadarChart] chartOptions', chartOptions);

    const qLayoutObj = _.cloneDeep(__originalFile.result.qLayout);

    const dimensions = _getO(_.cloneDeep(qLayoutObj));
    console.log('[RadarChart] dimensions', dimensions);

    const chartColorSchema = qLayoutObj.ColorSchema;

    const margin = {
        top: 0,
        right: 10,
        bottom: 40,
        left: 10
    };

    const width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right;
    const height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

    if (dimensions) {
        const chartDefaultOptions = {
            size: __options.size || {
                width: width,
                height: height
            },
            margin: __options.margin || margin,
            legendPosition: __options.legendPosition || {
                x: 10,
                y: 10
            },
            color: d3.scaleOrdinal().range(chartColorSchema),
            colorOpacity: {
                circle: .1,
                area: .2,
                area_out: .1,
                area_over: .6,
                area_click: .8
            },
            roundStrokes: __options.roundStrokes || false,
            maxValue: .6,
            levels: 6,
            dotRadius: 4,
            labelFactor: 1.02,
            wrapWidth: 50,
            strokeWidth: 2.8,
            legendDisplay: __options.legendDisplay || true,
            numberFormat: (t) => {
                console.error('[numberFormat] t', t);
            }
        };

        const definitions = dimensions.map((t) => {
            return t.definition;
        });

        console.log('[RadarChart] definitions', definitions);

        if (__options) {
            for (let h in __options) {
                if (__options[h]) {
                    chartDefaultOptions[h] = __options[h];
                }
            }
        }

        console.log('[RadarChart] chartDefaultOptions', chartDefaultOptions);
        console.log('[RadarChart] chartDefaultOptions.color.domain()', chartDefaultOptions.color.domain());

        let p;
        let v;

        let maxChartValue = Math.max(chartDefaultOptions.maxValue, d3.max(definitions, (function (t) {
            return d3.max(t.map((function (t) {
                return t.value;
            })));
        })));

        let minChartValue = Math.min(0, d3.min(definitions, (function (t) {
            return d3.min(t.map((function (t) {
                return t.value;
            })));
        })));

        false === qLayoutObj.range && (maxChartValue = isNaN(qLayoutObj.maxValue)
            ? 1
            : qLayoutObj.maxValue, minChartValue = isNaN(qLayoutObj.minValue)
            ? 0
            : qLayoutObj.minValue), chartDefaultOptions.size.width < chartDefaultOptions.size.height
            ? (p = chartDefaultOptions.size.width, v = chartDefaultOptions.size.width)
            : (p = chartDefaultOptions.size.height, v = chartDefaultOptions.size.height);

        console.log('[RadarChart] maxChartValue', maxChartValue);
        console.log('[RadarChart] minChartValue', minChartValue);
        console.log('[RadarChart] size.width/height p', p);
        console.log('[RadarChart] size.width/height h', v);

        let allAxis = definitions[0].map((function (t) {
            return t.axis;
        }));

        if (allAxis.length > 100) {
            allAxis = allAxis.slice(0, 100);
        }

        console.log('[RadarChart] allAxis', allAxis);

        const total = allAxis.length;
        console.log('[RadarChart] allAxis total', total);

        const radius = Math.abs(Math.min(v / 2 - chartDefaultOptions.margin.left - chartDefaultOptions.margin.right, p / 2 - chartDefaultOptions.margin.top - chartDefaultOptions.margin.bottom));
        const angleSlice = 2 * Math.PI / total;
        const rScale = d3.scaleLinear().range([0, radius]).domain([minChartValue, maxChartValue]);

        let w = function (t) {
            return Number.isFinite(t)
                ? rScale(t)
                : 0;
        };

        d3.select(__cssClass).select('svg').remove();

        let chartContainerId = 'container_' + qLayoutObj.qInfo.qId;

        // todo...
        // e.empty().append($('<div />').attr('id', chartContainerId).width(chartDefaultOptions.size.width).height(chartDefaultOptions.size.height));

        // let S = d3.select('#'.concat(chartContainerId)).append('svg').attr('width', chartDefaultOptions.size.width).attr('height', chartDefaultOptions.size.height).classed('in-edit-mode', __c._inEditState), // todo...
        let S = d3.select(__cssClass)
            .append('svg')
            .attr('width', chartDefaultOptions.size.width)
            .attr('height', chartDefaultOptions.size.height);

        let E = chartDefaultOptions.legendDisplay
            ? chartDefaultOptions.size.width / 1.8
            : chartDefaultOptions.size.width / 2;

        let N = S.append('g').attr('transform', `translate(${ E },${ chartDefaultOptions.size.height / 2 })`);

        let axisGrid = N.append('g').attr('class', 'axisWrapper');
        let axisContainer = N.append('g').attr('class', 'axisContainer');
        let blobWrapper = N.selectAll('.radarWrapper').data(definitions).enter().append('g').attr('class', 'radarWrapper');

        axisGrid
            .selectAll('.levels')
            .data(d3.range(1, chartDefaultOptions.levels + 1).reverse())
            .enter()
            .append('circle')
            .attr('class', 'gridCircle')
            .attr('r', (function (t) {
                return radius / chartDefaultOptions.levels * t;
            }))
            .style('fill', '#CDCDCD')
            .style('stroke', '#CDCDCD')
            .style('fill-opacity', chartDefaultOptions.colorOpacity.circle);

        const axis = axisContainer
            .selectAll('.axis')
            .data(allAxis)
            .enter()
            .append('g')
            .attr('class', 'axis');

        axis
            .append('line')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', (function (t, n) {
                return w(1.1 * maxChartValue) * Math.cos(angleSlice * n - Math.PI / 2);
            }))
            .attr('y2', (function (t, n) {
                return w(1.1 * maxChartValue) * Math.sin(angleSlice * n - Math.PI / 2);
            }))
            .attr('class', 'line')
            .style('stroke', 'white')
            .style('stroke-width', '2px');

        axis
            .append('text')
            .attr('class', 'legend')
            .style('font-size', '14px')
            .attr('text-anchor', 'middle')
            .attr('dy', '0.35em')
            .attr('x', ((t, n) => {
                return w(maxChartValue * chartDefaultOptions.labelFactor) * Math.cos(angleSlice * n - Math.PI / 2);
            }))
            .attr('y', ((t, n) => {
                return w(maxChartValue * chartDefaultOptions.labelFactor) * Math.sin(angleSlice * n - Math.PI / 2);
            }))
            .text((t) => {
                return t;
            })
            .call((function (t, n) {
                t.each((function () {
                    for (let t, e = d3.select(this), r = e.text().split(/\s+/).reverse(), o = [], u = 0, a = e.attr('y'), c = e.attr('x'), l = parseFloat(e.attr('dy')), s = e.text(null).append('tspan').attr('x', c).attr('y', a).attr('dy', l + 'em'); t = r.pop();) {
                        o.push(t);

                        s.text(o.join(' '));

                        s.node().getComputedTextLength() > n && (o.pop(), s.text(o.join(' ')), o = [t], s = e.append('tspan').attr('x', c).attr('y', a).attr('dy', 1.1 * ++u + l + 'em').text(t));
                    }
                }));
            }), chartDefaultOptions.wrapWidth);

        const radarLine = d3.lineRadial()
            .curve(d3.curveLinearClosed)
            .radius((function (t) {
                return Number.isFinite(t.value)
                    ? w(t.value)
                    : 1;
            }))
            .angle((function (t, n) {
                return n * angleSlice;
            }));

        if (chartDefaultOptions.roundStrokes) {
            radarLine.curve(d3.curveCardinalClosed);
        }

        blobWrapper
            .append('path')
            .attr('class', (function (t) {
                return 'radarArea c' + fixText(t[0].radar_area);
            }))
            .attr('d', (function (t) {
                return radarLine(t);
            }))
            .style('fill', (function (t, n) {
                return chartDefaultOptions.color(n);
            }))
            .style('fill-opacity', chartDefaultOptions.colorOpacity.area)
            .on('mouseover', (function () {
                $(`#${ chartContainerId }`).css('cursor', 'pointer');

                d3
                    .selectAll('#'.concat(chartContainerId, ' .radarArea'))
                    .transition()
                    .duration(200)
                    .style('fill-opacity', chartDefaultOptions.colorOpacity.area_out);

                d3.select(this)
                    .transition()
                    .duration(200)
                    .style('fill-opacity', chartDefaultOptions.colorOpacity.area_over);
            }))
            .on('click', (function (t) {
                let n = false;

                t.find((function (t) {
                    true === t.dim1IsNull && (n = true);
                }));

                n || true === __c.options.noInteraction || __c.backendApi.selectValues(0, [t[0].radar_area_id], true);
            }))
            .on('mouseout', (function () {
                $('#' + chartContainerId).css('cursor', 'default');

                d3.selectAll('#'.concat(chartContainerId, ' .radarArea'))
                    .transition()
                    .duration(200)
                    .style('fill-opacity', chartDefaultOptions.colorOpacity.area);
            }));

        blobWrapper
            .append('path')
            .attr('class', 'radarStroke')
            .attr('d', (function (t) {
                return radarLine(t);
            }))
            .style('stroke-width', chartDefaultOptions.strokeWidth + 'px')
            .style('stroke', (function (t, n) {
                return chartDefaultOptions.color(n);
            }))
            .style('fill', 'none');

        blobWrapper
            .selectAll('.radarCircle')
            .data((function (t) {
                return t;
            }))
            .enter()
            .append('circle')
            .attr('class', 'radarCircle')
            .attr('r', chartDefaultOptions.dotRadius)
            .attr('cx', (function (t, n) {
                return w(t.value) * Math.cos(angleSlice * n - Math.PI / 2);
            }))
            .attr('cy', (function (t, n) {
                return w(t.value) * Math.sin(angleSlice * n - Math.PI / 2);
            }))
            .style('fill', (function (t, n, e) {
                return chartDefaultOptions.color(e);
            })).style('fill-opacity', .8);

        N
            .selectAll('.radarCircleWrapper')
            .data(definitions)
            .enter()
            .append('g')
            .attr('class', 'radarCircleWrapper')
            .selectAll('.radarInvisibleCircle')
            .data((function (t) {
                return t;
            }))
            .enter()
            .append('circle')
            .attr('class', 'radarInvisibleCircle')
            .attr('r', 1.5 * chartDefaultOptions.dotRadius)
            .attr('cx', (function (t, n) {
                return w(t.value) * Math.cos(angleSlice * n - Math.PI / 2);
            }))
            .attr('cy', (function (t, n) {
                return w(t.value) * Math.sin(angleSlice * n - Math.PI / 2);
            }))
            .style('fill', 'none')
            .style('pointer-events', 'all')
            .on('mouseover', (function (t) {
                if (!__c._inEditState) {
                    let e = parseFloat(d3.select(this).attr('cx')) - 10;
                    let r = parseFloat(d3.select(this).attr('cy')) - 10;

                    tooltip
                        .attr('x', e)
                        .attr('y', r)
                        .text(t.radar_area + ' : ' + P(chartOptions.numberFormat[0], t.value * chartOptions.numberFormat[1]) + chartOptions.numberFormat[2])
                        .transition()
                        .duration(200)
                        .style('opacity', 1);
                }
            })).on('mouseout', (function () {
            __c._inEditState || tooltip.transition().duration(200).style('opacity', 0);
        }));

        const tooltip = N
            .append('text')
            .attr('class', 'tooltip')
            .style('opacity', 0);

        if (N.selectAll('.axisLabel').data(d3.range(1, chartDefaultOptions.levels + 1).reverse()).enter().append('text').attr('class', 'axisLabel').attr('x', 4).attr('y', (function (t) {
            return -t * radius / chartDefaultOptions.levels;
        })).attr('dy', '0.4em').style('font-size', '12px').attr('fill', '#000000').text((function (t) {
            return P(chartOptions.numberFormat[0], (minChartValue + (maxChartValue - minChartValue) * t / chartDefaultOptions.levels) * chartOptions.numberFormat[1]) + chartOptions.numberFormat[2];
        })), !(chartDefaultOptions.size.width / chartDefaultOptions.size.height < 1.5 && chartDefaultOptions.size.height < 380)) {
            S
                .append('g')
                .attr('class', 'legendOrdinal')
                .attr('transform', 'translate(' + chartDefaultOptions.legendPosition.x + ',' + chartDefaultOptions.legendPosition.y + ')');

            const T = d3
                .legendColor()
                .shape('path', d3.symbol().type(d3.symbolCircle)
                    .size(40)())
                .shapePadding(10)
                .scale(chartDefaultOptions.color)
                .labels(chartDefaultOptions.color.domain().map((function (t) {
                    console.log('[definitions] t', t);

                    try {
                        console.log('[definitions] definitions', definitions[t][0]);
                        return definitions[t][0].radar_area;

                    } catch (e) {
                        console.error('[]', e);
                        return 'error';
                    }
                })))
                .on('cellover', (function (t) {
                    !function (t) {
                        $('#'.concat(chartContainerId)).css('cursor', 'pointer'), d3.selectAll('#'.concat(chartContainerId, ' .radarArea')).transition().duration(200).style('fill-opacity', chartDefaultOptions.colorOpacity.area_out), d3.select('#'.concat(chartContainerId, ' .c') + fixText(definitions[t][0].radar_area)).transition().duration(200).style('fill-opacity', chartDefaultOptions.colorOpacity.area_over);
                    }(t);
                }))
                .on('cellclick', (function (t) {
                    !function (t) {
                        $('#' + chartContainerId).css('cursor', 'default');
                        let n = false;
                        definitions[t].find((function (t) {
                            true === t.dim1IsNull && (n = true);
                        })), n || true === __c.options.noInteraction || (d3.selectAll('#'.concat(chartContainerId, ' .radarArea')).transition().duration(200).style('fill-opacity', .9), __c.backendApi.selectValues(0, [definitions[t][0].radar_area_id], true));
                    }(t);
                }))
                .on('cellout', (function () {
                    $('#' + chartContainerId).css('cursor', 'default'), d3.selectAll('#'.concat(chartContainerId, ' .radarArea')).transition().duration(200).style('fill-opacity', chartDefaultOptions.colorOpacity.area);
                }));

            true !== qLayoutObj.qHyperCube.qDimensionInfo.length && true === chartDefaultOptions.legendDisplay && S.select('.legendOrdinal').call(T);
        }
    } else {
        throw new Error('The chart is not displayed because there might be an error with the data or the measure.');
    }

    function P(t, n) {
        if (!t || isNaN(+n)) {
            return n;
        }
        let e = (n = '-' == t.charAt(0)
                ? -n
                : +n) < 0
                ? n = -n
                : 0,
            r = t.match(/[^\d\-\+#]/g),
            i = r && r[r.length - 1] || '.',
            o = r && r[1] && r[0] || ',';
        t = t.split(i), n = +(n = n.toFixed(t[1] && t[1].length)) + '';
        let u = t[1] && t[1].lastIndexOf('0'),
            a = n.split('.');
        (!a[1] || a[1] && a[1].length <= u) && (n = (+n).toFixed(u + 1));
        let c = t[0].split(o);
        t[0] = c.join('');
        let l = t[0] && t[0].indexOf('0');
        if (l > -1) {
            for (; a[0].length < t[0].length - l;) {
                a[0] = '0' + a[0];
            }
        } else {
            0 == +a[0] && (a[0] = '');
        }
        (n = n.split('.'))[0] = a[0];
        let s = c[1] && c[c.length - 1].length;
        if (s) {
            for (let f = n[0], h = '', p = f.length % s, v = 0, d = f.length; v < d; v++) {
                h += f.charAt(v), !((v - p + 1) % s) && v < d - s && (h += o);
            }
            n[0] = h;
        }
        return n[1] = t[1] && n[1]
            ? i + n[1]
            : '', (e
            ? '-'
            : '') + n[0] + n[1];
    }
}

// ---- private functions

function _init(_chartOptions) {
    const chartOptions = {
        numberFormat: [
            '# ##0,00',
            1,
            ''
        ]
    };

    Object.assign(chartOptions, Object.assign({}, _chartOptions));

    const v = {
        numberFormattingMode: {
            show: false
        },
        numberFormattingType: {
            type: 'items',
            options: function () {
                return [{
                    value: 'U',
                    translation: 'Common.Auto'
                }, {
                    value: 'F',
                    translation: 'properties.numberFormatting.types.number'
                }];
            }
        }
    };
    const d = {
        type: 'items',
        items: {
            numberFormat: {
                type: 'items',
                items: v
            }
        }
    };

    Object.assign(d.items, Object.assign({}, v));

    chartOptions.default = {
        initialProperties: {
            qHyperCubeDef: {
                qDimensions: [],
                qMeasures: [],
                qInitialDataFetch: [{
                    qWidth: 3,
                    qHeight: 3333
                }]
            }
        },
        data: {
            dimensions: {
                min: 2,
                max: 2,
                add: function (t, n, e) {
                    console.log('[add]');
                    h(e);
                    p(n);
                },
                remove: function (t, n, e) {
                    console.log('[remove]');
                    h(e);
                },
                move: function (t, n, e) {
                    console.log('[move]');
                    h(e);
                    p(n);
                },
                replace: function (t, n, e, r, i) {
                    console.log('[replace]');
                    h(i);
                    p(r);
                }
            },
            measures: {
                min: 1,
                max: 1
            }
        },
        support: {
            snapshot: true,
            export: true,
            exportData: true
        },
        definition: {
            type: 'items',
            component: 'accordion',
            items: {
                data: {
                    uses: 'data',
                    items: {
                        dimensions: {disabledRef: ''},
                        measures: {
                            disabledRef: '',
                            items: {numberFormatting: d}
                        }
                    }
                },
                settings: {
                    uses: 'settings',
                    items: {
                        design: {
                            label: 'Design',
                            type: 'items',
                            items: {
                                Line: {
                                    ref: 'strokeStyle',
                                    component: 'dropdown',
                                    type: 'boolean',
                                    label: 'Stroke type',
                                    defaultValue: true,
                                    options: [{
                                        value: true,
                                        label: 'Smooth'
                                    }, {
                                        value: false,
                                        label: 'Straight'
                                    }],
                                    show: true
                                },
                                Range: {
                                    ref: 'range',
                                    component: 'switch',
                                    type: 'boolean',
                                    translation: 'Range',
                                    defaultValue: true,
                                    trueOption: {
                                        value: true,
                                        translation: 'Auto'
                                    },
                                    falseOption: {
                                        value: false,
                                        translation: 'Custom'
                                    },
                                    show: true
                                },
                                MaxValue: {
                                    ref: 'maxValue',
                                    type: 'number',
                                    expression: 'optional',
                                    defaultValue: 1,
                                    show: function (t) {
                                        return false === t.range;
                                    }
                                },
                                MinValue: {
                                    ref: 'minValue',
                                    type: 'number',
                                    expression: 'optional',
                                    defaultValue: 0,
                                    show: function (t) {
                                        return false === t.range;
                                    }
                                },
                                Legend: {
                                    ref: 'showLegend',
                                    component: 'switch',
                                    type: 'boolean',
                                    translation: 'Legend',
                                    defaultValue: true,
                                    trueOption: {
                                        value: true,
                                        translation: 'properties.on'
                                    },
                                    falseOption: {
                                        value: false,
                                        translation: 'properties.off'
                                    },
                                    show: true
                                },
                                colors: {
                                    ref: 'ColorSchema',
                                    type: 'string',
                                    component: 'item-selection-list',
                                    label: 'Color',
                                    show: true,
                                    defaultValue: COLORS_PALETTE.TWELVE_COLORS,
                                    items: [{
                                        component: 'color-scale',
                                        colors: COLORS_PALETTE.TWELVE_COLORS,
                                        value: COLORS_PALETTE.TWELVE_COLORS,
                                        label: '12 colors'
                                    }, {
                                        component: 'color-scale',
                                        colors: COLORS_PALETTE.TWELVE_COLORS_REVERSE,
                                        value: COLORS_PALETTE.TWELVE_COLORS_REVERSE,
                                        label: '12 colors (Reverse)'
                                    }, {
                                        component: 'color-scale',
                                        colors: COLORS_PALETTE.BLUE_PURPLE,
                                        value: COLORS_PALETTE.BLUE_PURPLE,
                                        label: 'Blue purple colors'
                                    }, {
                                        component: 'color-scale',
                                        colors: COLORS_PALETTE.BREEZE,
                                        value: COLORS_PALETTE.BREEZE,
                                        label: 'Breeze theme colors'
                                    }]
                                }
                            }
                        }
                    }
                },
                about: {
                    component: 'items',
                    label: 'About',
                    items: {
                        header: {
                            label: 'Radar chart',
                            style: 'header',
                            component: 'text'
                        },
                        paragraph1: {
                            label: 'Radar chart is a two-dimensional chart that uses radical axes to show the\n              scoring of a measure in one dimension over another.',
                            component: 'text'
                        },
                        paragraph2: {
                            label: 'Radar chart is based upon an extension created by Brian Booden and VizMatt.',
                            component: 'text'
                        }
                    }
                }
            }
        },
        snapshot: {canTakeSnapshot: true},
        paint: null
    };

    return chartOptions;
}

function _getO(qLayout) {
    const qMatrixEl = qLayout.qHyperCube.qDataPages[0].qMatrix;
    const e = [];
    const r = {};
    const i = {};
    const o = [];
    const u = [];
    const qElemNumberCategoryIndices = [];
    const qMatrixElements = [];

    for (let l = 0; l < qMatrixEl.length; l++) {
        if (-1 === qElemNumberCategoryIndices.indexOf(qMatrixEl[l][0].qElemNumber) && qElemNumberCategoryIndices.length < 100) {
            qElemNumberCategoryIndices.push(qMatrixEl[l][0].qElemNumber);
        }

        if (-1 !== qElemNumberCategoryIndices.indexOf(qMatrixEl[l][0].qElemNumber)) {
            qMatrixElements.push(qMatrixEl[l]);
        }
    }

    return qMatrixElements.forEach((function (qMatrixElement) {
        -1 === u.indexOf(qMatrixElement[1].qElemNumber) && u.length < 100 && (i[qMatrixElement[1].qElemNumber] = u.length, u.push(qMatrixElement[1].qElemNumber), o.push(qMatrixElement[1].qText));
    })), qMatrixElements.forEach((function (t) {
        void 0 === r[t[0].qElemNumber] && (r[t[0].qElemNumber] = e.length, e.push({
            dim: t[0].qText,
            dim_id: t[0].qElemNumber,
            definition: u.map((function (n, e) {
                return {
                    axis_id: n,
                    axis: o[e],
                    radar_area_id: t[0].qElemNumber,
                    radar_area: t[0].qText,
                    value: NaN
                };
            }))
        })), void 0 !== i[t[1].qElemNumber] && (e[r[t[0].qElemNumber]].definition[i[t[1].qElemNumber]].value = isNaN(t[2].qNum)
            ? 0
            : t[2].qNum), t[0].qIsNull && void 0 !== i[t[1].qElemNumber] && (e[r[t[0].qElemNumber]].definition[i[t[1].qElemNumber]].dim1IsNull = true);
    })), qMatrixElements.map((function (t) {
        return t[2].qNum;
    })).every((function (t) {
        return function (t) {
            return !!t && (isNaN(t) || 'NaN' === t);
        }(t);
    }))
        ? null
        : e;
}

function h(t) {
    console.log('[h] t', t);

    let dimensions = t.getDimensions();

    if (dimensions && dimensions.length) {
        dimensions.forEach((dimension, index) => {
            if (1 === index) {
                dimension.qOtherTotalSpec.qOtherMode = 'OTHER_COUNTED';
                dimension.qOtherTotalSpec.qOtherCounted = {qv: '20'};
            } else {
                delete dimension.qOtherTotalSpec;
            }
        });
    }

    console.log('[h] dimensions', dimensions);
}

function p(t) {
    if (t.qHyperCubeDef) {
        let n = t.qHyperCubeDef.qDimensions;
        let e = t.qHyperCubeDef.qMeasures;
        2 === n.length && 1 === e.length && (t.qHyperCubeDef.qInterColumnSortOrder = [0, 1, 2]);
    }

    console.log('[p] t', t);
}

function fixText(str) {
    return str
        ? str.replace(/\s|\/|:|'|\.|\(|\)|#|@|\*|\[|\]|!|%|&|{|}|,|;|\?|`|\^|\<|\||\=|\$|"|\+|\>|\\|~/g, '')
        : '';
}

// ^--- private functions

class QlikRadarRenderService {

    getRadarChart() {
        return RadarChart;
    }

}

angular
    .module('qlik.ui.radar')
    .service('QlikRadarRenderService', QlikRadarRenderService);
