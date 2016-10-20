
(function() {
    function LandingCtrl($uibModal, Rooms, $firebaseArray) {
        this.testData = "The controller is loading";

        this.roomsList = Rooms.list();

        this.open = function(size) {
            var modalInst = $uibModal.open({
                controller: 'OpenWindowCtrl as window',
                templateUrl: '/templates/window.html'
            });
        };

    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['$uibModal', 'Rooms', '$firebaseArray', LandingCtrl]);
})();



