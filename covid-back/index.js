const express = require('express');
const cors = require('cors');
const BodyParser =  require('body-parser');
const {getData} = require("./util/drive")

const app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({enabled:true}));


app.use(cors());

app.get('/data/:filename', function(request, response, next) {
    const filename = request.params.filename
    getData(filename).then(data => {
        response.json(data);
    })
    
})

app.listen(9091, () => {
    console.log("listening at port 9091")
});