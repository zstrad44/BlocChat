
(function() {
    function LandingCtrl($cookies, Messages, $uibModal, Rooms, $scope, $firebaseArray) {
        this.currentUser = $cookies.get('blocChatCurrentUser');
        this.rooms = Rooms;
        this.roomsList = Rooms.list();
        this.messages = Messages; // possible error

        this.open = function(size) {
            var modalInst = $uibModal.open({
                controller: 'OpenWindowCtrl as window',
                templateUrl: '/templates/window.html'
            });
        };
        
        
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['$cookies', 'Messages', '$uibModal', 'Rooms', '$scope', '$firebaseArray', LandingCtrl]);
})();


/*(function() {
    function LandingCtrl(Messages, $uibModal, Rooms, $scope, $firebaseArray) {
        this.testData = "The controller is loading";

        this.roomsList = Rooms.list();
        this.messages = Rooms.messages;

        this.open = function(size) {
            var modalInst = $uibModal.open({
                controller: 'OpenWindowCtrl as window',
                templateUrl: '/templates/window.html'
            });
        };

    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Messages', '$uibModal', 'Rooms', '$scope', '$firebaseArray', LandingCtrl]);
})();*/


