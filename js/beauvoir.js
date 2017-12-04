var quotes = [
    'No one is more arrogant toward women, more aggressive or scornful, than the man who is anxious about his virility.',
    'One\'s life has value so long as one attributes value to the life of others.',
    'One is not born, but rather becomes, a woman.',
    'In itself, homosexuality is as limiting as heterosexuality: the ideal should be to be capable of loving a woman or a man; either, a human being, without feeling fear, restraint, or obligation.',
    'I tore myself away from the safe comfort of certainties through my love for truth - and truth rewarded me.',
    'The body is not a thing, it is a situation: it is our grasp on the world and our sketch of our project.',
    'Representation of the world, like the world itself, is the work of men; they describe it from their own point of view, which they confuse with absolute truth.',
    'I wish that every human life might be pure transparent freedom.',
    'It is in the knowledge of the genuine conditions of our lives that we must draw our strength to live and our reasons for living.',
    'If the feminine issue is so absurd, is because the male\'s arrogance made it \"a discussion\”. ',
    'Today, however, we are having a hard time living because we are so bent on outwitting death.',
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
  
  document.getElementById('mainContent').innerHTML = quotes[randomNumber];
  }  