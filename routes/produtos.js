const router = require('express').Router();

global.produtos = [];
global.produtos.push({id:1, nome: "Produto Teste", descricao: "descricao teste"}, {id:2, nome: "Produto Teste 2",  descricao: "descricao teste 2"});

router.get('/', (req, res)=>{
    
    res.render('produtos_list', {title: 'Produtos', subtitle: 'Lista de Produtos Cadastrados', lista: global.produtos});
})

router.get('/cadastrar', (req, res)=>{
    res.render('produtos_new', {title: 'Produtos', subtitle:"Cadastrar Produto"});
})

router.post('/cadastrar', (req, res)=>{
    let new_produto = {
        id: global.produtos.length + 1,
        nome: req.body.nome,
        descricao: req.body.descricao
    }
    global.produtos.push(new_produto);
    res.redirect('/produtos/');
})

module.exports = router;