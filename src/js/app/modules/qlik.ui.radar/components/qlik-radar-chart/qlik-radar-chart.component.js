'use strict';

/**
 * @class QlikRadarChartController
 *
 * @property {string} cmpClass - CSS class name.
 * @property {any} cmpData - Converted qlik data.
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
        this.$timeout(() => {
            const chart = this.QlikRadarRenderService.getRadarChart();

            chart(`.${ this.cmpClass }`, this.cmpData.data, radarChartOptions);

            this.$scope.$applyAsync();
        }, 0);
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
        template: '<div class="rc" data-ng-class="$ctrl.cmpClass"></div>',
        bindings: {
            cmpClass: '@',
            cmpData: '<'
        },
        controller: QlikRadarChartController
    });
