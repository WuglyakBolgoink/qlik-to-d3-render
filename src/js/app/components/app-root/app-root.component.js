'use strict';

class AppRootController {

    constructor(
        $scope,
        $timeout,
        QlikRadarService
    ) {
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.QlikRadarService = QlikRadarService;
    }

    $onInit() {
        this.json = '';
        this.report = null;
    }

    $onDestroy() {
        this.report = null;
    }

    importQlikJsonFile() {
        this.report = null;

        this.$timeout(() => {
            if (this.json) {
                try {
                    const file = JSON.parse(this.json);
                    this.report = this.QlikRadarService.convertData(file);

                    this.$scope.$applyAsync();
                } catch (error) {
                    console.error(error);
                    alert(`Error: ${ error.message }`);
                }
            }
        }, 0);
    }

}

AppRootController.$inject = [
    '$scope',
    '$timeout',
    'QlikRadarService'
];

angular
    .module('myApp')
    .component('appRoot', {
        template: `
            <form name="$ctrl.form" data-ng-submit="$ctrl.form.$valid && $ctrl.importQlikJsonFile()" novalidate>
                <textarea data-ng-model="$ctrl.json" rows="10" required></textarea>
                <button type="submit" data-ng-disabled="$ctrl.form.$invalid">Import</button>
            </form>
            <hr>
            <qlik-radar-chart
                data-ng-if="$ctrl.report !== null" 
                cmp-class="radarChart1" 
                cmp-data="$ctrl.report"
                cmp-round-strokes="true"
            ></qlik-radar-chart>  
        `,
        controller: AppRootController
    });
