/* testing the socket connection with server.js */

// socket.emit("ying")
//
// socket.on('yang', () => {
//     console.log("got yang")
// })

/*    testing the socket connection with tracker.js */

// socket.on('ying', () => {
//     console.log('got ying')
//     socket.emit('yang')
// })

// socket.on('trackerDisconnected', id => {
//     console.log('disconnected', id)
//     if(markers.has(id)){
//         var marker = markers.get(id)
//         marker.setMap(null)
//         markers.delete(id)
//     }
// })

// socket.on('locationsUpdate', locations => {
//     console.log(locations);
//     locations.forEach(([id, position]) => {
//         if(position.lat && position.lng){
//             if(markers.has(id)) {
//                 // marker has id and position
//                 var marker = markers.get(id)
//                 marker.setPosition(position)
//             } else {
//                 // create new marker and set it
//                 var marker = new google.maps.Marker({
//                     position,
//                     map,
//                     title: id
//                 })
//                 markers.set(id, marker)
//             }
//         } else {
//             // Marker has id but no position
//             if(markers.has(id)){
//                 var marker = markers.get(id);
//                 marker.setMap(null);
//                 markers.delete(id)
//             }
//         }
//     })
// })

// socket.on('trackerDisconnected', id => {
//     console.log('disconnected', id)
//     if(markers.has(id)){
//         var marker = markers.get(id)
//         marker.setMap(null)
//         markers.delete(id)
//     }
// })