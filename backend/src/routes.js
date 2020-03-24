const express = require('express');

const routes = express.Router();


routes.get('/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Luiz Fernandes de Oliveira'
    });
});

module.exports = routes;