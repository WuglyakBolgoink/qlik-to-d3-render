export interface QInfo {
    qId: string;
    qType: string;
}

export interface QMeta {
    privileges: string[];
}

export interface QSelectionInfo {
}

export interface QSize {
    qcx: number;
    qcy: number;
}

export interface QStateCounts {
    qLocked: number;
    qSelected: number;
    qOption: number;
    qDeselected: number;
    qAlternative: number;
    qExcluded: number;
    qSelectedExcluded: number;
    qLockedExcluded: number;
}

export interface QNumFormat {
    qType: string;
    qnDec: number;
    qUseThou: number;
}

export interface QCardinalities {
    qCardinal: number;
    qHypercubeCardinal: number;
    qAllValuesCardinal: number;
}

export interface Coloring {
    changeHash: string;
}

export interface QDimensionInfo {
    qFallbackTitle: string;
    qApprMaxGlyphCount: number;
    qCardinal: number;
    qSortIndicator: string;
    qGroupFallbackTitles: string[];
    qGroupPos: number;
    qStateCounts: QStateCounts;
    qTags: string[];
    qDimensionType: string;
    qGrouping: string;
    qNumFormat: QNumFormat;
    qIsAutoFormat: boolean;
    qGroupFieldDefs: string[];
    qMin: any;
    qMax: any;
    qAttrExprInfo: any[];
    qAttrDimInfo: any[];
    qCardinalities: QCardinalities;
    qLibraryId: string;
    title: string;
    coloring: Coloring;
    autoSort: boolean;
    cId: string;
    othersLabel: string;
    qContinuousAxes?: boolean;
    qIsCyclic?: boolean;
    qDerivedField?: boolean;
}

export interface QNumFormat2 {
    qType: string;
    qnDec: number;
    qUseThou: number;
    qFmt: string;
    qDec: string;
}

export interface Coloring2 {
}

export interface QMeasureInfo {
    qFallbackTitle: string;
    qApprMaxGlyphCount: number;
    qCardinal: number;
    qSortIndicator: string;
    qNumFormat: QNumFormat2;
    qMin: number;
    qMax: number;
    qIsAutoFormat: boolean;
    qAttrExprInfo: any[];
    qAttrDimInfo: any[];
    qLibraryId: string;
    qTrendLines: any[];
    coloring: Coloring2;
    autoSort: boolean;
    cId: string;
    numFormatFromTemplate: boolean;
}

export interface QGrandTotalRow {
    qText: string;
    qNum: number;
    qElemNumber: number;
    qState: string;
    qIsTotalCell: boolean;
}

export interface QTail {
    qUp: number;
    qDown: number;
}

export interface QArea {
    qLeft: number;
    qTop: number;
    qWidth: number;
    qHeight: number;
}

export interface QDataPage {
    qMatrix: any[][];
    qTails: QTail[];
    qArea: QArea;
}

export interface QHyperCube {
    qSize: QSize;
    qDimensionInfo: QDimensionInfo[];
    qMeasureInfo: QMeasureInfo[];
    qEffectiveInterColumnSortOrder: number[];
    qGrandTotalRow: QGrandTotalRow[];
    qDataPages: QDataPage[];
    qPivotDataPages: any[];
    qStackedDataPages: any[];
    qMode: string;
    qNoOfLeftDims: number;
    qTreeNodesOnDim: any[];
    qColumnOrder: any[];
}

export interface Bundle {
    id: string;
    name: string;
    description: string;
}

export interface Dependencies {
    'qlik-sense': string;
}

export interface ExtensionMeta {
    translationKey: string;
    icon: string;
    iconChar: string;
    isLibraryItem: boolean;
    visible: boolean;
    name: string;
    description: string;
    template: string;
    iconPath: string;
    isThirdParty: boolean;
    author: string;
    bundle: Bundle;
    dependencies: Dependencies;
    homepage: string;
    installer: string;
    keywords: string;
    license: string;
    preview: string;
    repository: string;
    type: string;
    version: string;
    previewIconURL: string;
}

export interface QLayout {
    qInfo: QInfo;
    qMeta: QMeta;
    qSelectionInfo: QSelectionInfo;
    qHyperCube: QHyperCube;
    showTitles: boolean;
    title: string;
    subtitle: string;
    footnote: string;
    showDetails: boolean;
    strokeStyle: boolean;
    range: boolean;
    maxValue: number;
    minValue: number;
    showLegend: boolean;
    ColorSchema: string[];
    visualization: string;
    version: string;
    extensionMeta: ExtensionMeta;
}

export interface Result {
    qLayout: QLayout;
}

export interface Qlik {
    jsonrpc: string;
    id: number;
    delta: boolean;
    result: Result;
}
