Meteor.startup(function(){

    // Abort init initial data if chat have items
    if( Chats.find().count() !== 0 ) return;

    Messages.remove({});

    var messages = [
        {
            text: 'I\'m on the way there',
            timestamp: moment().subtract(2, 'days').toDate()
        },
        {
            text: 'Ok, see you there..',
            timestamp: moment().subtract(1, 'days').toDate()
        },
        {
            text: 'Im joining',
            timestamp: moment().subtract(3, 'hours').toDate()
        }
    ];

    messages.forEach(function(msg){
        Messages.insert(msg);
    });


    var chats = [
        {
            picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
            name: 'Kuzan'
        },
        {
            picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
            name: 'Bartholemew'
        },
        {
            picture: 'https://randomuser.me/api/portraits/thumb/men/3.jpg',
            name: 'Kuma'
        }
    ];


    chats.forEach(function(chat){



    });
});