var socket = io();

$('#chat').submit(function(){
    socket.emit('chat message', $('#msg').val());
    $('#msg').val('');
    return false;
});

socket.on('chat message', function(msg){
    $('#messages').append($('<div>').text(msg));
});
