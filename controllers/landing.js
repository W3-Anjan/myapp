
// controller contains the handler function where the 
// rendered view reference is defined
exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Express' });
}