(function() {
    function Rooms($firebaseArray) {
        var ref = firebase.database().ref();
        var rooms = $firebaseArray(ref.child("rooms"));
        var msgs = $firebaseArray(ref.child("messages"));
        
        Rooms.list = function() {
            
            return rooms;
        };
        
        function getMessages(id) {
            
            return $firebaseArray(ref.child('messages').orderByChild("roomId").equalTo(id));
        }

        Rooms.currentRoom = {name: "no room selected", $id: "-KUTruuvOdBGXwqLQwHp"};
        Rooms.messages = [{username: "Zach", content: "Hey, what's up?"}, {username: "Jimmy", content: "Nothing really! Just chillin, Hbu?"}, {username: "Zach", content: "Same, you wanna go to the game tomorrow?"}, {username: "Jimmy", content: "For sure man! Sounds good, what time?"} ];

        Rooms.addRoom = function(roomName) {
            Rooms.rooms.$add({name: roomName}); 
        };

        Rooms.selectRoom = function(room) {
            Rooms.currentRoom = room;
            
            Rooms.messages = getMessages(Rooms.currentRoom.$id);
        };


        return Rooms;
    }

    angular
        .module('blocChat')
        .factory('Rooms', ['$firebaseArray', Rooms]);
})();



/*(function() {
    function Rooms($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Rooms.list = function() {
            console.log(rooms[0]);
            return rooms;
        };

        Rooms.addRoom = function(roomName) {
            rooms.$add({name: roomName});
        };

        return Rooms;
    }

    angular
        .module('blocChat')
        .factory('Rooms', ['$firebaseArray', Rooms]);
})();*/

