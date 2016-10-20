
(function() {
    function OpenWindowCtrl(Room, $uibModalInstance) {

        this.roomService = Room;

        this.dismiss = function() {
            $uibModalInstance.dismiss('cancel');
            
        };

        this.submit = function() {
            if(this.text) {

                this.roomService.addRoom(this.text);
                this.text = '';
                $uibModalInstance.close();
            } 
            
        };
    }

    angular
        .module('blocChat')
        .controller('OpenWindowCtrl', ['$uibModalInstance','Room', OpenWindowCtrl]);
})();