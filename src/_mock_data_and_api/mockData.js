const objectTypes = {
  book: 'book',
  audiobook: 'audiobook',
}

const authors = {
  RayDalio: 'Ray Dalio',
  SethGodin: 'Seth Godin',
  NateSilver: "Nate Silver",
  MatthewWalker: "Matthew Walker",
}

const myDummyObjects = [
  {
    name: 'Principles',
    author: authors.RayDalio,
    type: objectTypes.book,
    rating: 'It is really great and well worth the money and time spent, a pleasure to read/listen',
    favorite: true,
    url: 'https://amzn.to/3bF8gyV' //hard cover
  },
  {
    name: 'Principles',
    author: authors.RayDalio,
    type: objectTypes.audiobook,
    rating: 'It is really great and well worth the money and time spent, a pleasure to read/listen',
    favorite: true,
    url: 'https://amzn.to/2Y7x8eQ'
  },
  {
    name: 'THIS IS MARKETING',
    author: authors.SethGodin,
    type: objectTypes.book,
    rating: 'It is really great and well worth the money and time spent, a pleasure to read/listen',
    favorite: true,
    url: 'https://amzn.to/3eRnu6a' //hard cover
  },
  {
    name: "the signal and the noise: why wo many predictions fail -- but some don't",
    author: authors.NateSilver,
    type: objectTypes.audiobook,
    rating: "haven't listen to it, only read the paperback version",
    favorite: true,
    url: 'https://amzn.to/3aTGYEZ'
  },
  {
    name: "the signal and the noise: why wo many predictions fail -- but some don't",
    author: authors.NateSilver,
    type: objectTypes.book,
    rating: 'It is really great and well worth the money and time spent, a pleasure to read/listen',
    favorite: true,
    url: 'https://amzn.to/3cL7ctJ' //paperback
  },
  {
    name: "Why We Sleep: The New Science of Sleep and Dreams",
    author: authors.MatthewWalker,
    type: objectTypes.audiobook,
    rating: 'It is really great and well worth the money and time spent, a pleasure to read/listen',
    favorite: true,
    url: 'https://amzn.to/3aIdrxP'
  },
  {
    name: "Why We Sleep: The New Science of Sleep and Dreams",
    author: authors.MatthewWalker,
    type: objectTypes.book,
    rating: "haven't read the paper version, only listened to audio and it is great",
    favorite: true,
    url: 'https://amzn.to/3aE2so7' //paperback
  }
]

const newDummyObject = {
  name: '',
  type: '',
  rating: '',
  favorite: false,
  url: ''
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newDummyObject,
  myDummyObjects
};
