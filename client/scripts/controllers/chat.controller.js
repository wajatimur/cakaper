angular
    .module('Cakapjer')
    .controller('ChatCtrl', function($scope, $reactive, $stateParams){
        $reactive(this).attach($scope); 
        
        var chatId = $stateParams.chatId;
        this.helpers({
            messages(){
                console.log(chatId);
                return Messages.find({ chatId: chatId });
            },
            data(){
                return Chats.findOne(chatId);
            }
        });


        this.sendMessage = function(){
            //
        }
    });
