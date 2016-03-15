angular
    .module('Cakapjer')
    .controller('ChatsCtrl', function($scope, $reactive){
        $reactive(this).attach($scope);

        this.helpers({
            data() {
                return Chats.find();
            },
            chats(){
                return Chats;
            }
        });

        this.remove = function(chat){
            this.chats.remove(chat._id);
        }
    });
