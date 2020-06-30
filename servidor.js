const express = require('express');
const app = express();
const PORT = 2200;

app.use(express.static('./public'));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} http://localhost:${PORT}`)
});