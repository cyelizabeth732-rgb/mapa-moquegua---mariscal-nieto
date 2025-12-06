var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EF_ELRMDistrito_1 = new ol.format.GeoJSON();
var features_EF_ELRMDistrito_1 = format_EF_ELRMDistrito_1.readFeatures(json_EF_ELRMDistrito_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EF_ELRMDistrito_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EF_ELRMDistrito_1.addFeatures(features_EF_ELRMDistrito_1);
var lyr_EF_ELRMDistrito_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EF_ELRMDistrito_1, 
                style: style_EF_ELRMDistrito_1,
                popuplayertitle: 'EF_ELRM — Distrito',
                interactive: true,
                title: '<img src="styles/legend/EF_ELRMDistrito_1.png" /> EF_ELRM — Distrito'
            });
var format_EF_ELRMProvincia_2 = new ol.format.GeoJSON();
var features_EF_ELRMProvincia_2 = format_EF_ELRMProvincia_2.readFeatures(json_EF_ELRMProvincia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EF_ELRMProvincia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EF_ELRMProvincia_2.addFeatures(features_EF_ELRMProvincia_2);
var lyr_EF_ELRMProvincia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EF_ELRMProvincia_2, 
                style: style_EF_ELRMProvincia_2,
                popuplayertitle: 'EF_ELRM — Provincia',
                interactive: true,
                title: '<img src="styles/legend/EF_ELRMProvincia_2.png" /> EF_ELRM — Provincia'
            });
var format_EF_ELRMDistritos_Mariscal_Nietodistrito_3 = new ol.format.GeoJSON();
var features_EF_ELRMDistritos_Mariscal_Nietodistrito_3 = format_EF_ELRMDistritos_Mariscal_Nietodistrito_3.readFeatures(json_EF_ELRMDistritos_Mariscal_Nietodistrito_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EF_ELRMDistritos_Mariscal_Nietodistrito_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EF_ELRMDistritos_Mariscal_Nietodistrito_3.addFeatures(features_EF_ELRMDistritos_Mariscal_Nietodistrito_3);
var lyr_EF_ELRMDistritos_Mariscal_Nietodistrito_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EF_ELRMDistritos_Mariscal_Nietodistrito_3, 
                style: style_EF_ELRMDistritos_Mariscal_Nietodistrito_3,
                popuplayertitle: 'EF_ELRM — Distritos_Mariscal_Nieto — distrito',
                interactive: true,
    title: 'EF_ELRM — Distritos_Mariscal_Nieto — distrito<br />\
    <img src="styles/legend/EF_ELRMDistritos_Mariscal_Nietodistrito_3_0.png" /> CARUMAS<br />\
    <img src="styles/legend/EF_ELRMDistritos_Mariscal_Nietodistrito_3_1.png" /> CUCHUMBAYA<br />\
    <img src="styles/legend/EF_ELRMDistritos_Mariscal_Nietodistrito_3_2.png" /> MOQUEGUA<br />\
    <img src="styles/legend/EF_ELRMDistritos_Mariscal_Nietodistrito_3_3.png" /> SAMEGUA<br />\
    <img src="styles/legend/EF_ELRMDistritos_Mariscal_Nietodistrito_3_4.png" /> SAN CRISTOBAL<br />\
    <img src="styles/legend/EF_ELRMDistritos_Mariscal_Nietodistrito_3_5.png" /> TORATA<br />\
    <img src="styles/legend/EF_ELRMDistritos_Mariscal_Nietodistrito_3_6.png" /> <br />' });
var format_EF_ELRMcentros_educativos_mariscal_nieto_4 = new ol.format.GeoJSON();
var features_EF_ELRMcentros_educativos_mariscal_nieto_4 = format_EF_ELRMcentros_educativos_mariscal_nieto_4.readFeatures(json_EF_ELRMcentros_educativos_mariscal_nieto_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EF_ELRMcentros_educativos_mariscal_nieto_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EF_ELRMcentros_educativos_mariscal_nieto_4.addFeatures(features_EF_ELRMcentros_educativos_mariscal_nieto_4);
var lyr_EF_ELRMcentros_educativos_mariscal_nieto_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EF_ELRMcentros_educativos_mariscal_nieto_4, 
                style: style_EF_ELRMcentros_educativos_mariscal_nieto_4,
                popuplayertitle: 'EF_ELRM — centros_educativos_mariscal_nieto',
                interactive: true,
    title: 'EF_ELRM — centros_educativos_mariscal_nieto<br />\
    <img src="styles/legend/EF_ELRMcentros_educativos_mariscal_nieto_4_0.png" /> Básica Alternativa - Avanzado<br />\
    <img src="styles/legend/EF_ELRMcentros_educativos_mariscal_nieto_4_1.png" /> Básica Alternativa - Inicial e Intermedio<br />\
    <img src="styles/legend/EF_ELRMcentros_educativos_mariscal_nieto_4_2.png" /> Básica Especial - Inicial<br />\
    <img src="styles/legend/EF_ELRMcentros_educativos_mariscal_nieto_4_3.png" /> Básica Especial - Primaria<br />\
    <img src="styles/legend/EF_ELRMcentros_educativos_mariscal_nieto_4_4.png" /> Básica Especial - PRITE<br />\
    <img src="styles/legend/EF_ELRMcentros_educativos_mariscal_nieto_4_5.png" /> Escuela Superior Pedagógica<br />\
    <img src="styles/legend/EF_ELRMcentros_educativos_mariscal_nieto_4_6.png" /> Inicial - Cuna<br />\
    <img src="styles/legend/EF_ELRMcentros_educativos_mariscal_nieto_4_7.png" /> Inicial - Cuna Jardín<br />\
    <img src="styles/legend/EF_ELRMcentros_educativos_mariscal_nieto_4_8.png" /> Inicial - Jardín<br />\
    <img src="styles/legend/EF_ELRMcentros_educativos_mariscal_nieto_4_9.png" /> Inicial No Escolarizado<br />\
    <img src="styles/legend/EF_ELRMcentros_educativos_mariscal_nieto_4_10.png" /> Instancia de Apoyo<br />\
    <img src="styles/legend/EF_ELRMcentros_educativos_mariscal_nieto_4_11.png" /> Primaria<br />\
    <img src="styles/legend/EF_ELRMcentros_educativos_mariscal_nieto_4_12.png" /> Secundaria<br />\
    <img src="styles/legend/EF_ELRMcentros_educativos_mariscal_nieto_4_13.png" /> Superior Tecnológica<br />\
    <img src="styles/legend/EF_ELRMcentros_educativos_mariscal_nieto_4_14.png" /> Técnico Productiva - CETPRO<br />\
    <img src="styles/legend/EF_ELRMcentros_educativos_mariscal_nieto_4_15.png" /> <br />' });
var format_EF_ELRMlistado_iiee_moquegua_5 = new ol.format.GeoJSON();
var features_EF_ELRMlistado_iiee_moquegua_5 = format_EF_ELRMlistado_iiee_moquegua_5.readFeatures(json_EF_ELRMlistado_iiee_moquegua_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EF_ELRMlistado_iiee_moquegua_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EF_ELRMlistado_iiee_moquegua_5.addFeatures(features_EF_ELRMlistado_iiee_moquegua_5);
var lyr_EF_ELRMlistado_iiee_moquegua_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EF_ELRMlistado_iiee_moquegua_5, 
                style: style_EF_ELRMlistado_iiee_moquegua_5,
                popuplayertitle: 'EF_ELRM — listado_iiee _ moquegua',
                interactive: true,
                title: '<img src="styles/legend/EF_ELRMlistado_iiee_moquegua_5.png" /> EF_ELRM — listado_iiee _ moquegua'
            });

lyr_OSMStandard_0.setVisible(true);lyr_EF_ELRMDistrito_1.setVisible(true);lyr_EF_ELRMProvincia_2.setVisible(true);lyr_EF_ELRMDistritos_Mariscal_Nietodistrito_3.setVisible(true);lyr_EF_ELRMcentros_educativos_mariscal_nieto_4.setVisible(true);lyr_EF_ELRMlistado_iiee_moquegua_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_EF_ELRMDistrito_1,lyr_EF_ELRMProvincia_2,lyr_EF_ELRMDistritos_Mariscal_Nietodistrito_3,lyr_EF_ELRMcentros_educativos_mariscal_nieto_4,lyr_EF_ELRMlistado_iiee_moquegua_5];
lyr_EF_ELRMDistrito_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'IDDIST': 'IDDIST', 'IDDPTO': 'IDDPTO', 'IDPROV': 'IDPROV', 'NOMBDIST': 'NOMBDIST', 'NOMBPROV': 'NOMBPROV', 'NOMBDEP': 'NOMBDEP', 'DCTO': 'DCTO', 'LEY': 'LEY', 'FECHA': 'FECHA', 'NOM_CAP': 'NOM_CAP', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AR_1': 'SHAPE_AR_1', 'AREA_MINAM': 'AREA_MINAM', });
lyr_EF_ELRMProvincia_2.set('fieldAliases', {'fid': 'fid', 'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'NOMBPROV', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'ha', });
lyr_EF_ELRMDistritos_Mariscal_Nietodistrito_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'IDDIST': 'IDDIST', 'IDDPTO': 'IDDPTO', 'IDPROV': 'IDPROV', 'NOMBDIST': 'NOMBDIST', 'NOMBPROV': 'NOMBPROV', 'NOMBDEP': 'NOMBDEP', 'DCTO': 'DCTO', 'LEY': 'LEY', 'FECHA': 'FECHA', 'NOM_CAP': 'NOM_CAP', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AR_1': 'SHAPE_AR_1', 'AREA_MINAM': 'AREA_MINAM', 'URL': 'URL', 'Gobierno Regional': 'Gobierno Regional', });
lyr_EF_ELRMcentros_educativos_mariscal_nieto_4.set('fieldAliases', {'fid': 'fid', 'Código Modular': 'Código Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre de SS.EE.', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'Código Centro Poblado': 'Código Centro Poblado', 'Código Local': 'Código Local', 'Dirección': 'Dirección', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_EF_ELRMlistado_iiee_moquegua_5.set('fieldAliases', {'fid': 'fid', 'Código Modular': 'Código Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre de SS.EE.', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'Código Centro Poblado': 'Código Centro Poblado', 'Código Local': 'Código Local', 'Dirección': 'Dirección', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_EF_ELRMDistrito_1.set('fieldImages', {'fid': '', 'OBJECTID': '', 'IDDIST': '', 'IDDPTO': '', 'IDPROV': '', 'NOMBDIST': '', 'NOMBPROV': '', 'NOMBDEP': '', 'DCTO': '', 'LEY': '', 'FECHA': '', 'NOM_CAP': '', 'SHAPE_LENG': '', 'SHAPE_AREA': '', 'SHAPE_LE_1': '', 'SHAPE_AR_1': '', 'AREA_MINAM': '', });
lyr_EF_ELRMProvincia_2.set('fieldImages', {'fid': '', 'COUNT': '', 'FIRST_IDPR': '', 'NOMBPROV': '', 'FIRST_NOMB': '', 'LAST_DCTO': '', 'LAST_LEY': '', 'FIRST_FECH': '', 'LAST_FECHA': '', 'MIN_SHAPE_': '', 'ha': '', });
lyr_EF_ELRMDistritos_Mariscal_Nietodistrito_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'IDDIST': 'TextEdit', 'IDDPTO': 'TextEdit', 'IDPROV': 'TextEdit', 'NOMBDIST': 'TextEdit', 'NOMBPROV': 'TextEdit', 'NOMBDEP': 'TextEdit', 'DCTO': 'TextEdit', 'LEY': 'TextEdit', 'FECHA': 'TextEdit', 'NOM_CAP': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'SHAPE_AR_1': 'TextEdit', 'AREA_MINAM': 'TextEdit', 'URL': 'TextEdit', 'Gobierno Regional': 'TextEdit', });
lyr_EF_ELRMcentros_educativos_mariscal_nieto_4.set('fieldImages', {'fid': 'TextEdit', 'Código Modular': 'Range', 'Anexo': 'CheckBox', 'Nombre de SS.EE.': 'TextEdit', 'Ubigeo': 'Range', 'Departamento': 'TextEdit', 'Provincia': 'TextEdit', 'Distrito': 'TextEdit', 'Código DRE/UGEL': 'Range', 'DRE / UGEL': 'TextEdit', 'Centro Poblado': 'TextEdit', 'Código Centro Poblado': 'Range', 'Código Local': 'Range', 'Dirección': 'TextEdit', 'Nivel / Modalidad': 'TextEdit', 'Gestion / Dependencia': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Altitud': 'Range', 'Fuente de coordenadas': 'TextEdit', });
lyr_EF_ELRMlistado_iiee_moquegua_5.set('fieldImages', {'fid': '', 'Código Modular': '', 'Anexo': '', 'Nombre de SS.EE.': '', 'Ubigeo': '', 'Departamento': '', 'Provincia': '', 'Distrito': '', 'Código DRE/UGEL': '', 'DRE / UGEL': '', 'Centro Poblado': '', 'Código Centro Poblado': '', 'Código Local': '', 'Dirección': '', 'Nivel / Modalidad': '', 'Gestion / Dependencia': '', 'Latitud': '', 'Longitud': '', 'Altitud': '', 'Fuente de coordenadas': '', });
lyr_EF_ELRMDistrito_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'IDDIST': 'no label', 'IDDPTO': 'no label', 'IDPROV': 'no label', 'NOMBDIST': 'no label', 'NOMBPROV': 'no label', 'NOMBDEP': 'no label', 'DCTO': 'no label', 'LEY': 'no label', 'FECHA': 'no label', 'NOM_CAP': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LE_1': 'no label', 'SHAPE_AR_1': 'no label', 'AREA_MINAM': 'no label', });
lyr_EF_ELRMProvincia_2.set('fieldLabels', {'fid': 'no label', 'COUNT': 'no label', 'FIRST_IDPR': 'no label', 'NOMBPROV': 'no label', 'FIRST_NOMB': 'no label', 'LAST_DCTO': 'no label', 'LAST_LEY': 'no label', 'FIRST_FECH': 'no label', 'LAST_FECHA': 'no label', 'MIN_SHAPE_': 'no label', 'ha': 'no label', });
lyr_EF_ELRMDistritos_Mariscal_Nietodistrito_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'IDDIST': 'no label', 'IDDPTO': 'no label', 'IDPROV': 'no label', 'NOMBDIST': 'header label - always visible', 'NOMBPROV': 'no label', 'NOMBDEP': 'no label', 'DCTO': 'no label', 'LEY': 'no label', 'FECHA': 'no label', 'NOM_CAP': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LE_1': 'no label', 'SHAPE_AR_1': 'no label', 'AREA_MINAM': 'no label', 'URL': 'inline label - always visible', 'Gobierno Regional': 'inline label - always visible', });
lyr_EF_ELRMcentros_educativos_mariscal_nieto_4.set('fieldLabels', {'fid': 'no label', 'Código Modular': 'no label', 'Anexo': 'no label', 'Nombre de SS.EE.': 'no label', 'Ubigeo': 'no label', 'Departamento': 'no label', 'Provincia': 'no label', 'Distrito': 'no label', 'Código DRE/UGEL': 'no label', 'DRE / UGEL': 'no label', 'Centro Poblado': 'no label', 'Código Centro Poblado': 'no label', 'Código Local': 'no label', 'Dirección': 'no label', 'Nivel / Modalidad': 'inline label - always visible', 'Gestion / Dependencia': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Altitud': 'no label', 'Fuente de coordenadas': 'no label', });
lyr_EF_ELRMlistado_iiee_moquegua_5.set('fieldLabels', {'fid': 'no label', 'Código Modular': 'no label', 'Anexo': 'no label', 'Nombre de SS.EE.': 'no label', 'Ubigeo': 'no label', 'Departamento': 'no label', 'Provincia': 'no label', 'Distrito': 'no label', 'Código DRE/UGEL': 'no label', 'DRE / UGEL': 'no label', 'Centro Poblado': 'no label', 'Código Centro Poblado': 'no label', 'Código Local': 'no label', 'Dirección': 'no label', 'Nivel / Modalidad': 'no label', 'Gestion / Dependencia': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Altitud': 'no label', 'Fuente de coordenadas': 'no label', });
lyr_EF_ELRMlistado_iiee_moquegua_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});