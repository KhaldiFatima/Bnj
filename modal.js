let openBtn = document.getElementById('open-btn');
let modalcontainer = document.getElementById('modal-container');
let modal = document.getElementById('modal');
let closeBtn = document.getElementById('close-btn');
const reloadBtn = document.getElementById('reload-btn');
const quote = document.getElementById('quote');
const person = document.getElementById('person');

const quotes = [
  {
    quote: `System.Console.WriteLine("صباح الخير يا أبطال ، أسعد الله يومكم "); `,
    person: 'C#',
  },
  {
    quote: ` System.out.println("صباح الخير يا أبطال ، أسعد الله يومكم ");`,
    person: 'JAVA',
  },

  {
    quote: `fmt.Printf("صباح الخير يا أبطال ، أسعد الله يومكم ")`,
    person: 'GO',
  },
  {
    quote: `println("صباح الخير يا أبطال ، أسعد الله يومكم ");`,
    person: 'Kotlin',
  },
  {
    quote: `printf("صباح الخير يا أبطال ، أسعد الله يومكم ");`,
    person: 'C',
  },
  {
    quote: `puts "صباح الخير يا أبطال ، أسعد الله يومكم "`,
    person: 'Ruby',
  },

  {
    quote: `Console.WriteLine ("صباح الخير يا أبطال ، أسعد الله يومكم ");`,
    person: 'Python',
  },
];

openBtn.addEventListener('click', function () {
  modalcontainer.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
  modalcontainer.style.display = 'none';
});

window.addEventListener('click', function (e) {
  if (e.target === modalcontainer) {
    modalcontainer.style.display = 'none';
  }
});

reloadBtn.addEventListener('click', function () {
  let i = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[i].quote;
  person.innerText = quotes[i].person;
});
