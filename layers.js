var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Provincia_1 = new ol.format.GeoJSON();
var features_Provincia_1 = format_Provincia_1.readFeatures(json_Provincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincia_1.addFeatures(features_Provincia_1);
var lyr_Provincia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provincia_1, 
                style: style_Provincia_1,
                popuplayertitle: 'Provincia',
                interactive: true,
                title: '<img src="styles/legend/Provincia_1.png" /> Provincia'
            });
var format_Distrito_2 = new ol.format.GeoJSON();
var features_Distrito_2 = format_Distrito_2.readFeatures(json_Distrito_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distrito_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distrito_2.addFeatures(features_Distrito_2);
var lyr_Distrito_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distrito_2, 
                style: style_Distrito_2,
                popuplayertitle: 'Distrito',
                interactive: true,
                title: '<img src="styles/legend/Distrito_2.png" /> Distrito'
            });
var format_Distritos_Mariscal_Nietodistrito_3 = new ol.format.GeoJSON();
var features_Distritos_Mariscal_Nietodistrito_3 = format_Distritos_Mariscal_Nietodistrito_3.readFeatures(json_Distritos_Mariscal_Nietodistrito_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distritos_Mariscal_Nietodistrito_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distritos_Mariscal_Nietodistrito_3.addFeatures(features_Distritos_Mariscal_Nietodistrito_3);
var lyr_Distritos_Mariscal_Nietodistrito_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distritos_Mariscal_Nietodistrito_3, 
                style: style_Distritos_Mariscal_Nietodistrito_3,
                popuplayertitle: 'Distritos_Mariscal_Nieto — distrito',
                interactive: true,
    title: 'Distritos_Mariscal_Nieto — distrito<br />\
    <img src="styles/legend/Distritos_Mariscal_Nietodistrito_3_0.png" /> <br />\
    <img src="styles/legend/Distritos_Mariscal_Nietodistrito_3_1.png" /> CARUMAS<br />\
    <img src="styles/legend/Distritos_Mariscal_Nietodistrito_3_2.png" /> CUCHUMBAYA<br />\
    <img src="styles/legend/Distritos_Mariscal_Nietodistrito_3_3.png" /> MOQUEGUA<br />\
    <img src="styles/legend/Distritos_Mariscal_Nietodistrito_3_4.png" /> SAMEGUA<br />\
    <img src="styles/legend/Distritos_Mariscal_Nietodistrito_3_5.png" /> SAN CRISTOBAL<br />\
    <img src="styles/legend/Distritos_Mariscal_Nietodistrito_3_6.png" /> TORATA<br />' });
var format_listado_iiee_moquegua_4 = new ol.format.GeoJSON();
var features_listado_iiee_moquegua_4 = format_listado_iiee_moquegua_4.readFeatures(json_listado_iiee_moquegua_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_listado_iiee_moquegua_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_listado_iiee_moquegua_4.addFeatures(features_listado_iiee_moquegua_4);
var lyr_listado_iiee_moquegua_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_listado_iiee_moquegua_4, 
                style: style_listado_iiee_moquegua_4,
                popuplayertitle: 'listado_iiee _ moquegua',
                interactive: true,
                title: '<img src="styles/legend/listado_iiee_moquegua_4.png" /> listado_iiee _ moquegua'
            });
var format_centros_educativos_mariscal_nieto_5 = new ol.format.GeoJSON();
var features_centros_educativos_mariscal_nieto_5 = format_centros_educativos_mariscal_nieto_5.readFeatures(json_centros_educativos_mariscal_nieto_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centros_educativos_mariscal_nieto_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centros_educativos_mariscal_nieto_5.addFeatures(features_centros_educativos_mariscal_nieto_5);
var lyr_centros_educativos_mariscal_nieto_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_centros_educativos_mariscal_nieto_5, 
                style: style_centros_educativos_mariscal_nieto_5,
                popuplayertitle: 'centros_educativos_mariscal_nieto',
                interactive: true,
    title: 'centros_educativos_mariscal_nieto<br />\
    <img src="styles/legend/centros_educativos_mariscal_nieto_5_0.png" /> Básica Alternativa - Avanzado<br />\
    <img src="styles/legend/centros_educativos_mariscal_nieto_5_1.png" /> Básica Alternativa - Inicial e Intermedio<br />\
    <img src="styles/legend/centros_educativos_mariscal_nieto_5_2.png" /> Básica Especial - Inicial<br />\
    <img src="styles/legend/centros_educativos_mariscal_nieto_5_3.png" /> Básica Especial - Primaria<br />\
    <img src="styles/legend/centros_educativos_mariscal_nieto_5_4.png" /> Básica Especial - PRITE<br />\
    <img src="styles/legend/centros_educativos_mariscal_nieto_5_5.png" /> Escuela Superior Pedagógica<br />\
    <img src="styles/legend/centros_educativos_mariscal_nieto_5_6.png" /> Inicial - Cuna<br />\
    <img src="styles/legend/centros_educativos_mariscal_nieto_5_7.png" /> Inicial - Cuna Jardín<br />\
    <img src="styles/legend/centros_educativos_mariscal_nieto_5_8.png" /> Inicial - Jardín<br />\
    <img src="styles/legend/centros_educativos_mariscal_nieto_5_9.png" /> Inicial No Escolarizado<br />\
    <img src="styles/legend/centros_educativos_mariscal_nieto_5_10.png" /> Instancia de Apoyo<br />\
    <img src="styles/legend/centros_educativos_mariscal_nieto_5_11.png" /> Primaria<br />\
    <img src="styles/legend/centros_educativos_mariscal_nieto_5_12.png" /> Secundaria<br />\
    <img src="styles/legend/centros_educativos_mariscal_nieto_5_13.png" /> Superior Tecnológica<br />\
    <img src="styles/legend/centros_educativos_mariscal_nieto_5_14.png" /> Técnico Productiva - CETPRO<br />\
    <img src="styles/legend/centros_educativos_mariscal_nieto_5_15.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Provincia_1.setVisible(true);lyr_Distrito_2.setVisible(true);lyr_Distritos_Mariscal_Nietodistrito_3.setVisible(true);lyr_listado_iiee_moquegua_4.setVisible(true);lyr_centros_educativos_mariscal_nieto_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Provincia_1,lyr_Distrito_2,lyr_Distritos_Mariscal_Nietodistrito_3,lyr_listado_iiee_moquegua_4,lyr_centros_educativos_mariscal_nieto_5];
lyr_Provincia_1.set('fieldAliases', {'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'NOMBPROV', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'ha', });
lyr_Distrito_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'IDDIST': 'IDDIST', 'IDDPTO': 'IDDPTO', 'IDPROV': 'IDPROV', 'NOMBDIST': 'NOMBDIST', 'NOMBPROV': 'NOMBPROV', 'NOMBDEP': 'NOMBDEP', 'DCTO': 'DCTO', 'LEY': 'LEY', 'FECHA': 'FECHA', 'NOM_CAP': 'NOM_CAP', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AR_1': 'SHAPE_AR_1', 'AREA_MINAM': 'AREA_MINAM', });
lyr_Distritos_Mariscal_Nietodistrito_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'IDDIST': 'IDDIST', 'IDDPTO': 'IDDPTO', 'IDPROV': 'IDPROV', 'NOMBDIST': 'NOMBDIST', 'NOMBPROV': 'NOMBPROV', 'NOMBDEP': 'NOMBDEP', 'DCTO': 'DCTO', 'LEY': 'LEY', 'FECHA': 'FECHA', 'NOM_CAP': 'NOM_CAP', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AR_1': 'SHAPE_AR_1', 'AREA_MINAM': 'AREA_MINAM', 'URL': 'URL', 'Gobierno Regional': 'Gobierno Regional', });
lyr_listado_iiee_moquegua_4.set('fieldAliases', {'Código Modular': 'Código Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre de SS.EE.', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'Código Centro Poblado': 'Código Centro Poblado', 'Código Local': 'Código Local', 'Dirección': 'Dirección', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_centros_educativos_mariscal_nieto_5.set('fieldAliases', {'fid': 'fid', 'Código Modular': 'Código Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre de SS.EE.', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'Código Centro Poblado': 'Código Centro Poblado', 'Código Local': 'Código Local', 'Dirección': 'Dirección', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_Provincia_1.set('fieldImages', {'COUNT': '', 'FIRST_IDPR': '', 'NOMBPROV': '', 'FIRST_NOMB': '', 'LAST_DCTO': '', 'LAST_LEY': '', 'FIRST_FECH': '', 'LAST_FECHA': '', 'MIN_SHAPE_': '', 'ha': '', });
lyr_Distrito_2.set('fieldImages', {'OBJECTID': '', 'IDDIST': '', 'IDDPTO': '', 'IDPROV': '', 'NOMBDIST': '', 'NOMBPROV': '', 'NOMBDEP': '', 'DCTO': '', 'LEY': '', 'FECHA': '', 'NOM_CAP': '', 'SHAPE_LENG': '', 'SHAPE_AREA': '', 'SHAPE_LE_1': '', 'SHAPE_AR_1': '', 'AREA_MINAM': '', });
lyr_Distritos_Mariscal_Nietodistrito_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'IDDIST': 'TextEdit', 'IDDPTO': 'TextEdit', 'IDPROV': 'TextEdit', 'NOMBDIST': 'TextEdit', 'NOMBPROV': 'TextEdit', 'NOMBDEP': 'TextEdit', 'DCTO': 'TextEdit', 'LEY': 'TextEdit', 'FECHA': 'TextEdit', 'NOM_CAP': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'SHAPE_AR_1': 'TextEdit', 'AREA_MINAM': 'TextEdit', 'URL': '', 'Gobierno Regional': '', });
lyr_listado_iiee_moquegua_4.set('fieldImages', {'Código Modular': '', 'Anexo': '', 'Nombre de SS.EE.': '', 'Ubigeo': '', 'Departamento': '', 'Provincia': '', 'Distrito': '', 'Código DRE/UGEL': '', 'DRE / UGEL': '', 'Centro Poblado': '', 'Código Centro Poblado': '', 'Código Local': '', 'Dirección': '', 'Nivel / Modalidad': '', 'Gestion / Dependencia': '', 'Latitud': '', 'Longitud': '', 'Altitud': '', 'Fuente de coordenadas': '', });
lyr_centros_educativos_mariscal_nieto_5.set('fieldImages', {'fid': 'TextEdit', 'Código Modular': 'Range', 'Anexo': 'CheckBox', 'Nombre de SS.EE.': 'TextEdit', 'Ubigeo': 'Range', 'Departamento': 'TextEdit', 'Provincia': 'TextEdit', 'Distrito': 'TextEdit', 'Código DRE/UGEL': 'Range', 'DRE / UGEL': 'TextEdit', 'Centro Poblado': 'TextEdit', 'Código Centro Poblado': 'Range', 'Código Local': 'Range', 'Dirección': 'TextEdit', 'Nivel / Modalidad': 'TextEdit', 'Gestion / Dependencia': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Altitud': 'Range', 'Fuente de coordenadas': 'TextEdit', });
lyr_Provincia_1.set('fieldLabels', {'COUNT': 'no label', 'FIRST_IDPR': 'no label', 'NOMBPROV': 'no label', 'FIRST_NOMB': 'no label', 'LAST_DCTO': 'no label', 'LAST_LEY': 'no label', 'FIRST_FECH': 'no label', 'LAST_FECHA': 'no label', 'MIN_SHAPE_': 'no label', 'ha': 'no label', });
lyr_Distrito_2.set('fieldLabels', {'OBJECTID': 'no label', 'IDDIST': 'no label', 'IDDPTO': 'no label', 'IDPROV': 'no label', 'NOMBDIST': 'no label', 'NOMBPROV': 'no label', 'NOMBDEP': 'no label', 'DCTO': 'no label', 'LEY': 'no label', 'FECHA': 'no label', 'NOM_CAP': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LE_1': 'no label', 'SHAPE_AR_1': 'no label', 'AREA_MINAM': 'no label', });
lyr_Distritos_Mariscal_Nietodistrito_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'IDDIST': 'no label', 'IDDPTO': 'no label', 'IDPROV': 'no label', 'NOMBDIST': 'no label', 'NOMBPROV': 'no label', 'NOMBDEP': 'no label', 'DCTO': 'no label', 'LEY': 'no label', 'FECHA': 'no label', 'NOM_CAP': 'header label - always visible', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LE_1': 'no label', 'SHAPE_AR_1': 'no label', 'AREA_MINAM': 'no label', 'URL': 'inline label - always visible', 'Gobierno Regional': 'no label', });
lyr_listado_iiee_moquegua_4.set('fieldLabels', {'Código Modular': 'no label', 'Anexo': 'no label', 'Nombre de SS.EE.': 'no label', 'Ubigeo': 'no label', 'Departamento': 'no label', 'Provincia': 'no label', 'Distrito': 'no label', 'Código DRE/UGEL': 'no label', 'DRE / UGEL': 'no label', 'Centro Poblado': 'no label', 'Código Centro Poblado': 'no label', 'Código Local': 'no label', 'Dirección': 'no label', 'Nivel / Modalidad': 'no label', 'Gestion / Dependencia': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Altitud': 'no label', 'Fuente de coordenadas': 'no label', });
lyr_centros_educativos_mariscal_nieto_5.set('fieldLabels', {'fid': 'no label', 'Código Modular': 'no label', 'Anexo': 'no label', 'Nombre de SS.EE.': 'hidden field', 'Ubigeo': 'no label', 'Departamento': 'no label', 'Provincia': 'no label', 'Distrito': 'no label', 'Código DRE/UGEL': 'no label', 'DRE / UGEL': 'no label', 'Centro Poblado': 'no label', 'Código Centro Poblado': 'no label', 'Código Local': 'no label', 'Dirección': 'inline label - always visible', 'Nivel / Modalidad': 'inline label - visible with data', 'Gestion / Dependencia': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Altitud': 'no label', 'Fuente de coordenadas': 'no label', });
lyr_centros_educativos_mariscal_nieto_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});