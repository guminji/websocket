/**
 * Created by guminji on 2017/5/16.
 */
var i =0;
var ioRouter = function(io){
    io.on("connection",function(){
        console.log('i am a user'+i);
        i=i+1;
    })
}
module.exports = ioRouter;
