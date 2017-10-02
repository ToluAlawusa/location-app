$(document).ready(function(){

    var socket = io('/');
    socket.emit('registerTracker')



    var positionOptions = {
        enableHighAccuracy: true,
        maximumAge: 0
    };

    setInterval(() => {
        console.log('tick')
        navigator.geolocation.getCurrentPosition(pos => {
        var {latitude : lat, longitude : lng } = pos.coords;
        socket.emit('updateLocation', {lat, lng})
        },
            err =>
            {
                console.log(err)
            },
            positionOptions
        )
    }, 2000)


});

