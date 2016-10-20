(function() {
    function Room($firebaseArray) {
        
        var roomsRef = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(roomsRef);
        
        var roomService = {};
        
        roomService.all = rooms;
        
        roomService.addRoom = function(roomTitle) {
            rooms.$add({
                name: roomTitle,
                created_at: firebase.database.ServerValue.TIMESTAMP
            });
        };

        return roomService;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})(); 
