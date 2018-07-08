const express = require('express');
const app = express();
app.set('case sensitive routing',true);
app.set('port',3000);


app.listen(app.get('port'),function(error){

    console.log('qidongle');
});

app.get('/',function(req,res){
    res.type('text/plain');
    res.send('pppd');
});
app.use(function(req,res,next){
    res.type('text/plain');
    res.status(404);
    res.send('404-not found');
});
