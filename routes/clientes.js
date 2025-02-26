const express = require("express");
const router = express.Router();


let clients = [
    {
        id: 1,
        nombre: "Natalia",
        apellido: "Mejia",
    }
]

//READ
router.get("/clients", (req, res) =>{
    return res.status(200).json(clients);
})

//CREATE
router.post("/clients", (req, res)=>{
    const newClient = {...req.body, id: clients.length+1};
    clients.push(newClient);
    return res.status(201).json({message:"Cliente añadido", client: newClient});
})

router.put("/client/:id", (req, res) => {
    const { id } = req.params;
    //recorre el arreglo para encontrar el indice (me acuerda a un forEach)
    const index = clients.findIndex(c => c.id == id);
    if(index !==-1){
        clients[index] = {...req.body, id: parseInt(id)}
        return res.status(200).json({message:"Cliente actualizado correctamente", client: clients[index]});
    }else{
        return res.status(404).json({message:"No se ha encontrado el cliente"});
    }
}) ;

router.delete("/client/:id", (req,res)=>{
    const { id } = req.params;
    const index = clients.findIndex(c => c.id == id);
    if(index !== -1){
        clients.splice(index,1);
        return res.json({message: "Cliente eliminado"});
        //ni el return ni el status es obligatorio ponerlo, ya que JavaScript sabe que si ve un res tiene que
        //devolver eso, y a partir de como hace la operación, el hace una inferencia de que status poner.
        //Sin embargo, por buenas practicas, mejor pongamoslo.
    }else{
        return res.status(404).json({message:"No se ha encontrado el cliente"});
    }
})

module.exports = router;