const http =require('http');
const server=http.createServer((req,res)=>{
    console.log("My name is Raniya");
})
server.listen(4000);