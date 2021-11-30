const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log("Servidor funcionando");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/login.html"));
  });
