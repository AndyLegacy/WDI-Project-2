const router = require('express').Router();
const registrations = require('../controllers/registrations');
const programs = require('../controllers/programs');
const sessions = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');


router.get('/', (req, res) => res.render('home', { isHomepage: true }));

router.route('/programs')
  .get(programs.index)
  .post(secureRoute, programs.create);

router.route('/programs/new')
  .get(secureRoute, programs.new);

router.route('/programs/:id')
  .get(secureRoute, programs.show)
  .put(secureRoute, programs.update)
  .delete(secureRoute, programs.delete);

router.route('/programs/:id/edit')
  .get(secureRoute, programs.edit);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/programs/:id/comments')
  .post(secureRoute, programs.commentsCreate);
router.route('/programs/:id/comments/:commentId')
  .delete(secureRoute, programs.commentsDelete);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);
module.exports = router;
