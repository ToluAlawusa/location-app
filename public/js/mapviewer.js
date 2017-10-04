let map;
let markers = new Map();

$(document).ready(function(){
    const socket = io('/');


    socket.on('locationsUpdate', locations => {
        console.log(locations);
        markers.forEach((marker, id) => {
            marker.setMap(null)
            markers.delete(id)
        })

        locations.forEach(([id, position]) => {
            if(position.lat && position.lng){
                const marker = new google.maps.Marker({
                    position,
                    map,
                    title:id,
                })
                markers.set(id, marker);
            }

        })
    })

    setInterval(() => {
        socket.emit('requestLocations')
    }, 2000)

});

function initMap() {

    navigator.geolocation.getCurrentPosition(pos => {
        const {latitude : lat, longitude : lng } = pos.coords;
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat, lng},
            zoom: 2
        });
},
    err =>
    {
        console.log(err)
    }
)

}