const express = require("express");
const app = express();
const port = 3000;
const clientsRoute = require("./routes/clientes");

app.use(express.json());
app.use(clientsRoute);

app.listen(port, ()=>(
    console.log(`Api corriendo en http://localhost:${port}`)
))

app.get("/", (req, res)=>{
    return res.status(200).json({message: "Hola Bonita"});
})