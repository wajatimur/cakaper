angular.module('Cakapjer', [
        'angular-meteor',
        'ionic',
        'angularMoment'
    ]);

if( Meteor.isCordova ){
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}

function onReady() {
    angular.bootstrap(document, ['Cakapjer']);
}
