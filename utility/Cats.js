'use strict';

const Queue = require('./Queue');

let Cats = new Queue;

const cats = [
  {
    imageURL:
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
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
    'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Male',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    id: 2,
  },
  {
    imageURL:
    'https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg',
    imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 1,
    breed: 'Bengal',
    story: 'Thrown on the street',
    id: 3,
  },
  {
    imageURL:
    'https://www.sciencenewsforstudents.org/sites/default/files/scald-image/860_cat_names.png',
    imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Male',
    age: 3,
    breed: 'Bengal',
    story: 'Thrown on the street',
    id: 4
  },
  {
    imageURL:
    'https://cbsnews1.cbsistatic.com/hub/i/2016/03/23/38e32f54-b910-4612-8852-be9e0fbdbf73/cat-istock.jpg',
    imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Garfield',
    sex: 'Female',
    age: 4,
    breed: 'Bengal',
    story: 'Thrown on the street',
    id: 5
  },
];

cats.map(cat => Cats.enqueue(cat));

module.exports = Cats;