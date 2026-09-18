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
      {/* ================= HEADER ================= */}
      <header className="header">
        <a href="/" className="brand">
          <div className="brand-logo">
            <div className="brand-sjs">SJS</div>
            <div className="brand-line" />
          </div>

          <div className="brand-name">
            <strong>SABIT JAYA</strong>
            <span>SERVICE</span>
          </div>
        </a>

        <div className="header-right">
          <a
            href="https://wa.me/6285773334303"
            target="_blank"
            rel="noopener noreferrer"
            className="header-wa"
          >
            <span className="wa-icon">◉</span>
            WhatsApp
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
        </div>
      </header>

      {/* ================= MENU ================= */}
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

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>
              Service AC 24 Jam
              <br />
              <span>Terdekat</span>
              <br />
              <span>Murah Bergaransi</span>
            </h1>

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
      </section>

      {/* ================= TEMPAT SECTION BERIKUTNYA ================= */}
      <section className="placeholder">
        <p>Bagian Tentang Kami akan kita buat di tahap berikutnya.</p>
      </section>

      {/* ================= FLOATING CONTACT ================= */}
      <div className="floating-contact">
        <a href="tel:085773334303" className="floating-phone">
          <span>☎</span>
          <b>Hubungi Kami</b>
        </a>

        <a
          href="https://wa.me/6285773334303"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-wa"
        >
          <span>◉</span>
          <b>Hubungi Kami</b>
        </a>
      </div>

      {/* ================= CSS ================= */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #120526;
          color: #ffffff;
          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button {
          font-family: inherit;
        }

        /* ================= SITE ================= */

        .site {
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(
              circle at 85% 10%,
              rgba(166, 75, 255, 0.48),
              transparent 30%
            ),
            radial-gradient(
              circle at 15% 65%,
              rgba(100, 30, 190, 0.42),
              transparent 32%
            ),
            linear-gradient(
              150deg,
              #16072d 0%,
              #3a0b78 48%,
              #1b063d 100%
            );
        }

        /* ================= HEADER ================= */

        .header {
          position: relative;
          width: 100%;
          height: 76px;
          padding: 9px 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 50;
          background: #ffffff;
          border-bottom: 1px solid #dddddd;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }

        .brand-logo {
          width: 58px;
          height: 52px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-sjs {
          font-size: 25px;
          line-height: 1;
          font-weight: 900;
          font-style: italic;
          letter-spacing: -2px;
          background: linear-gradient(
            135deg,
            #08a8e8 0%,
            #1469db 45%,
            #2739b8 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .brand-line {
          position: absolute;
          width: 48px;
          height: 5px;
          left: 5px;
          bottom: 5px;
          border-radius: 10px;
          background: linear-gradient(
            90deg,
            #15c7ee,
            #1478e7,
            #4334c8
          );
          transform: skewX(-25deg);
        }

        .brand-name {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .brand-name strong {
          font-size: 18px;
          font-weight: 900;
          font-style: italic;
          letter-spacing: -0.5px;
          background: linear-gradient(
            90deg,
            #173cba,
            #087ee1,
            #1f38bd
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .brand-name span {
          margin-top: 7px;
          color: #666666;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          text-align: center;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .header-wa {
          min-width: 125px;
          height: 42px;
          padding: 0 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border-radius: 4px;
          color: #ffffff;
          background: linear-gradient(
            90deg,
            #159fc1 0%,
            #16a970 52%,
            #8fa800 100%
          );
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
        }

        .wa-icon {
          font-size: 14px;
        }

        .menu-button {
          width: 45px;
          height: 45px;
          padding: 0;
          border: 0;
          background: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          cursor: pointer;
        }

        .menu-button span {
          width: 25px;
          height: 3px;
          border-radius: 2px;
          background: #222222;
        }

        /* ================= HERO ================= */

        .hero {
          width: 100%;
          min-height: calc(100vh - 76px);
          padding: 72px 5% 115px;
        }

        .hero-inner {
          width: 100%;
          max-width: 850px;
          margin: 0 auto;
        }

        .hero-text {
          width: 100%;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(42px, 7vw, 74px);
          line-height: 1.08;
          font-weight: 900;
          letter-spacing: -2.5px;
          color: #ffffff;
        }

        .hero h1 span {
          color: #ffffff;
        }

        .hero p {
          max-width: 720px;
          margin: 34px 0 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 19px;
          line-height: 1.65;
          font-weight: 400;
        }

        .hero-image-wrap {
          width: 100%;
          margin-top: 42px;
          display: flex;
          justify-content: center;
        }

        .hero-image {
          display: block;
          width: 100%;
          max-width: 760px;
          max-height: 650px;
          object-fit: contain;
          border-radius: 8px;
          filter: drop-shadow(
            0 22px 35px rgba(0, 0, 0, 0.35)
          );
        }

        /* ================= PLACEHOLDER ================= */

        .placeholder {
          min-height: 250px;
          padding: 80px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #777777;
        }

        .placeholder p {
          margin: 0;
          font-size: 14px;
        }

        /* ================= MENU ================= */

        .menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: rgba(0, 0, 0, 0.58);
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

        /* ================= FLOATING CONTACT ================= */

        .floating-contact {
          position: fixed;
          left: 50%;
          bottom: 12px;
          transform: translateX(-50%);
          width: min(680px, calc(100% - 20px));
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          z-index: 9999;
        }

        .floating-contact a {
          min-height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border-radius: 7px;
          color: #ffffff;
          font-size: 14px;
          box-shadow: 0 7px 22px rgba(0, 0, 0, 0.3);
        }

        .floating-phone {
          background: linear-gradient(
            90deg,
            #1474ee,
            #0875ff
          );
        }

        .floating-wa {
          background: linear-gradient(
            90deg,
            #13a94e,
            #0bb95c
          );
        }

        .floating-contact span {
          font-size: 19px;
        }

        /* ================= MOBILE ================= */

        @media (max-width: 760px) {
          .header {
            height: 72px;
            padding: 8px 15px;
          }

          .brand {
            gap: 7px;
          }

          .brand-logo {
            width: 48px;
            height: 47px;
          }

          .brand-sjs {
            font-size: 22px;
          }

          .brand-line {
            width: 40px;
            height: 4px;
            left: 4px;
            bottom: 5px;
          }

          .brand-name strong {
            font-size: 15px;
          }

          .brand-name span {
            margin-top: 5px;
            font-size: 9px;
            letter-spacing: 3px;
          }

          .header-right {
            gap: 5px;
          }

          .header-wa {
            min-width: 108px;
            height: 39px;
            padding: 0 10px;
            font-size: 12px;
          }

          .menu-button {
            width: 40px;
            height: 40px;
          }

          .menu-button span {
            width: 23px;
            height: 3px;
          }

          .hero {
            min-height: auto;
            padding: 48px 20px 105px;
          }

          .hero-inner {
            max-width: 100%;
          }

          .hero h1 {
            font-size: clamp(39px, 11vw, 53px);
            line-height: 1.05;
            letter-spacing: -1.8px;
          }

          .hero p {
            margin-top: 28px;
            font-size: 16px;
            line-height: 1.65;
          }

          .hero-image-wrap {
            margin-top: 30px;
          }

          .hero-image {
            width: 100%;
            max-height: none;
            border-radius: 7px;
          }

          .floating-contact {
            width: calc(100% - 14px);
            bottom: 8px;
            gap: 5px;
          }

          .floating-contact a {
            min-height: 48px;
            font-size: 13px;
          }
        }
      `}</style>
    </main>
  );
}
