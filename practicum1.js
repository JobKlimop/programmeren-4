/**
 * Created by Thomas on 4/18/2017.
 */
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(request, response) {
    response.send('Hello Avans!');
})
app.get('/about', function(request, response) {
    response.send('Written by Thomas Lucas');
})
app.post('/', function(request, response) {
    response.send('Hello Avans, POST request received!');
})
app.put('/', function(request, response) {
    response.send('Hello Avans, PUT request received!');
})
app.all('*', function(request, response) {
    response.status(404);
    response.send('404 - Not found');
})
app.listen(port, function(){
    console.log('Server app is listening on port ' + port)
})
// app.listen(process.env.PORT||3000, function() {
//     console.log('Server app is listening on port 3000');
// })