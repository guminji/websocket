/**
 * Created by guminji on 2017/5/16.
 */

var httpServer = require("./httpServer");
//require("./ioRouter");
httpServer.listen(3000,function(){
    console.log("listen at 3000");
})