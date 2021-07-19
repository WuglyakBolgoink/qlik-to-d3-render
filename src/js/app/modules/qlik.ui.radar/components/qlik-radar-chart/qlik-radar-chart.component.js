'use strict';

/**
 * @class QlikRadarChartController
 *
 * @property {string} cmpClass - CSS class name.
 * @property {any} cmpData - Converted qlik data.
 * @property {boolean} cmpRoundStrokes - If true the area and stroke will follow a round path (cardinal-closed)
 */
class QlikRadarChartController {

    constructor(
        $scope,
        $timeout,
        QlikRadarRenderService
    ) {
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.QlikRadarRenderService = QlikRadarRenderService;
    }

    $onInit() {
        console.log('this.cmpData', this.cmpData);

        this.inputs = {};

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

        this.radarChartOptions = {
            w: width,
            h: height,
            margin: margin,
            maxValue: this.cmpData.maxValue,
            levels: 6,
            roundStrokes: this.cmpRoundStrokes || false,
            color: d3.scaleOrdinal().range([ ...this.cmpData.colorSchema ]),
            colorSchema: this.cmpData.colorSchema,
            showLegend: this.cmpData.options.showLegend,
            legendTitle: this.cmpData.options.showLegend ? this.cmpData.options.legendTitle : '',
            legendPosition: legendPosition,
            axisName: 'axis',
            areaName: 'category',
            value: 'value'
        };

        this.categories = this.cmpData.data.map(el => el.key);

        this.drawAll();
    }

    drawAll() {
        this.inputs = {
            '-1': this.inputs['-1']
        };

        this.$timeout(() => {
            const chart = this.QlikRadarRenderService.getRadarChart();

            chart(`.${ this.cmpClass }`, this.cmpData.data, this.radarChartOptions);
        }, 0);
    }

    drawCategories() {
        delete this.inputs['-1'];

        const indices = [];
        for (const [ key, value ] of Object.entries(this.inputs)) {
            if (value) {
                indices.push(+key);
            }
        }

        const partialData = indices.map(index => this.cmpData.data[index]);

        console.log('[drawCategories] partialData', partialData);
        console.log('[drawCategories] partialData', JSON.stringify(partialData, null, 2));

        partialData.forEach(el=>{
            console.log('[el]', el.key);
            console.table(el.values);
        })

        if (partialData.length) {
            this.$timeout(() => {
                const chart = this.QlikRadarRenderService.getRadarChart();

                chart(`.${ this.cmpClass }`, partialData, this.radarChartOptions);
            }, 0);
        } else {
            this.drawAll();
        }
    }
}

QlikRadarChartController.$inject = [
    '$scope',
    '$timeout',
    'QlikRadarRenderService'
];

angular
    .module('qlik.ui.radar')
    .component('qlikRadarChart', {
        template: `
            <div>
                <label>
                <input type="checkbox" ng-model="$ctrl.inputs[-1]" ng-change="$ctrl.drawAll()">
                all
                </label>
                <label ng-repeat="category in $ctrl.categories track by $index">
                <input type="checkbox" ng-value="false" ng-model="$ctrl.inputs[$index]" ng-change="$ctrl.drawCategories()">
                {{category}}
                </label>
            </div>
            <div class="rc" data-ng-class="$ctrl.cmpClass"></div>
        `,
        bindings: {
            cmpClass: '@',
            cmpData: '<',
            cmpRoundStrokes: '<'
        },
        controller: QlikRadarChartController
    });
