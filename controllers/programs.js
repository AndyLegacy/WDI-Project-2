const Program = require('../models/program');
const Lift = require('../models/lift');

function programsIndex(req, res) {
  Program
    .find(req.query)
    .populate('lift user')
    .exec()
    .then(programs => {
      return Lift.find()
        .exec()
        .then(lifts => res.render('programs/index', { programs, lifts, selectedLiftId: req.query.lift }));
    })
    .catch(err => res.render('error', {err}));
}
function programsShow(req, res) {
  Program
    .findById(req.params.id)
    .populate('lift user')
    .exec()
    .then(program => res.render('programs/show', { program }))
    .catch(err =>  res.render('error', {err}));
}

function programsNew(req, res) {
  Lift
    .find()
    .exec()
    .then((lifts) => res.render('programs/new', { lifts }))
    .catch(err =>  res.render('error', {err}));

}


function programsEdit(req, res) {
  Program
    .findById(req.params.id)
    .populate('lift')
    .exec()
    .then(program => {
      return Lift
        .find()
        .exec()
        .then((lifts) => res.render('programs/edit', { program, lifts }));
    })
    .catch(err => res.render('error', { err }));
}

function programsUpdate(req, res) {
  Program
    .findById(req.params.id)
    .exec()
    .then(program => {
      program = Object.assign(program, req.body);
      return program.save();
    })
    .then(program => res.redirect(`/programs/${program.id}`))
    .catch(err => res.render('error', { err }));

}

function programsDelete(req, res) {
  Program
    .findById(req.params.id)
    .exec()
    .then(program => {
      return program.remove();
    })
    .then(() => res.redirect('/programs'))
    .catch(err => res.render('error', { err }));

}

function programsCreate(req, res) {

  req.body.user= req.currentUser;

  Program
    .create(req.body)
    .then(() => res.redirect('/programs'))
    .catch(err => res.render('error', { err }));
}

function programsCommentsCreate(req, res) {
  Program
    .findById(req.params.id)
    .populate({
      path: 'comments',
      populate: {
        path: 'user',
        model: 'User'
      }
    })
    .exec()
    .then(program => {
      program.comments.push(req.body);
      return program.save();
    })
    .then(programs => res.redirect(`/programs/${programs.id}`))
    .catch(err => res.render('error', {err}));
}


function programsCommentsDelete(req, res) {
  Program
    .findById(req.params.id)
    .exec()
    .then(programs => {
      const comment = programs.comments.id(req.params.commentId);
      comment.remove();
      return programs.save();
    })
    .then(programs => res.redirect(`/programs/${programs.id}`))
    .catch(err => res.render('error', {err}));
}


module.exports = {
  index: programsIndex,
  show: programsShow,
  new: programsNew,
  create: programsCreate,
  edit: programsEdit,
  delete: programsDelete,
  update: programsUpdate,
  commentsCreate: programsCommentsCreate,
  commentsDelete: programsCommentsDelete
};
