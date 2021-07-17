const fs = require('fs');
const _ = require('lodash');

const PRECISION = 2;

/**
 * @type {Qlik}
 */
    // const file = require('./demo/qlik-radar-chart.json');
    // const file = require('./demo/qlik-radar-chart-1.json');
    // const file = require('./demo/qlik-radar-chart-2.json');
    // const file = require('./demo/qlik-radar-chart-3.json');

const files = [
        // require('./demo/qlik-radar-chart.json'),
        require('./demo/qlik-radar-chart-1.json'),
        // require('./demo/qlik-radar-chart-2.json'),
        // require('./demo/qlik-radar-chart-3.json')
    ];

const result = [];
files.forEach(f => {
    result.push(convertData(f));
});

fs.writeFileSync('./src/js/report.js', 'const reports = ' + JSON.stringify(result, null, 2));

function convertData(file) {
    const qDataPages = file.result.qLayout.qHyperCube.qDataPages;
    const ColorSchema = file.result.qLayout.ColorSchema;

    const {
        showTitles,
        title,
        subtitle,
        footnote,
        showDetails,
        strokeStyle,
        range,
        maxValue,
        minValue,
        showLegend
    } = file.result.qLayout;

    // Его нужно учитывать при построении диаграммы
    const globalChartOptions = {
        showTitles,
        title,
        subtitle,
        footnote,
        showDetails,
        strokeStyle,
        range,
        maxValue,
        minValue,
        showLegend
    };

    const qDataPagesFirst = qDataPages.pop();

    if (qDataPagesFirst) {
        let data = qDataPagesFirst.qMatrix.map((el) => {
            console.table(el)
            return {
                category: el[0].qText,
                axis: el[1].qText,
                value: Number(el[2].qNum.toFixed(PRECISION))
            };
        });


        const categories = [];
        data = _.chain(data)
            .sortBy([
                'category'
            ])
            .groupBy('category')
            .reduce((acc, current, key) => {
                // console.log('[current]', current);
                // console.table(current);


                current = _.sortBy(current, [ 'axis', 'value' ]);

                acc.push({
                    key,
                    values: current
                });

                categories.push(key);

                return acc;
            }, [])
            .value();

        function getMaxValue(data) {
            const values = data.map(el => el.values).flat().map(el => el.value).sort();

            return Math.max.apply(null, values);
        }

        function getMinValue(data) {
            const values = data.map(el => el.values).flat().map(el => el.value).sort();

            return Math.min.apply(null, values);
        }

        return {
            categories,
            data,
            colorSchema: ColorSchema,
            maxValue: getMaxValue(data),
            minValue: getMinValue(data)
        };
    }
}

