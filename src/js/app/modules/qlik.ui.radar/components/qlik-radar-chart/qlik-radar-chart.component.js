'use strict';

/**
 * @class QlikRadarChartController
 *
 * @property {string} cmpId - ID for container.
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
        this.inEditState = false;
        this.options = {
            noInteraction: false
        };

        this.draw();
    }

    /**
     * @param {angular.IChangesObject} changesObj
     */
    $onChanges(changesObj) {
        if (changesObj && changesObj.cmpFile && changesObj.cmpFile.previousValue !== changesObj.cmpFile.currentValue) {
            this.draw();
        }
    }

    _drawAll(file) {
        // console.warn('[_drawAll] this.cmpClass', this.cmpClass);
        // console.warn('[_drawAll] file', file);
        // console.warn('[_drawAll] this.cmpFile', this.cmpFile);
        // console.warn('[_drawAll] this.cmpOptions:', JSON.stringify(this.cmpOptions, null, 2));

        this.$timeout(() => {
            const chart = this.QlikRadarRenderService.getRadarChart();
            chart(`.${ this.cmpClass }`, file || this.cmpFile, this.cmpOptions, this, this.cmpId);
        }, 0);
    }

    /**
     * @param {boolean} single - Draw all categories or only single, by clicking on category item.
     * @param {string?} categoryId - Category Id if "single === true".
     * @param {Object?} options - todo...
     *
     * @public
     */
    draw(single = false, categoryId = '', options = null) {
        // console.log('[QlikRadarChartController.draw] options', JSON.stringify(options, null, 2));

        if (single) {
            // console.log('[QlikRadarChartController.draw] single', categoryId);

            if (!this.inEditState) {
                this.inEditState = true;

                const filteredFile = _.cloneDeep(this.cmpFile);

                let qMatrixEl = filteredFile.result.qLayout.qHyperCube.qDataPages[0].qMatrix;

                qMatrixEl = qMatrixEl.filter((chunks) => {
                    return chunks[0].qElemNumber === categoryId;
                });

                // console.log('[QlikRadarChartController.draw] qMatrixEl', qMatrixEl);

                filteredFile.result.qLayout.qHyperCube.qDataPages[0].qMatrix = qMatrixEl;

                this._drawAll(filteredFile);

                this.$scope.$apply();
            } else {
                this.inEditState = false;

                this._drawAll();

                this.$scope.$apply();
            }
        } else {
            // console.log('[QlikRadarChartController.draw] all');
            this._drawAll();
        }
    }

    selectValues(a, b, c) {
        // console.warn('[QlikRadarChartController.selectValues]', a, b, c);

        const [categoryId] = b;

        this.draw(true, categoryId, {
            a,
            b,
            c
        });
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
            <div id="{{$ctrl.cmpId}}"></div>
        `,
        bindings: {
            cmpId: '@',
            cmpClass: '@',
            cmpFile: '<',
            cmpOptions: '<'
        },
        controller: QlikRadarChartController
    });
