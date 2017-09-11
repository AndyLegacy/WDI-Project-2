const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });


const Program = require('../models/program');
const Lift = require('../models/lift');

Program.collection.drop();
Lift.collection.drop();

Lift
  .create([{
    name: 'Overall Strength'
  }, {
    name: 'Squat'
  }, {
    name: 'Bench'
  },{
    name: 'Deadlift'

  }])
  .then((lifts) => {
    console.log(`${lifts.length} lifts created!`);

    return Program.create([{
      name: 'Starting Strength',
      frequency: '3 Days pr/week',
      level: 'Beginnner',
      lift: [lifts[0]],
      image: 'http://www.sethroselife.com/wp-content/uploads/2014/05/ss2.jpeg',
      description: 'Lifters add a fixed amount of weight to each exercise every training session. Typically, 5lbs on the squat, 10lbs on the deadlift, and 2.5lbs on the upperbody lifts and power cleans. This is an overload method known as linear progression.'
    },{

      name: 'Stronglifts 5X5',
      frequency: '3 Days pr/week',
      level: 'Beginnner',
      lift: [lifts[0]],
      image: 'https://3.bp.blogspot.com/-eiser4hUp1g/U8XAQiWj-tI/AAAAAAAAF0k/csqIWRt6qbw/s1600/wordthumb.png'

    },{

      name: 'Madcow 5X5',
      frequency: '3 Days pr/week',
      level: 'Intermediate',
      lift: [lifts[0]],
      image: 'https://lh6.ggpht.com/hWqYxweW0DKWDLzoefII8g0d5AUNK6nyirLd33QU8pdE1VJKUGZVsyNH2ZzTk2v1iAc=w300'

    },{

      name: 'Wendler 5,3,1',
      frequency: '4 Days pr/week',
      level: 'Advanced',
      lift: [lifts[0]],
      image: 'http://www.flexcart.com/members/elitefts/531-cover.jpg%20500.jpg'

    },{

      name: 'Smolov',
      frequency: '5 Days pr/week',
      level: 'Advanced',
      lift: [lifts[1]],
      image: 'http://vandersoft.co/wp-content/uploads/2016/07/Smolov-Feature-Graphic.png'

    },{

      name: 'Smolov jr',
      frequency: '5 Days pr/week',
      level: 'Intermidiate',
      lift: [lifts[1], lifts[2]],
      image: 'http://www.smolovjr.com/wp-content/uploads/2015/06/texas-logo.png'

    },{

      name: 'Legacy 5x2',
      frequency: '3 Days pr/week',
      level: 'Intermidiate',
      lift: [lifts[0]],
      image: 'http://i49.tinypic.com/2euq61g.jpg'

    },{

      name: 'Ed Coan Juggernaught Deadlift',
      frequency: '3 Days pr/week',
      level: 'Advanced',
      lift: [lifts[3]],
      image: 'http://www.powerliftingtowin.com/wp-content/uploads/2014/02/ed-coan-sumo.jpg'

    },{

      name: 'Candito Linear Programming',
      frequency: '3 Days pr/week',
      level: 'Intermediate',
      lift: [lifts[0]],
      image: 'https://yt3.ggpht.com/-22040rYInYs/AAAAAAAAAAI/AAAAAAAAAAA/jvPYSbuI5ps/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'


    },{
      name: 'Eillot Hulse Critical Bench',
      frequency: '3 Days pr/week',
      level: 'Intermediate',
      lift: [lifts[2]],
      image: 'http://www.criticalbench.com/images/criticalbench2.jpg'

    },{

      name: 'The Bulgarian Method',
      frequency: '4 Days pr/week',
      level: 'Advanced',
      lift: [lifts[1]],
      image: 'https://i.ytimg.com/vi/SWOm-1mIE6A/maxresdefault.jpg'

    }]);
  })
  .then(programs => console.log(`${programs.length} programs created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
