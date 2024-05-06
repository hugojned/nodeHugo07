const http = require('http');

http.createServer((req, res) => {

    //#region writeHeaf y setHeader
        //res.writeHead(200, {'Content-Type': 'application/json'});
        //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
        //res.writeHead(200, {'Content-Type': 'application/csv'});
    //#endregion

    //console.log(req);

    res.write('mmm');

    res.end();
})
.listen(8080);

console.log('Puerto:',8080);