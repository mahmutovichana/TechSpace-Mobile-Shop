// Dobijanje trenutnog brojača iz lokalnog skladišta (ako postoji)
let count = localStorage.getItem('visitCount');

// Provjera da li brojač postoji u lokalnom skladištu
if (count) {
  count = parseInt(count);
} else {
  count = 0;
}

// Povećanje brojača za jedan
count += 1;

// Ažuriranje HTML elementa sa novim brojem
document.getElementById('count').textContent = count;

// Spremanje brojača nazad u lokalno skladište
localStorage.setItem('visitCount', count);