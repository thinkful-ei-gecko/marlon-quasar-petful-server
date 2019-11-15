'use strict';

const Queue = require('./Queue');

let Dogs = new Queue;

const dogs = [
  {
    imageURL:
    'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782',
    imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    id: 1,
  },
  {
    imageURL:
    'https://i.ytimg.com/vi/BDxx1TnWTX0/maxresdefault.jpg',
    imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    id: 2,
  },
  {
    imageURL:
    'https://cdn.theatlantic.com/assets/media/img/mt/2019/07/GettyImages_138965532/lead_720_405.jpg?mod=1563813032',
    imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    id: 3,
  },
  {
    imageURL:
    'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13002253/GettyImages-521536928-_1_.jpg',
    imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    id: 4
  },
  {
    imageURL:
    'https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202018/Health/March/CR-Health-InlineHero-toxic-food-for-dogs-0318',
    imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    id: 5
  },
];

dogs.map(dog => Dogs.enqueue(dog));

module.exports = Dogs;