var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_District_1 = new ol.format.GeoJSON();
var features_District_1 = format_District_1.readFeatures(json_District_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_1.addFeatures(features_District_1);
var lyr_District_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_District_1, 
                style: style_District_1,
                interactive: true,
                title: '<img src="styles/legend/District_1.png" /> District'
            });
var format_Galle_Places_2 = new ol.format.GeoJSON();
var features_Galle_Places_2 = format_Galle_Places_2.readFeatures(json_Galle_Places_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Galle_Places_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Galle_Places_2.addFeatures(features_Galle_Places_2);
var lyr_Galle_Places_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Galle_Places_2, 
                style: style_Galle_Places_2,
                interactive: true,
                title: '<img src="styles/legend/Galle_Places_2.png" /> Galle_Places'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_District_1.setVisible(true);lyr_Galle_Places_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_District_1,lyr_Galle_Places_2];
lyr_District_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'Area': 'Area', 'District': 'District', 'Sinhalese': 'Sinhalese', 'SL_Tamils': 'SL_Tamils', 'Ind_Tamils': 'Ind_Tamils', 'Moor': 'Moor', 'Burgher': 'Burgher', 'Malay': 'Malay', 'Other': 'Other', 'Male': 'Male', 'Female': 'Female', 'Pop1963': 'Pop1963', 'Pop1971': 'Pop1971', 'Pop1981_': 'Pop1981_', 'Pop2001_': 'Pop2001_', 'Pop2012': 'Pop2012', 'Sin_2012': 'Sin_2012', 'In_Tam2012': 'In_Tam2012', 'Sl_Tam2012': 'Sl_Tam2012', 'Mus_2012': 'Mus_2012', 'Other_2012': 'Other_2012', });
lyr_Galle_Places_2.set('fieldAliases', {'Name': 'Name', 'About': 'About', 'About2': 'About2', 'About3': 'About3', 'About4': 'About4', 'About5': 'About5', 'About6': 'About6', 'About7': 'About7', 'About8': 'About8', 'About9': 'About9', 'About10': 'About10', 'About11': 'About11', 'About12': 'About12', 'About13': 'About13', 'About14': 'About14', 'About15': 'About15', });
lyr_District_1.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'Area': 'TextEdit', 'District': 'TextEdit', 'Sinhalese': 'TextEdit', 'SL_Tamils': 'TextEdit', 'Ind_Tamils': 'TextEdit', 'Moor': 'TextEdit', 'Burgher': 'TextEdit', 'Malay': 'TextEdit', 'Other': 'TextEdit', 'Male': 'TextEdit', 'Female': 'TextEdit', 'Pop1963': 'TextEdit', 'Pop1971': 'TextEdit', 'Pop1981_': 'Range', 'Pop2001_': 'Range', 'Pop2012': 'Range', 'Sin_2012': 'Range', 'In_Tam2012': 'Range', 'Sl_Tam2012': 'Range', 'Mus_2012': 'Range', 'Other_2012': 'Range', });
lyr_Galle_Places_2.set('fieldImages', {'Name': 'TextEdit', 'About': 'TextEdit', 'About2': 'TextEdit', 'About3': 'TextEdit', 'About4': 'TextEdit', 'About5': 'TextEdit', 'About6': 'TextEdit', 'About7': 'TextEdit', 'About8': 'TextEdit', 'About9': 'TextEdit', 'About10': 'TextEdit', 'About11': 'TextEdit', 'About12': 'TextEdit', 'About13': 'TextEdit', 'About14': 'TextEdit', 'About15': 'TextEdit', });
lyr_District_1.set('fieldLabels', {'PROVINCE_N': 'no label', 'Area': 'no label', 'District': 'no label', 'Sinhalese': 'no label', 'SL_Tamils': 'no label', 'Ind_Tamils': 'no label', 'Moor': 'no label', 'Burgher': 'no label', 'Malay': 'no label', 'Other': 'no label', 'Male': 'no label', 'Female': 'no label', 'Pop1963': 'no label', 'Pop1971': 'no label', 'Pop1981_': 'no label', 'Pop2001_': 'no label', 'Pop2012': 'no label', 'Sin_2012': 'no label', 'In_Tam2012': 'no label', 'Sl_Tam2012': 'no label', 'Mus_2012': 'no label', 'Other_2012': 'no label', });
lyr_Galle_Places_2.set('fieldLabels', {'Name': 'no label', 'About': 'no label', 'About2': 'no label', 'About3': 'no label', 'About4': 'no label', 'About5': 'no label', 'About6': 'no label', 'About7': 'no label', 'About8': 'no label', 'About9': 'no label', 'About10': 'no label', 'About11': 'no label', 'About12': 'no label', 'About13': 'no label', 'About14': 'no label', 'About15': 'no label', });
lyr_Galle_Places_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});