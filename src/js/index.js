'use strict';

const PRECISION = 2;

class AppController {
    $onInit() {
        this.reports = reports;
        console.log(this.reports)

        this.reports[0].data = this.reports[0].data.filter(el=>el.values.length<3)

        console.table(this.reports[0].data)
    }
}



class AppControllerExample2 {

    constructor($scope) {
        this.$scope = $scope;
    }

    $onInit() {
        this.json = '';
        this.report = null;
    }

    openJSON() {
        this.report = null;

        setTimeout(() => {
            if (this.json) {
                try {
                    const file = JSON.parse(this.json);
                    this.report = this.convertData(file);
                } catch (e) {
                    console.error(e);
                    alert('Error: ' + e.message);
                }
            }

            this.$scope.$applyAsync();
        }, 0);
    }

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

AppControllerExample2.$inject = ["$scope"];

class AppRadarChartController {
    $onInit() {
        console.log('this.cmpData', this.cmpData)
        const margin = {
            top: 100,
            right: 100,
            bottom: 100,
            left: 180
        };
        const width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right;
        const height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
        const legendPosition = {
            x: 10,
            y: 25
        };

        const radarChartOptions = {
            w: width,
            h: height,
            margin: margin,
            maxValue: this.cmpData.maxValue,
            levels: 6,
            roundStrokes: true,
            color: d3.scaleOrdinal().range([ ...this.cmpData.colorSchema ]),
            //extras
            colorSchema: this.cmpData.colorSchema,
            legendTitle: this.cmpTitle,
            legendPosition: legendPosition,
            axisName: 'axis',
            areaName: 'category',
            value: 'value'
        };

        //Call function to draw the Radar chart
        setTimeout(() => {
            RadarChart(`.${ this.cmpClass }`, this.cmpData.data, radarChartOptions);
        }, 0);
    }
}

angular.module('myApp', []);

angular
    .module('myApp')
    .component('appComp', {
        template: `
            <app-radar-chart ng-repeat="report in $ctrl.reports track by $index" cmp-class="radarChart{{$index}}" cmp-data="report" cmp-title="radarChart{{$index}}"></app-radar-chart>
        `,
        controller: AppController
    })
    .component('appCompExampleTwo', {
        template: `
        <form name="$ctrl.form" data-ng-submit="$ctrl.openJSON()" novalidate>
            <textarea data-ng-model="$ctrl.json" rows="10" required></textarea>
            <button type="submit" data-ng-disabled="$ctrl.form.$invalid">open</button>
            </form>
            <hr>
            <app-radar-chart data-ng-if="$ctrl.report !== null" cmp-class="radarChart1" cmp-data="$ctrl.report" cmp-title="radarChart1"></app-radar-chart>  
        `,
        controller: AppControllerExample2
    })
    .component('appRadarChart', {
        template: '<div class="rc" data-ng-class="$ctrl.cmpClass"></div>',
        bindings: {
            cmpClass: '@',
            cmpTitle: '@',
            cmpData: '<'
        },
        controller: AppRadarChartController
    });

