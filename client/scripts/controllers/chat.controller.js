angular
    .module('Cakapjer')
    .controller('ChatCtrl', function($scope, $reactive, $stateParams, $ionicScrollDelegate, $timeout){
        $reactive(this).attach($scope); 
        
        var chatId = $stateParams.chatId,
            isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

        this.helpers({
            messages(){
                return Messages.find({ chatId: chatId });
            },
            data(){
                return Chats.findOne(chatId);
            }
        });


        this.sendMessage = function(){
            if( _.isEmpty(this.message) ) return;

            Meteor.call('newMessage', {
                text: this.message,
                //type: 'text',
                chatId: chatId
            });

            this.message = '';
        }


        this.inputUp = function(){
            if( isIOS ){
                this.keyboardHeight = 216;
            }

            $timeout(function(){
                $ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(true);
            }, 300);
        }


        this.inputDown = function(){
            if( isIOS ){
                this.keyboardHeight = 0;
            }

            $ionicScrollDelegate.$getByHandle('chatScroll').resize();
        }

        
        this.closeKeyboard = function(){

        }
    });
