'use strict';

const PRECISION = 2;

class QlikRadarService {

    convertData(file) {
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

            return {
                categories,
                data,
                colorSchema: ColorSchema,
                maxValue: getMaxValue(data)
            };
        }
    }

}

angular
    .module('qlik.ui.radar')
    .service('QlikRadarService', QlikRadarService);
