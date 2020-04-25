const myDummyObjects = [
  { name: 'Principles', type: 'book', rating: 'really good', favorite: true },
  { name: 'This is marketing', type: 'book', rating: 'really good', favorite: true },
]

const newDummyObject = {
  name: '',
  type: '',
  rating: '',
  favorite: false
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newDummyObject,
  myDummyObjects
};
