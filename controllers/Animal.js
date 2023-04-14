var Animal = require('../models/Animal');
// List of all Animals
exports.Animal_list = function(req, res) {
res.send('NOT IMPLEMENTED: Animal list');
};
// for a specific Animal.
exports.Animal_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Animal detail: ' + req.params.id);
};
// Handle Animal create on POST.
exports.Animal_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Animal create POST');
};
// Handle Animal delete form on DELETE.
exports.Animal_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Animal delete DELETE ' + req.params.id);
};
// Handle Animal update form on PUT.
exports.Animal_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Animal update PUT' + req.params.id);
};

// List of all Animals
exports.Animal_list = async function(req, res) {
    try{
    theAnimal = await Animal.find();
    res.send(theAnimal);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.Animal_view_all_Page = async function(req, res) {
    try{
    theAnimal = await Animal.find();
    res.render('Animal', { title: 'Animal Search Results', results: theAnimal });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle Costume create on POST.
exports.Animal_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Animal();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Animal_name = req.body.Animal_name;
    document.color = req.body.color;
    document.weight = req.body.weight;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
    
    
    
