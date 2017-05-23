/**
 * Created by guminji on 2017/5/16.
 */
var i =0;
var ioRouter = function(io){
    io.on("connection",function(socket){
        socket.on('disconnect',function(){
            console.log('one user disconnect!!');
            //socket.emit('net work error','hello world!')
        })
        socket.emit('net work error','hello world!')
        console.log('i am a user'+i);
        i=i+1;
    })
}
module.exports = ioRouter;
