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
      image: 'https://3.bp.blogspot.com/-eiser4hUp1g/U8XAQiWj-tI/AAAAAAAAF0k/csqIWRt6qbw/s1600/wordthumb.png',
      description: 'Like Starting Strength, StrongLifts 5×5’s use of the 5 rep set is fantastic. However, by selecting 5×5, the intensity range is pushed down more towards 75-80%. Considering the extra two sets of five as well, StrongLifts 5×5 is more hypertrophy oriented than Starting Strength. This makes it less specific to powerlifting.'

    },{

      name: 'Madcow 5X5',
      frequency: '3 Days pr/week',
      level: 'Intermediate',
      lift: [lifts[0]],
      image: 'https://lh6.ggpht.com/hWqYxweW0DKWDLzoefII8g0d5AUNK6nyirLd33QU8pdE1VJKUGZVsyNH2ZzTk2v1iAc=w300',
      description: 'Madcows can be defined as an intermediate program because you only increase the weights once per week – the mesocycle is a full week in length. In actuality though, as we discussed above, the program is truly intended to be run in 8-12 week cycles rather than as a “weekly increase” type program. This actually biases it more towards the “advanced” or “late stage” intermediate program category. It isn’t an advanced program because it doesn’t employ true periodization.'
    },{

      name: 'Wendler 5,3,1',
      frequency: '4 Days pr/week',
      level: 'Advanced',
      lift: [lifts[0]],
      image: 'http://www.flexcart.com/members/elitefts/531-cover.jpg%20500.jpg',
      description: 'At the end of each month, you increase your training max weight on the lower-body movements, the squat and the deadlift, by 10lbs; you increase your training max on the upper-body movements, the bench and the press, by 5lbs. From there, you repeat the exact same workouts that you did the month before with slightly heavier weights. In addition to the monthly incremental increases, the program also allows for rep maxes. So, even if the weight increases are only monthly, you can still theoretically make progress from week to week by adding reps.'

    },{

      name: 'Smolov',
      frequency: '5 Days pr/week',
      level: 'Advanced',
      lift: [lifts[1]],
      image: 'http://vandersoft.co/wp-content/uploads/2016/07/Smolov-Feature-Graphic.png',
      description: 'This program is intended to be run strictly as a shock cycle. In other words, this is not a program that you run multiple times a year. This is not a program that you do for any reason other than completely overloading the body for a given, specific time. In fact, when you run Smolov, you are not to do any deadlifting whatsoever. You are not to do Smolov while in a caloric deficit. If you ignore any of the above warnings and disclaimers, your chances of injury, which are already well above zero, only increase.'

    },{

      name: 'Smolov jr',
      frequency: '5 Days pr/week',
      level: 'Intermidiate',
      lift: [lifts[1], lifts[2]],
      image: 'http://www.smolovjr.com/wp-content/uploads/2015/06/texas-logo.png',
      description: 'Smolov jr. is a three week program that comes from the Russian squat routine known as Smolov. ... Another difference is Smolov Jr. can be used on other lifts besides the squat, and is actually quite commonly used on the bench press with the adjustments of smaller weight increments and a the program being ran over a longer period of time, typically 10 weeks longer than the standard Smolov variation.'

    },{

      name: 'Legacy 5x2',
      frequency: '3 Days pr/week',
      level: 'Intermidiate',
      lift: [lifts[0]],
      image: 'http://i49.tinypic.com/2euq61g.jpg',
      description: 'A program aimed excusively at natural powerlifters. The program focuses on linear progression on its initial 3 months phase, simply adding 2.5kg to all over head lifts and 5kg to all lower body lifts each week. Once the intial phase has been complete the lifter graduates onto the advanced Legacy 8x3 program.'

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
