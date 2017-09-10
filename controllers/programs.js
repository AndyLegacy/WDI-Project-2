const Program = require('../models/programs');

function programsIndex(req, res) {
  Program
    .find()
    .exec()
    .then(programs => res.render('programs/index', {programs}))
    .catch(err => res.render('error', {err}));
}

function programsShow(req, res) {
  Program
    .findById(req.params.id)
    .exec()
    .then(program => res.render('programs/show', { program }))
    .catch(err =>  res.render('error', {err}));
}

function programsNew(req, res) {
  res.render('programs/new');

}


function programsEdit(req, res) {
  Program
    .findById(req.params.id)
    .exec()
    .then(program => res.render('programs/edit', { program }))
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
  Program
    .findById(req.params.id)
    .then(program => {
      program.comments.push(req.body);
      return program.save();
    })
    .then(program => res.redirect(`/programs/${program.id}`))
    .catch(err => res.render('error', { err }));
}


module.exports = {
  index: programsIndex,
  show: programsShow,
  new: programsNew,
  create: programsCreate,
  edit: programsEdit,
  delete: programsDelete,
  update: programsUpdate
};
