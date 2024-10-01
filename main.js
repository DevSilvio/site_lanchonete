$ ('#telefone').mask('(00) 0 0000 - 0000', {
    placeholder: '(DDD) 9 0000 - 0000'
});

$ ('form').validate ({
    rules: {
        nome: {
            required: true
        },
        email: {
            required:true,
            email: true
        },
        telefone: {
            required: true
        },
        menssagem: {
            required: true
        },
    },
    messages: {
        nome: 'Nome não preenchido!',
        email: 'Coloque seu melhor E-mail',
        telefone: 'Coloque seu contato / Whatsapp',
        menssagem: 'Deixe sua menssagem!'
    }
})