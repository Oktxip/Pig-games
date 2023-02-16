// Deklarasi variabel
let scores, roundScore, activePlayer, gamePlaying;

// Memanggil fungsi init untuk mengatur nilai awal permainan
init();

// Fungsi untuk mengocok dadu
document.querySelector('.btn--roll').addEventListener('click', function() {
  if (gamePlaying) {
    // Menghasilkan nilai acak dari 1 sampai 6
    const dice = Math.floor(Math.random() * 6) + 1;

    // Menampilkan gambar dadu sesuai dengan nilai yang dihasilkan
    const diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // Memperbarui skor ronde jika dadu yang dihasilkan bukan 1
    if (dice !== 1) {
      roundScore += dice;
      document.querySelector('#current--' + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

// Fungsi untuk menyimpan skor dan beralih ke pemain berikutnya
document.querySelector('.btn--hold').addEventListener('click', function() {
  if (gamePlaying) {
    // Menyimpan skor ronde ke skor pemain
    scores[activePlayer] += roundScore;

    // Menampilkan skor pemain
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

    // Mengecek apakah pemain telah memenangkan permainan
    if (scores[activePlayer] >= 100) {
      document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player--' + activePlayer).classList.add('player--winner');
      document.querySelector('.player--' + activePlayer).classList.remove('player--active');
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

// Fungsi untuk mengatur nilai awal permainan
document.querySelector('.btn--new').addEventListener('click', init);

// Fungsi untuk mengatur nilai awal permainan
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  // Menghilangkan gambar dadu pada awal permainan
  document.querySelector('.dice').style.display = 'none';

  // Mengatur semua skor pemain menjadi 0
  document.getElementById('score--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';

  // Mengatur nama pemain kembali menjadi Player 1 dan Player 2
  document.getElementById('name--0').textContent = 'Player 1';
  document.getElementById('name--1').textContent = 'Player 2';

  // Menghapus kelas 'player--winner' dan menambahkan kelas 'player--active' pada pemain 1
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
}

// Fungsi untuk beralih ke pemain berikutnya
function nextPlayer() {
    // Beralih ke pemain berikutnya
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    
    // Mengatur skor ronde menjadi 0 dan menampilkan ke layar
    roundScore = 0;
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    
    // Menambahkan kelas 'player--active' pada pemain yang sedang aktif dan menghapus kelas pada pemain yang tidak aktif
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    
    // Menghilangkan gambar dadu ketika pemain beralih
    document.querySelector('.dice').style.display = 'none';
    }