const router = require('express').Router();
const registrations = require('../controllers/registrations');
const programs = require('../controllers/programs');
// const secureRoute = require('../lib/secureRoute');
const sessions = require('../controllers/sessions');



router.get('/', (req, res) => res.render('home', { isHomepage: true }));

router.route('/programs')
  .get(programs.index)
  .post(programs.create);

router.route('/programs/new')
  .get(programs.new);

router.route('/programs/:id')
  .get(programs.show)
  .put(programs.update)
  .delete(programs.delete);

router.route('/programs/:id/edit')
  .get(programs.edit);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.get('/logout', sessions.delete);
module.exports = router;
