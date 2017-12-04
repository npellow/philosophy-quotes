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
    'To abstain from politics is in itself a political attitude.',
    'Self-consciousness is not knowledge but a story one tells about oneself.',
    'To be oneself, simply oneself, is so amazing and utterly unique an experience that it\'s hard to convince oneself so singular a thing happens to everybody.',
    'And without a doubt it is more comfortable to endure blind bondage than to work for one\'s liberation; the dead, too, are better suited to the earth than the living.',
    'The body is the instrument of our hold on the world.',
    'There is only one solution if old age is not to be an absurd parody of our former life, and that is to go on pursuing ends that give our existence a meaning.',
    'Life is occupied in both perpetuating itself and in surpassing itself; if all it does is maintain itself, then living is only not dying.',
    'Self-knowledge is no guarantee of happiness, but it is on the side of happiness and can supply the courage to fight for it.',
    'Man must not attempt to dispel the ambiguity of his being but, on the contrary, accept the task of realizing it.',
    'Freedom is the source from which all significations and all values spring. It is the original condition of all justification of existence.',
    'Mystery is never more than a mirage that vanishes as we draw near to look at it.',
    'Whether you think of it as heavenly or as earthly, if you love life immortality is no consultation for death.',
    'By the time humankind reaches the stage of writing its mythology and laws, patriarchy is definitively established: it is males who write the codes.',
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
  
  document.getElementById('mainContent').innerHTML = quotes[randomNumber];
  }  