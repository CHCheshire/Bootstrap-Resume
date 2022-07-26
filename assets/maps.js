function initMap () {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat:46.619261,
                    lng:-33.134766
                }
            });

            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

            var location = [
                { lat: 52.0273, lng:-0.7944   },
                {  lat: 52.0345, lng:-0.7945  }
            ];
            var markers = location.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
        }