const express = require('express');

const app = express();

app.use(express.json());

app.get('/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Luiz Fernandes de Oliveira'
    });
});

app.listen(3333);