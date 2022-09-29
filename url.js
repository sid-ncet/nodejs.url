let http = require('http')
let server = http.createServer(function (req, res) {
    const url=req.url;
    if(req.url=="/"){
        res.end('hello form the home sites')
    }else if( req.url=="/about"){
        res.end("hello from the about site")
    }else if(req.url=="/node"){
        res.end("Welcome to nodejs project")
    }
   

})
server.listen(4241, () => {
    console.log('server is running on site')
})