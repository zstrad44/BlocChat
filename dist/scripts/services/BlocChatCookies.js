(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            console.log(currentUser);
            $uibModal.open({
                controller: 'UsernameWindowCtrl as username',
                templateUrl: '/templates/usernameWindow.html',
                size: 'sm',
                backdrop: 'static',
                keyboard: false
            });
        }
    } 

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();