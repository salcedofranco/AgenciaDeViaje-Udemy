exports.infoNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Sobre Nosotros' //variable desde routes a template
    });
}