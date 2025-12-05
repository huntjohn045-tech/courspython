// JavaScript: handles logic and interactions

const quotesOriginal = [
  "Einfachheit ist die höchste Stufe der Vollkommenheit. — Leonardo da Vinci",
  "Lerne die Regeln wie ein Profi, damit du sie wie ein Künstler brechen kannst.  Pablo Picasso",
  "Erfolg ist nicht endgültig, Misserfolg ist nicht fatal: Es ist der Mut weiterzumachen, der zählt.  Winston Churchill",
  "Man wird nicht erleuchtet, indem man sich Licht vorstellt, sondern indem man seine Dunkelheit bewusst macht.  Carl Jung",
  "Schau nicht auf die Uhr; tu, was sie tut: Mach weiter. — Sam Levenson",
  "Die beste Methode, die Zukunft vorherzusagen, besteht darin, sie zu erschaffen.  Peter Drucker",
  "Verwandle deine Wunden in Weisheit. — Oprah Winfrey",
  "Sei du selbst die Veränderung, die du dir für die Welt wünschst.  Mahatma Gandhi",
  "Wissen wird durch Erfahrung erworben, alles andere ist nur Information.  Albert Einstein",
  "Innovation unterscheidet einen Anführer von einem Anhänger.  Steve Jobs",
  "Wenn du weißt, dass du in Gefahr bist, bist du nicht mehr in Gefahr.Wenn du es nicht weißt, dass du in Gefahr bist, dann bist du in Gefahr.Darum geht es.  Rigobert Song",
  "Der jenige, der läuft, weil er den Löwen gesehen hat, kann niemals schneller laufen als derjenige, der läuft, weil der Löwe ihn gesehen hat.  Rigobert Song"
];

let pool = [...quotesOriginal];

const quoteEl = document.getElementById('quote');
const newBtn = document.getElementById('newQuote');
const resetBtn = document.getElementById('reset');
const remainingEl = document.getElementById('remaining');

function updateRemaining(){
  remainingEl.textContent = pool.length;
}

function showQuote(text){
  quoteEl.classList.remove('show');
  setTimeout(()=>{
    quoteEl.textContent = text;
    quoteEl.classList.add('show');
  }, 80);
}

function pickRandom(){
  if(pool.length === 0) return null;
  const idx = Math.floor(Math.random() * pool.length);
  return pool.splice(idx,1)[0];
}

newBtn.addEventListener('click', ()=>{
  const q = pickRandom();
  if(q){
    showQuote(q);
  } else {
    showQuote("Alle Zitate wurden angezeigt. Klicken Sie auf 'Zurücksetzen'.");
  }
  updateRemaining();
});

resetBtn.addEventListener('click', ()=>{
  pool = [...quotesOriginal];
  updateRemaining();
  showQuote("Die Liste der Zitate wurde zurückgesetzt.");
});

updateRemaining();
setTimeout(()=> quoteEl.classList.add('show'), 50);
