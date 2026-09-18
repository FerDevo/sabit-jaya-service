"use client";

import { useState } from "react";

const areas = {
  "DKI Jakarta": [
    ["Service AC Jakarta Selatan", "/jakarta-selatan"],
    ["Service AC Jakarta Timur", "/jakarta-timur"],
    ["Service AC Jakarta Barat", "/jakarta-barat"],
    ["Service AC Jakarta Utara", "/jakarta-utara"],
    ["Service AC Jakarta Pusat", "/jakarta-pusat"],
  ],
  Banten: [
    ["Service AC Tangerang Selatan", "/tangerang-selatan"],
    ["Service AC Kota Tangerang", "/tangerang"],
    ["Service AC Kabupaten Tangerang", "/kabupaten-tangerang"],
  ],
  "Jawa Barat": [
    ["Service AC Bekasi", "/bekasi"],
    ["Service AC Depok", "/depok"],
    ["Service AC Bogor", "/bogor"],
  ],
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [layananOpen, setLayananOpen] = useState(false);

  return (
    <main className="site">
      {/* HEADER */}
      <header className="header">
        <a href="/" className="brand">
          <div className="brand-mark">SJS</div>
          <div>
            <strong>Sabit Jaya</strong>
            <span>Service</span>
          </div>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Buka menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* MENU */}
      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}>
          <aside
            className="menu-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="menu-header">
              <strong>Menu</strong>

              <button
                className="close-button"
                onClick={() => setMenuOpen(false)}
                aria-label="Tutup menu"
              >
                ×
              </button>
            </div>

            <nav className="menu-list">
              <a href="/" onClick={() => setMenuOpen(false)}>
                Beranda
              </a>

              <button
                className="menu-dropdown-button"
                onClick={() => setLayananOpen(!layananOpen)}
              >
                <span>Layanan</span>
                <span>{layananOpen ? "−" : "+"}</span>
              </button>

              {layananOpen && (
                <div className="area-list">
                  {Object.entries(areas).map(([province, locations]) => (
                    <div className="province" key={province}>
                      <div className="province-title">{province}</div>

                      {locations.map(([name, path]) => (
                        <a
                          key={path}
                          href={path}
                          onClick={() => setMenuOpen(false)}
                        >
                          {name}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              <a href="#harga" onClick={() => setMenuOpen(false)}>
                Daftar Harga
              </a>

              <a href="#galeri" onClick={() => setMenuOpen(false)}>
                Galeri Pengerjaan
              </a>
            </nav>
          </aside>
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="badge">LAYANAN AC PROFESIONAL</div>

            <h1>
              Service AC
              <br />
              <span>24 Jam</span>
            </h1>

            <h2>
              Jabodetabek
              <br />
              <b>Murah Bergaransi</b>
            </h2>

            <p>
              Udara panas bikin nggak nyaman? Kami siap bantu! Tim profesional
              kami akan buat AC Anda kembali sejuk dan optimal — cepat, bersih,
              dan bergaransi.
            </p>
          </div>

          <div className="hero-image-wrap">
            <img
              src="/home.png"
              alt="Teknisi Sabit Jaya Service"
              className="hero-image"
            />
          </div>
        </div>

        {/* FEATURE */}
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">❄</div>
            <strong>AC Kembali</strong>
            <span>Sejuk Optimal</span>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <strong>Teknisi</strong>
            <span>Profesional</span>
          </div>

          <div className="feature-card">
            <div className="feature-icon">24</div>
            <strong>Layanan</strong>
            <span>24 Jam</span>
          </div>
        </div>
      </section>

      {/* TEMPAT SECTION BERIKUTNYA */}
      <section className="placeholder">
        <p>Bagian Tentang Kami akan kita buat di tahap berikutnya.</p>
      </section>

      {/* FLOATING CONTACT */}
      <div className="floating-contact">
        <a href="tel:085773334303" className="floating-phone">
          <span>☎</span>
          <b>Telepon</b>
        </a>

        <a
          href="https://wa.me/6285773334303"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-wa"
        >
          <span>✆</span>
          <b>WhatsApp</b>
        </a>
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #09051a;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button {
          font-family: inherit;
        }

        .site {
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(
              circle at 75% 15%,
              rgba(126, 54, 255, 0.35),
              transparent 30%
            ),
            radial-gradient(
              circle at 15% 65%,
              rgba(72, 31, 170, 0.3),
              transparent 30%
            ),
            linear-gradient(145deg, #080416, #16082f 50%, #09051a);
        }

        /* HEADER */

        .header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 76px;
          padding: 16px 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 50;
          background: rgba(10, 5, 25, 0.5);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand-mark {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 8px;
          font-size: 15px;
          font-weight: 900;
          background: linear-gradient(135deg, #4920a8, #8d4cff);
        }

        .brand strong {
          display: block;
          font-size: 17px;
        }

        .brand span {
          display: block;
          margin-top: 2px;
          color: #bba5ff;
          font-size: 12px;
        }

        .menu-button {
          width: 46px;
          height: 46px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          cursor: pointer;
        }

        .menu-button span {
          width: 22px;
          height: 2px;
          background: white;
          border-radius: 2px;
        }

        /* HERO */

        .hero {
          min-height: 760px;
          padding: 130px 5% 130px;
          position: relative;
        }

        .hero-content {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          align-items: center;
          gap: 45px;
        }

        .badge {
          display: inline-block;
          padding: 8px 13px;
          border: 1px solid rgba(171, 124, 255, 0.45);
          border-radius: 5px;
          background: rgba(112, 54, 220, 0.15);
          color: #cbb3ff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .hero h1 {
          margin: 18px 0 8px;
          font-size: clamp(42px, 6vw, 76px);
          line-height: 0.98;
          letter-spacing: -2px;
        }

        .hero h1 span {
          color: #a36cff;
        }

        .hero h2 {
          margin: 0 0 20px;
          font-size: clamp(24px, 3vw, 38px);
          line-height: 1.15;
        }

        .hero h2 b {
          color: #b98cff;
        }

        .hero p {
          max-width: 590px;
          margin: 0;
          color: #d0c8df;
          font-size: 16px;
          line-height: 1.75;
        }

        .hero-image-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image {
          width: min(100%, 500px);
          max-height: 530px;
          object-fit: contain;
          filter: drop-shadow(0 25px 45px rgba(122, 62, 255, 0.35));
        }

        /* FEATURES */

        .features {
          max-width: 1050px;
          margin: 30px auto 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .feature-card {
          min-height: 110px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.055);
          backdrop-filter: blur(8px);
        }

        .feature-icon {
          width: 34px;
          height: 34px;
          margin-bottom: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          background: #7138d8;
          font-size: 13px;
          font-weight: 900;
        }

        .feature-card strong {
          font-size: 14px;
        }

        .feature-card span {
          margin-top: 3px;
          color: #bcaed0;
          font-size: 12px;
        }

        /* TEMPORARY */

        .placeholder {
          min-height: 220px;
          padding: 80px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(0, 0, 0, 0.15);
        }

        .placeholder p {
          color: #aaa0ba;
          font-size: 14px;
        }

        /* MENU */

        .menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
        }

        .menu-panel {
          position: absolute;
          top: 0;
          right: 0;
          width: min(390px, 88%);
          height: 100%;
          padding: 25px;
          overflow-y: auto;
          background: #ffffff;
          color: #171221;
          box-shadow: -15px 0 45px rgba(0, 0, 0, 0.35);
        }

        .menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid #e7e2ed;
          font-size: 22px;
        }

        .close-button {
          width: 42px;
          height: 42px;
          border: 0;
          border-radius: 7px;
          background: #f0ebf7;
          color: #3d176d;
          font-size: 28px;
          cursor: pointer;
        }

        .menu-list {
          display: flex;
          flex-direction: column;
        }

        .menu-list > a,
        .menu-dropdown-button {
          width: 100%;
          padding: 17px 4px;
          border: 0;
          border-bottom: 1px solid #eeeaf2;
          background: transparent;
          color: #241b30;
          font-size: 16px;
          font-weight: 700;
          text-align: left;
          cursor: pointer;
        }

        .menu-dropdown-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .area-list {
          padding: 5px 0 10px 12px;
        }

        .province {
          padding: 8px 0 12px;
        }

        .province-title {
          margin-bottom: 5px;
          color: #6330b4;
          font-size: 14px;
          font-weight: 800;
        }

        .province a {
          display: block;
          padding: 8px 0;
          color: #51495b;
          font-size: 13px;
          line-height: 1.4;
        }

        .province a:hover {
          color: #7138d8;
        }

        /* FLOATING CONTACT */

        .floating-contact {
          position: fixed;
          left: 50%;
          bottom: 15px;
          transform: translateX(-50%);
          width: min(390px, calc(100% - 24px));
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          z-index: 9999;
        }

        .floating-contact a {
          min-height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 8px;
          color: white;
          font-size: 13px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
        }

        .floating-phone {
          background: #2563eb;
        }

        .floating-wa {
          background: #16a34a;
        }

        .floating-contact span {
          font-size: 18px;
        }

        /* MOBILE */

        @media (max-width: 760px) {
          .header {
            height: 68px;
            padding: 12px 16px;
          }

          .brand-mark {
            width: 40px;
            height: 40px;
          }

          .hero {
            min-height: auto;
            padding: 105px 16px 100px;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .hero-text {
            text-align: center;
          }

          .hero p {
            margin: 0 auto;
            font-size: 14px;
            line-height: 1.65;
          }

          .hero-image-wrap {
            order: -1;
          }

          .hero-image {
            width: min(85%, 360px);
            max-height: 350px;
          }

          .hero h1 {
            font-size: 45px;
          }

          .hero h2 {
            font-size: 25px;
          }

          .features {
            grid-template-columns: repeat(3, 1fr);
            gap: 7px;
            margin-top: 30px;
          }

          .feature-card {
            min-height: 95px;
            padding: 10px 5px;
          }

          .feature-icon {
            width: 29px;
            height: 29px;
            font-size: 11px;
          }

          .feature-card strong {
            font-size: 11px;
          }

          .feature-card span {
            font-size: 9px;
          }

          .floating-contact {
            bottom: 10px;
          }

          .floating-contact a {
            min-height: 46px;
          }
        }
      `}</style>
    </main>
  );
}
