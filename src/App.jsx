import "./App.css";
import sertifikat from "./assets/kiki.jpg";

function App() {
  return (
    <>
      <header>
        <h1>Selamat datang di portofolio saya!</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Kontak</a>
        </nav>
      </header>

      <section>
        <div id="about" className="card">
          <h2>About Me</h2>
          <p>Nama saya Kiki, seorang siswa Teknik Jaringan Komputer yang sedang internship di perusahaan Brinks.</p>
          <p>
            Saya memiliki keahlian dalam bidang jaringan komputer dan pemrograman web. Saya juga memiliki pengalaman
            berkontribusi dalam proyek-proyek kecil dan bekerja dalam tim, serta kemampuan komunikasi yang baik. Saya
            sangat antusias untuk belajar dan berkembang dalam bidang ini, dan saya yakin bahwa pengalaman internship
            ini akan memberikan saya kesempatan untuk meningkatkan keterampilan dan pengetahuan saya. Saya sangat
            bersyukur bisa dipertemukan dengan lingkungan kerja yang baik dan senior-senior yang siap membantu saya
            dalam proses belajar ini, dan saya berharap dapat memberikan kontribusi yang positif bagi tim dan
            perusahaan.
          </p>
        </div>

        <div id="skills" className="card">
          <h2>My Skills</h2>

          <p>HTML</p>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "85%" }}>
              85%
            </div>
          </div>

          <p>CSS</p>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "50%" }}>
              50%
            </div>
          </div>

          <p>Jaringan Komputer</p>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "80%" }}>
              80%
            </div>
          </div>

          <p>Komunikasi</p>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "90%" }}>
              90%
            </div>
          </div>

          <p>Cisco</p>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "85%" }}>
              85%
            </div>
          </div>

          <p>Network</p>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "80%" }}>
              80%
            </div>
          </div>
        </div>

        <div id="projects" className="card">
          <h2>Project</h2>
          <ul>
            <li>Membuat portofolio di Visual Studio Code</li>
            <li>Menjadi vendor AC KAI</li>
            <li>
              Berpartisipasi dalam project internal saat internship (konfigurasi router, troubleshooting jaringan) di
              Brinks
            </li>
          </ul>
        </div>

        <div id="contact" className="card">
          <h2>Kontak</h2>
          <p>
            Email:{" "}
            <a href="mailto:rizkihamsori10@gmail.com">rizkihamsori10@gmail.com</a>
          </p>
          <p>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/_rizkihamsori?igsh=cW5xZ3BuNnh1eWk3&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              @_rizkihamsori
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a href="https://wa.me/6281999690492" target="_blank" rel="noopener noreferrer">
              WhatsApp Kiki
            </a>
          </p>
        </div>

        <div className="card">
          <h2>Sertifikat Saya</h2>
          <div className="gallery">
            <img
              src={sertifikat}
              alt="Sertifikat Juara 1 Taekwondo"
              className="sertifikat-img"
            />
          </div>
        </div>
      </section>

      <footer>
        &copy; 2025 Kiki, STECU{" "}
        <div className="mb-3">
          <label htmlFor="city-select" className="form-label">
            City
          </label>
          <select className="form-select form-select-lg" id="city-select">
            <option value="newdelhi">Select one</option>
            <option value="newdelhi">New Delhi</option>
            <option value="istanbul">Istanbul</option>
            <option value="jakarta">Jakarta</option>
          </select>
        </div>
      </footer>
    </>
  );
}

export default App;
