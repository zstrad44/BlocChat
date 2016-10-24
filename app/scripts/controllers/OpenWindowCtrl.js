(function() {
    function OpenWindowCtrl(Rooms, $uibModalInstance, $scope) {
        this.newRoomName;

        this.addRoom = function(){
            Rooms.addRoom($scope.roomName);
            $uibModalInstance.close();
        };

        this.cancel = function () {
            $uibModalInstance.dismiss();
        };

    }


    angular
        .module('blocChat')
        .controller('OpenWindowCtrl', ['Rooms', '$uibModalInstance', '$scope', OpenWindowCtrl]);
})();
 