(function () {
    angular.module("mainApp").component("componentMap",{
        templateUrl: "componentMap.html",
        controller: mapController
    });

    function mapController() {
        var cityCircle;
        var ctrl = this;
        var myLatlng = new google.maps.LatLng(55.75571365963652, 37.61702606331634);
        var myOptions = {
            center: myLatlng,
            zoom: 12
        };
        var map = new google.maps.Map(document.getElementById("map_div"), myOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title:"Hello World!"
        });
        map.addListener('click', function(e) {
            console.log(e.latLng.lat());
            console.log(e.latLng.lng());
            if (cityCircle){
                cityCircle.setMap(null);
            }
            cityCircle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                map: map,
                center: new google.maps.LatLng(e.latLng.lat(), e.latLng.lng()),
                radius: ctrl.area_radius*10
            });
        });
        ctrl.change_radius = function (){
            if (cityCircle){
                if (ctrl.area_radius*10 !== cityCircle.radius){
                    cityCircle.radius = ctrl.area_radius*10;
                    cityCircle.setCenter(cityCircle.getCenter());
                }
            }
        }
    }
})();