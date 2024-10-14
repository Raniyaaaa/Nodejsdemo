const fs= require('fs');
const http=require('http')

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;

    if(url==='/'){

        fs.readFile("message.txt", (err,data)=>{
            let message="No message found";
            if(!err&&data){
                message=data;
            }
        res.write('<html>')
        res.write("<head><title>Enter message</title></head>")
        res.write(`<body><p>${message}</p>`)
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>')
        res.write('</body></html>') 
        return res.end();   
    })
}

    if(url==="/message" && method==="POST"){
        const body=[];
        req.on("data", (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        req.on("end", ()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split("=")[1];
            fs.writeFileSync("message.txt",message);
            res.statusCode=302;
            res.setHeader('location','/')
            return res.end();
        })
    }
})
server.listen(3000);