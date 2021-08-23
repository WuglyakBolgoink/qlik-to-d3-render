'use strict';

class AppRootController {

    constructor(
        $scope
    ) {
        this.$scope = $scope;
    }

    $onInit() {
        // textarea input
        this.json = '';

        // input data as json object
        this.file = '';

        const margin = {
            top: 0,
            right: 10,
            bottom: 40,
            left: 10
        };

        const width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right;
        const height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

        this.chartOptions = {
            roundStrokes: false,
            levels: 6,

            // todo: remove? use original values from qlick import
            legendDisplay: true,
            // todo: remove? use original values from plugin
            legendPosition: {
                x: 10,
                y: 10
            },

            margin: margin,
            size: {
                width: width,
                height: height
            }
        };

        this.importQlikJsonFile();
    }

    importQlikJsonFile() {
        this.file = '';

        if (this.json) {
            try {
                this.$scope.$applyAsync(() => {
                    this.file = Object.assign({}, JSON.parse(this.json));
                });
            } catch (error) {
                console.error(error);
                alert(`Error: ${ error.message }`);
            }
        }
    }

}

AppRootController.$inject = [
    '$scope'
];

angular
    .module('myApp')
    .component('appRoot', {
        template: `
            <form name="$ctrl.form" data-ng-submit="$ctrl.form.$valid && $ctrl.importQlikJsonFile()" novalidate>
                <textarea data-ng-model="$ctrl.json" rows="10" required></textarea>
                <button type="submit" data-ng-disabled="$ctrl.form.$invalid">Import</button>
            </form>
            <div ng-if="$ctrl.file">
                <br>
                <qlik-radar-chart
                    cmp-id="421f8686-1676-47ff-ac56-8b498bbe3598" 
                    cmp-class="radarChart1" 
                    cmp-file="$ctrl.file"
                    cmp-options="$ctrl.chartOptions"
                ></qlik-radar-chart>  
            </div>
        `,
        controller: AppRootController
    });
