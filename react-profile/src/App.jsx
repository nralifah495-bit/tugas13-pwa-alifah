import "./App.css";

function App() {
  return (
    <div className="profile-container">
      <h1>Profile - Nur Alifah</h1>

      <img
        src="/my.jpeg"
        alt="Nur Alifah"
        className="profile-img"
      />

      <h2>Halo, saya Nur Alifah 👋</h2>

      <p>
        Saya mahasiswa Program Studi Matematika yang tertarik pada
        matematika dan teknologi.
      </p>

      <div className="info-card">
        <h3>Tentang Saya</h3>
        <p>📍 Banyumas, Jawa Tengah</p>
        <p>🎓 Mahasiswa Matematika</p>
        <p>💻 Belajar Pemrograman Web</p>
      </div>
    </div>
  );
}

export default App;