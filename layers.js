var wms_layers = [];

var format_BoroughBoundaries_0 = new ol.format.GeoJSON();
var features_BoroughBoundaries_0 = format_BoroughBoundaries_0.readFeatures(json_BoroughBoundaries_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoroughBoundaries_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoroughBoundaries_0.addFeatures(features_BoroughBoundaries_0);
var lyr_BoroughBoundaries_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoroughBoundaries_0, 
                style: style_BoroughBoundaries_0,
                popuplayertitle: "BoroughBoundaries",
                interactive: false,
                title: '<img src="styles/legend/BoroughBoundaries_0.png" /> BoroughBoundaries'
            });
var format_Neighborhood_1 = new ol.format.GeoJSON();
var features_Neighborhood_1 = format_Neighborhood_1.readFeatures(json_Neighborhood_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neighborhood_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neighborhood_1.addFeatures(features_Neighborhood_1);
var lyr_Neighborhood_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neighborhood_1, 
                style: style_Neighborhood_1,
                popuplayertitle: "Neighborhood",
                interactive: true,
                title: '<img src="styles/legend/Neighborhood_1.png" /> Neighborhood'
            });
var format_NumberofGasLeaks_2 = new ol.format.GeoJSON();
var features_NumberofGasLeaks_2 = format_NumberofGasLeaks_2.readFeatures(json_NumberofGasLeaks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NumberofGasLeaks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NumberofGasLeaks_2.addFeatures(features_NumberofGasLeaks_2);
var lyr_NumberofGasLeaks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NumberofGasLeaks_2, 
                style: style_NumberofGasLeaks_2,
                popuplayertitle: "Number of Gas Leaks",
                interactive: true,
    title: 'Number of Gas Leaks<br />\
    <img src="styles/legend/NumberofGasLeaks_2_0.png" /> 2 - 61<br />\
    <img src="styles/legend/NumberofGasLeaks_2_1.png" /> 61 - 118<br />\
    <img src="styles/legend/NumberofGasLeaks_2_2.png" /> 118 - 188<br />\
    <img src="styles/legend/NumberofGasLeaks_2_3.png" /> 188 - 294<br />\
    <img src="styles/legend/NumberofGasLeaks_2_4.png" /> 294 - 795<br />'
        });

lyr_BoroughBoundaries_0.setVisible(true);lyr_Neighborhood_1.setVisible(true);lyr_NumberofGasLeaks_2.setVisible(true);
var layersList = [lyr_BoroughBoundaries_0,lyr_Neighborhood_1,lyr_NumberofGasLeaks_2];
lyr_BoroughBoundaries_0.set('fieldAliases', {'BoroCode': 'BoroCode', 'BoroName': 'BoroName', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Demonym': 'Demonym', });
lyr_Neighborhood_1.set('fieldAliases', {'BoroCode': 'BoroCode', 'BoroName': 'BoroName', 'CountyFIPS': 'CountyFIPS', 'NTA2020': 'NTA2020', 'NTAName': 'NTAName', 'NTAAbbrev': 'NTAAbbrev', 'NTAType': 'NTAType', 'CDTA2020': 'CDTA2020', 'CDTAName': 'CDTAName', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_NumberofGasLeaks_2.set('fieldAliases', {'modzcta': 'modzcta', 'label': 'label', 'zcta': 'zcta', 'pop_est': 'pop_est', 'ZIP_Code_Counts_count': 'ZIP_Code_Counts_count', 'ZIP_Code_Counts_gas_leaks': 'ZIP_Code_Counts_gas_leaks', });
lyr_BoroughBoundaries_0.set('fieldImages', {'BoroCode': '', 'BoroName': '', 'Shape_Leng': '', 'Shape_Area': '', 'Demonym': '', });
lyr_Neighborhood_1.set('fieldImages', {'BoroCode': 'Range', 'BoroName': 'TextEdit', 'CountyFIPS': 'TextEdit', 'NTA2020': 'TextEdit', 'NTAName': 'TextEdit', 'NTAAbbrev': 'TextEdit', 'NTAType': 'TextEdit', 'CDTA2020': 'TextEdit', 'CDTAName': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_NumberofGasLeaks_2.set('fieldImages', {'modzcta': 'TextEdit', 'label': 'TextEdit', 'zcta': 'TextEdit', 'pop_est': 'TextEdit', 'ZIP_Code_Counts_count': 'TextEdit', 'ZIP_Code_Counts_gas_leaks': 'Range', });
lyr_BoroughBoundaries_0.set('fieldLabels', {'BoroCode': 'no label', 'BoroName': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Demonym': 'no label', });
lyr_Neighborhood_1.set('fieldLabels', {'BoroCode': 'hidden field', 'BoroName': 'hidden field', 'CountyFIPS': 'hidden field', 'NTA2020': 'hidden field', 'NTAName': 'no label', 'NTAAbbrev': 'hidden field', 'NTAType': 'hidden field', 'CDTA2020': 'hidden field', 'CDTAName': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_NumberofGasLeaks_2.set('fieldLabels', {'modzcta': 'hidden field', 'label': 'hidden field', 'zcta': 'hidden field', 'pop_est': 'hidden field', 'ZIP_Code_Counts_count': 'hidden field', 'ZIP_Code_Counts_gas_leaks': 'no label', });
lyr_NumberofGasLeaks_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});