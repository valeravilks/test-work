import { Loader } from 'google-maps';

export default function() {
	const loader = new Loader($('#m-map-1').data('key'), {});

	loader.load().then(function(google) {
		let map;
		let markers = [];
		let mapContainer = {};

		$('.m-map').each(function() {
			map = {};
			markers = [];
			mapContainer = $(this);
			const $locations = mapContainer.children('.m-map__marker');
			const mapArgs = {
				zoom: mapContainer.data('zoom'),
				center: new google.maps.LatLng(
					mapContainer.data('lat'),
					mapContainer.data('lng'),
				),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false,
				streetViewControl: false,
				styles: [
					{
						elementType: 'geometry',
						stylers: [
							{
								color: '#f5f5f5',
							},
						],
					},
					{
						elementType: 'labels.icon',
						stylers: [
							{
								visibility: 'off',
							},
						],
					},
					{
						elementType: 'labels.text.fill',
						stylers: [
							{
								color: '#616161',
							},
						],
					},
					{
						elementType: 'labels.text.stroke',
						stylers: [
							{
								color: '#f5f5f5',
							},
						],
					},
					{
						featureType: 'administrative.land_parcel',
						elementType: 'labels.text.fill',
						stylers: [
							{
								color: '#bdbdbd',
							},
						],
					},
					{
						featureType: 'poi',
						elementType: 'geometry',
						stylers: [
							{
								color: '#eeeeee',
							},
						],
					},
					{
						featureType: 'poi',
						elementType: 'labels.text.fill',
						stylers: [
							{
								color: '#757575',
							},
						],
					},
					{
						featureType: 'poi.park',
						elementType: 'geometry',
						stylers: [
							{
								color: '#e5e5e5',
							},
						],
					},
					{
						featureType: 'poi.park',
						elementType: 'labels.text.fill',
						stylers: [
							{
								color: '#9e9e9e',
							},
						],
					},
					{
						featureType: 'road',
						elementType: 'geometry',
						stylers: [
							{
								color: '#ffffff',
							},
						],
					},
					{
						featureType: 'road.arterial',
						elementType: 'labels.text.fill',
						stylers: [
							{
								color: '#757575',
							},
						],
					},
					{
						featureType: 'road.highway',
						elementType: 'geometry',
						stylers: [
							{
								color: '#dadada',
							},
						],
					},
					{
						featureType: 'road.highway',
						elementType: 'labels.text.fill',
						stylers: [
							{
								color: '#616161',
							},
						],
					},
					{
						featureType: 'road.local',
						elementType: 'labels.text.fill',
						stylers: [
							{
								color: '#9e9e9e',
							},
						],
					},
					{
						featureType: 'transit.line',
						elementType: 'geometry',
						stylers: [
							{
								color: '#e5e5e5',
							},
						],
					},
					{
						featureType: 'transit.station',
						elementType: 'geometry',
						stylers: [
							{
								color: '#eeeeee',
							},
						],
					},
					{
						featureType: 'water',
						elementType: 'geometry',
						stylers: [
							{
								color: '#c9c9c9',
							},
						],
					},
					{
						featureType: 'water',
						elementType: 'labels.text.fill',
						stylers: [
							{
								color: '#9e9e9e',
							},
						],
					},
				],
			};

			/* Init */
			_createMap(mapContainer[0], mapArgs);
			_createMarkers($locations, markers, map);
		});

		function _createMap(el, args) {
			map = new google.maps.Map(el, args);
		}

		function _createMarkers($els, markers, map) {
			$els.each(function() {
				const $el = $(this);
				const icons = _getIconsFromMarker($el);
				const marker = new google.maps.Marker({
					position: new google.maps.LatLng(
						$el.data('lat'),
						$el.data('lng'),
					),
					map: map,
					icon: icons,
					infoWindow: new google.maps.InfoWindow(),
					id: $el.data('id'),
				});

				markers.push(marker);

				if ($el.html()) {
					marker.infoWindow.setContent($el.html());
				}

				google.maps.event.addListener(marker, 'click', function() {
					_deselectAllMarkers();
					_setSelectedMarker(marker.id);

					if ($el.html()) {
						marker.infoWindow.open(map, marker);
					}

					google.maps.event.addListener(marker, 'click', function() {
						_deselectAllMarkers();
						_setSelectedMarker(marker.id);

						if (!marker.open && $el.html()) {
							marker.infoWindow.open(map, marker);
							let iw_container = $('.gm-style-iw').parent();
							iw_container.stop().hide();
							iw_container.fadeIn(850);
							marker.open = true;
						} else {
							marker.infoWindow.close();
							_deselectAllMarkers();
							marker.open = false;
						}
					});

					google.maps.event.addListener(map, 'click', function() {
						markers.map(marker => {
							marker.setIcon(marker.icons.inactive);
							marker.infoWindow.close();
						});
						marker.open = false;
					});
				});
			});
		}

		function _getIconsFromMarker($el) {
			return {
				url: $el.data('inactive')
					? $el.data('inactive')
					: mapContainer.data('inactive'),
				size: new google.maps.Size(39, 56),
				scaledSize: new google.maps.Size(39, 56),
			};
		}

		function _deselectAllMarkers() {
			markers.map(marker => {
				marker.setIcon(marker.icons.inactive);
				marker.infoWindow.close();
			});
		}

		function _setSelectedMarker(id) {
			markers.map(marker => {
				if (marker.id === id) {
					marker.setIcon(marker.icons.active);
					map.panTo(marker.getPosition());
				}
				return marker;
			});
		}
	});
}
