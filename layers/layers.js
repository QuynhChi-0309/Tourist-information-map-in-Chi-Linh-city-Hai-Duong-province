var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_aphn_1 = new ol.format.GeoJSON();
var features_aphn_1 = format_aphn_1.readFeatures(json_aphn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aphn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aphn_1.addFeatures(features_aphn_1);
var lyr_aphn_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aphn_1, 
                style: style_aphn_1,
                popuplayertitle: 'Địa phận',
                interactive: true,
                title: '<img src="styles/legend/aphn_1.png" /> Địa phận'
            });
var format_Nhhng_2 = new ol.format.GeoJSON();
var features_Nhhng_2 = format_Nhhng_2.readFeatures(json_Nhhng_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nhhng_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nhhng_2.addFeatures(features_Nhhng_2);
var lyr_Nhhng_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nhhng_2, 
                style: style_Nhhng_2,
                popuplayertitle: 'Nhà hàng',
                interactive: true,
                title: '<img src="styles/legend/Nhhng_2.png" /> Nhà hàng'
            });
var format_NhnghKhchsn_3 = new ol.format.GeoJSON();
var features_NhnghKhchsn_3 = format_NhnghKhchsn_3.readFeatures(json_NhnghKhchsn_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NhnghKhchsn_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NhnghKhchsn_3.addFeatures(features_NhnghKhchsn_3);
var lyr_NhnghKhchsn_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NhnghKhchsn_3, 
                style: style_NhnghKhchsn_3,
                popuplayertitle: 'Nhà nghỉ - Khách sạn',
                interactive: true,
                title: '<img src="styles/legend/NhnghKhchsn_3.png" /> Nhà nghỉ - Khách sạn'
            });
var format_Tinchkhc_4 = new ol.format.GeoJSON();
var features_Tinchkhc_4 = format_Tinchkhc_4.readFeatures(json_Tinchkhc_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tinchkhc_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tinchkhc_4.addFeatures(features_Tinchkhc_4);
var lyr_Tinchkhc_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tinchkhc_4, 
                style: style_Tinchkhc_4,
                popuplayertitle: 'Tiện ích khác',
                interactive: true,
    title: 'Tiện ích khác<br />\
    <img src="styles/legend/Tinchkhc_4_0.png" /> Ngân hàng<br />\
    <img src="styles/legend/Tinchkhc_4_1.png" /> Quầy thuốc<br />\
    <img src="styles/legend/Tinchkhc_4_2.png" /> Siêu thị<br />\
    <img src="styles/legend/Tinchkhc_4_3.png" /> Taxi<br />\
    <img src="styles/legend/Tinchkhc_4_4.png" /> Trạm xăng dầu<br />' });
var format_DitchlchsChLinh_5 = new ol.format.GeoJSON();
var features_DitchlchsChLinh_5 = format_DitchlchsChLinh_5.readFeatures(json_DitchlchsChLinh_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DitchlchsChLinh_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DitchlchsChLinh_5.addFeatures(features_DitchlchsChLinh_5);
var lyr_DitchlchsChLinh_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DitchlchsChLinh_5, 
                style: style_DitchlchsChLinh_5,
                popuplayertitle: 'Di tích lịch sử Chí Linh',
                interactive: true,
                title: '<img src="styles/legend/DitchlchsChLinh_5.png" /> Di tích lịch sử Chí Linh'
            });

lyr_OSMStandard_0.setVisible(true);lyr_aphn_1.setVisible(true);lyr_Nhhng_2.setVisible(true);lyr_NhnghKhchsn_3.setVisible(true);lyr_Tinchkhc_4.setVisible(true);lyr_DitchlchsChLinh_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_aphn_1,lyr_Nhhng_2,lyr_NhnghKhchsn_3,lyr_Tinchkhc_4,lyr_DitchlchsChLinh_5];
lyr_aphn_1.set('fieldAliases', {'FID': 'FID', 'Ten': 'Xã - Phường', });
lyr_Nhhng_2.set('fieldAliases', {'STT': 'STT', 'Vido': 'Vido', 'Kinhdo': 'Kinhdo', 'ID_DVKD': 'ID_DVKD', 'Ten_DVKD': 'Tên đơn vị kinh doanh', 'Dia_chi': 'Địa chỉ', 'Hinh_thuc_': 'Hinh_thuc_', 'Ten_nganh_': 'Ten_nganh_', 'Phan_loai': 'Phân loại', 'SDT': 'Số điện thoại', });
lyr_NhnghKhchsn_3.set('fieldAliases', {'STT': 'STT', 'Vido': 'Vido', 'Kinhdo': 'Kinhdo', 'ID_DVKD': 'ID_DVKD', 'Ten_DVKD': 'Tên đơn vị kinh doanh', 'Dia_chi': 'ĐỊa chỉ', 'Hinh_thuc_': 'Hinh_thuc_', 'Ten_nganh_': 'Ten_nganh_', 'Phan_loai': 'Phân loại dịch vụ', 'SDT': 'Số điện loại', });
lyr_Tinchkhc_4.set('fieldAliases', {'STT': 'STT', 'Vido': 'Vido', 'Kinhdo': 'Kinhdo', 'ID_DVKD': 'ID_DVKD', 'Ten_DVKD': 'Tên đơn vị kinh doanh', 'Dia_chi': 'Địa chỉ', 'Hinh_thuc_': 'Hinh_thuc_', 'Ten_nganh_': 'Ten_nganh_', 'Phan_loai': 'Phân loại dịch vụ', 'SDT': 'Số điện thoại', });
lyr_DitchlchsChLinh_5.set('fieldAliases', {'TENDITICH': 'TENDITICH', 'VIDO': 'VIDO', 'KINHDO': 'KINHDO', 'THUOCTINH': 'Xếp hạng', 'photos': 'Hình ảnh', 'Têndi tí': 'Tên di tích', });
lyr_aphn_1.set('fieldImages', {'FID': 'Hidden', 'Ten': 'TextEdit', });
lyr_Nhhng_2.set('fieldImages', {'STT': 'Hidden', 'Vido': 'Hidden', 'Kinhdo': 'Hidden', 'ID_DVKD': 'Hidden', 'Ten_DVKD': 'TextEdit', 'Dia_chi': 'TextEdit', 'Hinh_thuc_': 'Hidden', 'Ten_nganh_': 'Hidden', 'Phan_loai': 'TextEdit', 'SDT': 'TextEdit', });
lyr_NhnghKhchsn_3.set('fieldImages', {'STT': 'Hidden', 'Vido': 'Hidden', 'Kinhdo': 'Hidden', 'ID_DVKD': 'Hidden', 'Ten_DVKD': 'TextEdit', 'Dia_chi': 'TextEdit', 'Hinh_thuc_': 'Hidden', 'Ten_nganh_': 'Hidden', 'Phan_loai': 'TextEdit', 'SDT': 'TextEdit', });
lyr_Tinchkhc_4.set('fieldImages', {'STT': 'Hidden', 'Vido': 'Hidden', 'Kinhdo': 'Hidden', 'ID_DVKD': 'Hidden', 'Ten_DVKD': 'TextEdit', 'Dia_chi': 'TextEdit', 'Hinh_thuc_': 'Hidden', 'Ten_nganh_': 'Hidden', 'Phan_loai': 'TextEdit', 'SDT': 'TextEdit', });
lyr_DitchlchsChLinh_5.set('fieldImages', {'TENDITICH': 'Hidden', 'VIDO': 'Hidden', 'KINHDO': 'Hidden', 'THUOCTINH': 'TextEdit', 'photos': 'ExternalResource', 'Têndi tí': 'TextEdit', });
lyr_aphn_1.set('fieldLabels', {'Ten': 'inline label - always visible', });
lyr_Nhhng_2.set('fieldLabels', {'Ten_DVKD': 'inline label - always visible', 'Dia_chi': 'inline label - always visible', 'Phan_loai': 'inline label - always visible', 'SDT': 'inline label - always visible', });
lyr_NhnghKhchsn_3.set('fieldLabels', {'Ten_DVKD': 'inline label - always visible', 'Dia_chi': 'inline label - always visible', 'Phan_loai': 'inline label - always visible', 'SDT': 'inline label - always visible', });
lyr_Tinchkhc_4.set('fieldLabels', {'Ten_DVKD': 'inline label - always visible', 'Dia_chi': 'inline label - always visible', 'Phan_loai': 'inline label - always visible', 'SDT': 'inline label - always visible', });
lyr_DitchlchsChLinh_5.set('fieldLabels', {'THUOCTINH': 'inline label - always visible', 'photos': 'inline label - always visible', 'Têndi tí': 'inline label - always visible', });
lyr_DitchlchsChLinh_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});