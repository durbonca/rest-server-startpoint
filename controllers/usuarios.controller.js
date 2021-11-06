const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const params = req.query;

    res.json({
        message: "Hello Get - controlador!",
        params: params
    });
}

const usuariosPost = (req, res) => {
    
    res.json({
        message: "Hello Post - controlador!"
    });
}

const usuariosPut = (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.json({
        message: "Hello Put - controlador! usuario",
        id: id
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        message: "Hello Patch - controlador!"
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        message: "Hello Delete - controlador!"
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}