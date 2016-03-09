angular
    .module('Cakapjer')
    .controller('ChatsCtrl', function($scope, $reactive){
        $reactive(this).attach($scope);

        this.data = [

            {
                _id: 0,
                picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
                name: 'Kuzan',
                message: {
                    text: 'I\'m on the way there',
                    timestamp: moment().subtract(2, 'days').toDate()
                }
            },
            {
                _id: 1,
                picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
                name: 'Bartholemew',
                message: {
                    text: 'Ok, see you there..',
                    timestamp: moment().subtract(1, 'days').toDate()
                }
            },
            {
                _id: 2,
                picture: 'https://randomuser.me/api/portraits/thumb/men/3.jpg',
                name: 'Kuma',
                message: {
                    text: 'Im joining',
                    timestamp: moment().subtract(3, 'hours').toDate()
                }
            }

        ];


        this.remove = function(chat){
            this.data.splice(this.data.indexOf(chat), 1);
        }
    });