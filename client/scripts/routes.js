angular
    .module('Cakapjer')
    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $stateProvider
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'client/views/tabs.html'
        })
        .state('tab.chats', {
            url: '/chats',
            views: {
                'tab-chats': {
                    templateUrl: 'client/views/chats.html',
                    controller: 'ChatsCtrl as chats'
                }
            }
        })
        .state('tab.chat', {
            url: '/chats/:chatId',
            views: {
                'tab-chats': {
                    templateUrl: 'client/views/chat.html',
                    controller: 'ChatCtrl as chat'
                }
            }
        });
        
        $ionicConfigProvider.tabs.position("bottom");

        $urlRouterProvider.otherwise('tab/chats');
    });
