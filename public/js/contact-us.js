var ContactUs = function () {

    return {
        //main function to initiate the module
        init: function () {
			var map;
			$(document).ready(function(){
				map = new GMaps({
					div: '#map',
		            lat: -16.060212,
					lng: -108.209941,
				});
			    var marker = map.addMarker({
		            lat: -16.060212,
					lng: -108.209941,
		            title: 'Loop, Inc.',
		            infoWindow: {
		                content: "<b>Loop, Inc.</b> 795 Park Ave, Suite 120<br>San Francisco, CA 94107"
		            }
		        });
			    marker.infoWindow.open(map, marker);
			});
        }
    };
}();