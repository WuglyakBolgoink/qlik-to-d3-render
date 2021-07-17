'use strict';

const PRECISION = 2;

const SORT_ORDER = {
    0: 'category',
    1: 'axis',
    2: 'value'
};

class QlikRadarService {

    convertData(file) {
        const qDataPages = file.result.qLayout.qHyperCube.qDataPages;
        const ColorSchema = file.result.qLayout.ColorSchema;
        const qEffectiveInterColumnSortOrder = file.result.qLayout.qHyperCube.qEffectiveInterColumnSortOrder;

        const qlikChartOptions = {
            showTitles: file.result.qLayout.showTitles,
            title: file.result.qLayout.title,
            subtitle: file.result.qLayout.subtitle,
            footnote: file.result.qLayout.footnote,
            disableNavMenu: file.result.qLayout.disableNavMenu,
            showDetails: file.result.qLayout.showDetails,
            strokeStyle: file.result.qLayout.strokeStyle,
            range: file.result.qLayout.range,
            maxValue: file.result.qLayout.maxValue,
            minValue: file.result.qLayout.minValue,
            showLegend: file.result.qLayout.showLegend
        };

        console.log('[convertData] qEffectiveInterColumnSortOrder', qEffectiveInterColumnSortOrder);

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
                    SORT_ORDER[qEffectiveInterColumnSortOrder[0]],
                    SORT_ORDER[qEffectiveInterColumnSortOrder[1]],
                    SORT_ORDER[qEffectiveInterColumnSortOrder[2]]
                ])
                .groupBy('category')
                .reduce((acc, current, key) => {
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
                minValue: getMinValue(data),
                options: {
                    ...qlikChartOptions
                }
            };
        }
    }

}

angular
    .module('qlik.ui.radar')
    .service('QlikRadarService', QlikRadarService);
