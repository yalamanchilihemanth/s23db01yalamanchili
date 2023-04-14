var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Animal_controller = require('../controllers/Animal');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/costumes', Animal_controller.Animal_create_post);
// DELETE request to delete Costume.
router.delete('/costumes/:id', Animal_controller.Animal_delete);
// PUT request to update Costume.
router.put('/costumes/:id', Animal_controller.Animal_update_put);
// GET request for one Costume.
router.get('/costumes/:id', Animal_controller.Animal_detail);
// GET request for list of all Costume items.
router.get('/costumes', Animal_controller.Animal_list);
module.exports = router;