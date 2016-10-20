(function() {
    function LandingCtrl(Room, $uibModal) {
        
       this.roomObject = Room;   
    
        this.open = function() {
            $uibModal.open({
                templateUrl: '/templates/window.html',
                controller: 'OpenWindowCtrl as window'
            });
        };

        this.dismiss = function() {
            $uibModal.dismiss();
        };
    }    

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', '$uibModal', LandingCtrl]); 

})();   