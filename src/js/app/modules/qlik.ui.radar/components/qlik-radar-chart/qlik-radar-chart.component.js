'use strict';

/**
 * @class QlikRadarChartController
 *
 * @property {string} cmpClass - CSS class name for SVG container.
 * @property {any} cmpFile - Original qlik file as JSON Object.
 * @property {any} cmpOptions - Custom chart options.
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
        console.log('[QlikRadarChartController.$onInit] this.cmpClass', this.cmpClass);
        console.log('[QlikRadarChartController.$onInit] this.cmpOptions', this.cmpOptions);
        console.log('[QlikRadarChartController.$onInit] this.cmpFile', this.cmpFile);

        this.drawAll();
    }

    /**
     * @param {angular.IChangesObject} changesObj
     */
    $onChanges(changesObj) {
        if (changesObj && changesObj.cmpFile && changesObj.cmpFile.previousValue !== changesObj.cmpFile.currentValue) {
            this.drawAll();
        }
    }

    drawAll() {
        console.log('[drawAll] this.cmpClass', this.cmpClass);
        console.log('[drawAll] this.cmpFile', this.cmpFile);
        console.log('[drawAll] this.cmpOptions:', this.cmpOptions);

        this.$timeout(() => {
            const chart = this.QlikRadarRenderService.getRadarChart();
            chart(`.${ this.cmpClass }`, this.cmpFile, this.cmpOptions);
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
        template: `
            <div class="rc" data-ng-class="$ctrl.cmpClass"></div>
        `,
        bindings: {
            cmpClass: '@',
            cmpFile: '<',
            cmpOptions: '<'
        },
        controller: QlikRadarChartController
    });
