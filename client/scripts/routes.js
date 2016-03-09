angular
    .module('Cakapjer')
    .config(function($stateProvider, $urlRouterProvider) {
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
        });

        $urlRouterProvider.otherwise('tab/chats');
    });
