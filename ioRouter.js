/**
 * Created by guminji on 2017/5/16.
 */
var ioRouter = function(io){
    io.on("connection",function(){
        console.log('i am a user');
    })
}
module.exports = ioRouter;
