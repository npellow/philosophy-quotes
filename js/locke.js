var quotes = [
    'Reading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours.',
    'I have always thought the actions of men the best interpreters of their thoughts.',
    'New opinions are always suspected, and usually opposed, without any other reason but because they are not common.',
    'The only defense against the world is a thorough knowledge of it.',
    'We are like chameleons, we take our hue and the color of our moral character, from those who are around us.',
    'To love truth for truth\'s sake is the principal part of human perfection in this world, and the seed-plot of all other virtues.',
    'How long have you been holding those words in your head, hoping to use them?',
    'Revolt is the right of the people.',
    'There is frequently more to be learned from the unexpected questions of a child than the discourses of men.',
    'What worries you, masters you.',
    'Success in fighting means not coming at your opponent the way he wants to fight you.',
    'Fortitude is the guard and support of the other virtues.',
    'Reverie is when ideas float in our mind without reflection or regard of the understanding.',
    'Few men think, yet all will have opinions. Hence men\'s opinions are superficial and confused.',
    'Nothing is in the intellect that was not first in the senses.',
    'No peace and security among mankind—let alone common friendship—can ever exist as long as people think that governments get their authority from God and that religion is to be propagated by force of arms.',
    
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
  
  document.getElementById('mainContent').innerHTML = quotes[randomNumber];
  }  