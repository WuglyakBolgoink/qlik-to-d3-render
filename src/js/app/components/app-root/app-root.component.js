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

        // mock
        this.json = JSON.stringify(
            {
                'jsonrpc': '2.0',
                'id': 4,
                'delta': true,
                'result': {
                    'qLayout': {
                        'qInfo': {
                            'qId': '2247ed01-b5da-48bc-b84c-8cd9c818f353',
                            'qType': 'qlik-radar-chart'
                        },
                        'qMeta': {
                            'privileges': [
                                'read',
                                'update',
                                'delete',
                                'exportdata'
                            ]
                        },
                        'qSelectionInfo': {},
                        'qHyperCube': {
                            'qSize': {
                                'qcx': 3,
                                'qcy': 21
                            },
                            'qDimensionInfo': [
                                {
                                    'qFallbackTitle': 'Товар',
                                    'qApprMaxGlyphCount': 11,
                                    'qCardinal': 1000,
                                    'qSortIndicator': 'A',
                                    'qGroupFallbackTitles': [
                                        'Товар'
                                    ],
                                    'qGroupPos': 0,
                                    'qStateCounts': {
                                        'qLocked': 0,
                                        'qSelected': 0,
                                        'qOption': 1000,
                                        'qDeselected': 0,
                                        'qAlternative': 0,
                                        'qExcluded': 0,
                                        'qSelectedExcluded': 0,
                                        'qLockedExcluded': 0
                                    },
                                    'qTags': [
                                        '$ascii',
                                        '$text'
                                    ],
                                    'qDimensionType': 'D',
                                    'qGrouping': 'N',
                                    'qNumFormat': {
                                        'qType': 'U',
                                        'qnDec': 0,
                                        'qUseThou': 0
                                    },
                                    'qIsAutoFormat': true,
                                    'qGroupFieldDefs': [
                                        'PART_NO'
                                    ],
                                    'qMin': 'NaN',
                                    'qMax': 'NaN',
                                    'qAttrExprInfo': [],
                                    'qAttrDimInfo': [],
                                    'qCardinalities': {
                                        'qCardinal': 1000,
                                        'qHypercubeCardinal': 7,
                                        'qAllValuesCardinal': -1
                                    },
                                    'qLibraryId': 'vnDTkA',
                                    'title': 'Товар',
                                    'coloring': {
                                        'changeHash': '0.6167664108861397'
                                    },
                                    'autoSort': true,
                                    'cId': 'wfkpcWC',
                                    'othersLabel': 'Другие'
                                },
                                {
                                    'qFallbackTitle': 'Квартал',
                                    'qApprMaxGlyphCount': 2,
                                    'qCardinal': 3,
                                    'qSortIndicator': 'A',
                                    'qGroupFallbackTitles': [
                                        'Квартал'
                                    ],
                                    'qGroupPos': 0,
                                    'qStateCounts': {
                                        'qLocked': 0,
                                        'qSelected': 0,
                                        'qOption': 3,
                                        'qDeselected': 0,
                                        'qAlternative': 0,
                                        'qExcluded': 0,
                                        'qSelectedExcluded': 0,
                                        'qLockedExcluded': 0
                                    },
                                    'qTags': [
                                        '$quarter',
                                        '$cyclic',
                                        '$numeric',
                                        '$integer'
                                    ],
                                    'qDimensionType': 'N',
                                    'qGrouping': 'N',
                                    'qNumFormat': {
                                        'qType': 'U',
                                        'qnDec': 0,
                                        'qUseThou': 0
                                    },
                                    'qIsAutoFormat': true,
                                    'qGroupFieldDefs': [
                                        'Дата.autoCalendar.Quarter'
                                    ],
                                    'qMin': 1,
                                    'qMax': 4,
                                    'qContinuousAxes': true,
                                    'qIsCyclic': true,
                                    'qDerivedField': true,
                                    'qAttrExprInfo': [],
                                    'qAttrDimInfo': [],
                                    'qCardinalities': {
                                        'qCardinal': 3,
                                        'qHypercubeCardinal': 3,
                                        'qAllValuesCardinal': -1
                                    },
                                    'qLibraryId': 'TPmAVa',
                                    'title': 'Квартал',
                                    'coloring': {
                                        'changeHash': '0.6875251613066795'
                                    },
                                    'autoSort': true,
                                    'cId': 'RaDDZ',
                                    'othersLabel': 'Другие'
                                }
                            ],
                            'qMeasureInfo': [
                                {
                                    'qFallbackTitle': 'Количество',
                                    'qApprMaxGlyphCount': 8,
                                    'qCardinal': 0,
                                    'qSortIndicator': 'D',
                                    'qNumFormat': {
                                        'qType': 'I',
                                        'qnDec': 0,
                                        'qUseThou': 1,
                                        'qFmt': '###0',
                                        'qDec': ','
                                    },
                                    'qMin': 7816,
                                    'qMax': 65784,
                                    'qIsAutoFormat': true,
                                    'qAttrExprInfo': [],
                                    'qAttrDimInfo': [],
                                    'qLibraryId': 'qLYDS',
                                    'qTrendLines': [],
                                    'coloring': {},
                                    'autoSort': true,
                                    'cId': 'yKbjTx',
                                    'numFormatFromTemplate': true
                                }
                            ],
                            'qEffectiveInterColumnSortOrder': [
                                0,
                                1,
                                2
                            ],
                            'qGrandTotalRow': [
                                {
                                    'qText': '70642504',
                                    'qNum': 70642504,
                                    'qElemNumber': -1,
                                    'qState': 'X',
                                    'qIsTotalCell': true
                                }
                            ],
                            'qDataPages': [
                                {
                                    'qMatrix': [
                                        [
                                            {
                                                'qText': 'PART_NO914',
                                                'qNum': 'NaN',
                                                'qElemNumber': 913,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q1',
                                                'qNum': 1,
                                                'qElemNumber': 1,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '42792',
                                                'qNum': 42792,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO914',
                                                'qNum': 'NaN',
                                                'qElemNumber': 913,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q3',
                                                'qNum': 3,
                                                'qElemNumber': 2,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '7816',
                                                'qNum': 7816,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO914',
                                                'qNum': 'NaN',
                                                'qElemNumber': 913,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q4',
                                                'qNum': 4,
                                                'qElemNumber': 0,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '65784',
                                                'qNum': 65784,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO918',
                                                'qNum': 'NaN',
                                                'qElemNumber': 917,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q1',
                                                'qNum': 1,
                                                'qElemNumber': 1,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '35384',
                                                'qNum': 35384,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO918',
                                                'qNum': 'NaN',
                                                'qElemNumber': 917,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q3',
                                                'qNum': 3,
                                                'qElemNumber': 2,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '15624',
                                                'qNum': 15624,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO918',
                                                'qNum': 'NaN',
                                                'qElemNumber': 917,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q4',
                                                'qNum': 4,
                                                'qElemNumber': 0,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '65248',
                                                'qNum': 65248,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO938',
                                                'qNum': 'NaN',
                                                'qElemNumber': 937,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q1',
                                                'qNum': 1,
                                                'qElemNumber': 1,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '33344',
                                                'qNum': 33344,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO938',
                                                'qNum': 'NaN',
                                                'qElemNumber': 937,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q3',
                                                'qNum': 3,
                                                'qElemNumber': 2,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '16416',
                                                'qNum': 16416,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO938',
                                                'qNum': 'NaN',
                                                'qElemNumber': 937,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q4',
                                                'qNum': 4,
                                                'qElemNumber': 0,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '64872',
                                                'qNum': 64872,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO968',
                                                'qNum': 'NaN',
                                                'qElemNumber': 967,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q1',
                                                'qNum': 1,
                                                'qElemNumber': 1,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '56376',
                                                'qNum': 56376,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO968',
                                                'qNum': 'NaN',
                                                'qElemNumber': 967,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q3',
                                                'qNum': 3,
                                                'qElemNumber': 2,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '10136',
                                                'qNum': 10136,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO968',
                                                'qNum': 'NaN',
                                                'qElemNumber': 967,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q4',
                                                'qNum': 4,
                                                'qElemNumber': 0,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '50512',
                                                'qNum': 50512,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO969',
                                                'qNum': 'NaN',
                                                'qElemNumber': 968,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q1',
                                                'qNum': 1,
                                                'qElemNumber': 1,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '46720',
                                                'qNum': 46720,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO969',
                                                'qNum': 'NaN',
                                                'qElemNumber': 968,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q3',
                                                'qNum': 3,
                                                'qElemNumber': 2,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '16960',
                                                'qNum': 16960,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO969',
                                                'qNum': 'NaN',
                                                'qElemNumber': 968,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q4',
                                                'qNum': 4,
                                                'qElemNumber': 0,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '65080',
                                                'qNum': 65080,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO970',
                                                'qNum': 'NaN',
                                                'qElemNumber': 969,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q1',
                                                'qNum': 1,
                                                'qElemNumber': 1,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '45048',
                                                'qNum': 45048,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO970',
                                                'qNum': 'NaN',
                                                'qElemNumber': 969,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q3',
                                                'qNum': 3,
                                                'qElemNumber': 2,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '16600',
                                                'qNum': 16600,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO970',
                                                'qNum': 'NaN',
                                                'qElemNumber': 969,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q4',
                                                'qNum': 4,
                                                'qElemNumber': 0,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '59200',
                                                'qNum': 59200,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO975',
                                                'qNum': 'NaN',
                                                'qElemNumber': 974,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q1',
                                                'qNum': 1,
                                                'qElemNumber': 1,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '54552',
                                                'qNum': 54552,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO975',
                                                'qNum': 'NaN',
                                                'qElemNumber': 974,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q3',
                                                'qNum': 3,
                                                'qElemNumber': 2,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '17064',
                                                'qNum': 17064,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ],
                                        [
                                            {
                                                'qText': 'PART_NO975',
                                                'qNum': 'NaN',
                                                'qElemNumber': 974,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': 'Q4',
                                                'qNum': 4,
                                                'qElemNumber': 0,
                                                'qState': 'O'
                                            },
                                            {
                                                'qText': '57416',
                                                'qNum': 57416,
                                                'qElemNumber': 0,
                                                'qState': 'L'
                                            }
                                        ]
                                    ],
                                    'qTails': [
                                        {
                                            'qUp': 0,
                                            'qDown': 0
                                        },
                                        {
                                            'qUp': 0,
                                            'qDown': 0
                                        }
                                    ],
                                    'qArea': {
                                        'qLeft': 0,
                                        'qTop': 0,
                                        'qWidth': 3,
                                        'qHeight': 21
                                    }
                                }
                            ],
                            'qPivotDataPages': [],
                            'qStackedDataPages': [],
                            'qMode': 'S',
                            'qNoOfLeftDims': -1,
                            'qTreeNodesOnDim': [],
                            'qColumnOrder': []
                        },
                        'showTitles': true,
                        'title': 'Radar chart',
                        'subtitle': '',
                        'footnote': '',
                        'showDetails': false,
                        'strokeStyle': false,
                        'range': true,
                        'maxValue': 1,
                        'minValue': 0,
                        'showLegend': true,
                        'ColorSchema': [
                            '#332288',
                            '#6699CC',
                            '#88CCEE',
                            '#44AA99',
                            '#117733',
                            '#999933',
                            '#DDCC77',
                            '#661100',
                            '#CC6677',
                            '#AA4466',
                            '#882255',
                            '#AA4499'
                        ],
                        'visualization': 'qlik-radar-chart',
                        'version': '0.36.0',
                        'extensionMeta': {
                            'translationKey': '',
                            'icon': 'auto-layout',
                            'iconChar': 'puzzle',
                            'isLibraryItem': true,
                            'visible': true,
                            'name': 'Radar chart',
                            'description': 'A two-dimensional chart using radial axes to show the scoring of a measure in one dimension over another.\nVersion: 0.36.0',
                            'template': 'qlik-radar-chart',
                            'iconPath': 'M14.5,9 L13,9 L13,3.3 C13,3.1 12.9,3 12.7,3 L8,3 L8,1.5 C8,0.7 7.3,0 6.5,0 C5.7,0 5,0.7 5,1.5 L5,3 L0.3,3 C0.1,3 0,3.1 0,3.3 L0,9 L1.5,9 C2.3,9 3,9.7 3,10.5 C3,11.3 2.3,12 1.5,12 L0,12 L0,15.7 C0,15.9 0.1,16 0.3,16 L5,16 L5,14.5 C5,13.7 5.7,13 6.5,13 C7.3,13 8,13.7 8,14.5 L8,16 L12.7,16 C12.9,16 13,15.9 13,15.7 L13,12 L14.5,12 C15.3,12 16,11.3 16,10.5 C16,9.7 15.3,9 14.5,9 Z',
                            'isThirdParty': true,
                            'author': 'Brian Booden <brianbooden@users.noreply.github.com>, VizMatt <matthieu.burel@gmail.com>',
                            'bundle': {
                                'id': 'qlik-visualization-bundle',
                                'name': 'Qlik Visualization bundle',
                                'description': 'This is a set of supported objects that expands the visualization capabilities of Qlik Sense. These can be used in addition to the objects found under \'Charts\'. For support conditions and limitations, see the documentation.'
                            },
                            'dependencies': {
                                'qlik-sense': '>=5.5.x'
                            },
                            'homepage': '',
                            'installer': 'QlikExtensionBundler',
                            'keywords': 'qlik-sense, visualization',
                            'license': 'MIT',
                            'preview': 'qlik-radar-chart.png',
                            'repository': 'https://github.com/qlik-oss/D3ImprovedRadarChart',
                            'type': 'visualization',
                            'version': '0.36.0',
                            'previewIconURL': 'https://89.208.84.67/extensions/qlik-radar-chart/qlik-radar-chart.png'
                        }
                    }
                }
            }
            , null, 2);

        this.importQlikJsonFile();
    }

    importQlikJsonFile() {
        this.file = '';

        if (this.json) {
            try {
                this.file = Object.assign({}, JSON.parse(this.json));
                this.$scope.$applyAsync();
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
                    cmp-class="radarChart1" 
                    cmp-file="$ctrl.file"
                    cmp-options="$ctrl.chartOptions"
                ></qlik-radar-chart>  
            </div>
        `,
        controller: AppRootController
    });
