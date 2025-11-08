import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <StyleTag />
      <div className="app-shell">
        <TopNav />
        <div className="app-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}

function TopNav() {
  return (
    <header className="topnav">
      <Link className="brand" to="/">
        <img src="/logo-gameshift.png" alt="Game Shift" />
        <div className="brand-text">
          <strong>Cambio de juego</strong>
          <span>JUGADOS</span>
        </div>
      </Link>
      <nav>
        <Link to="/">Inicio</Link>
        <a
          href="https://jugados2.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Jugar
        </a>
        <Link to="/quienes-somos">¿Quiénes somos?</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-left">
          <h1>Jugar para transformar.</h1>
          <p className="lede">
            En <strong>Game Shift</strong> creemos que el trabajo puede ser
            mucho más que tareas y resultados: puede ser un espacio para jugar,
            conectarse y crecer.
          </p>
          <div className="actions">
            <a
              className="btn btn-primary"
              href="https://jugados2.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Jugar
            </a>
            <Link className="btn" to="/quienes-somos">
              ¿Quiénes somos?
            </Link>
            <Link className="btn" to="/contacto">
              Contacto
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <img
            className="jugados-logo"
            src="/logo-gameshift.png"
            alt="Game Shift"
          />
        </div>
      </section>
    </main>
  );
}

function QuienesSomos() {
  return (
    <main className="page">
      <div className="card">
        <div className="card-head">
          <h2>Quiénes somos</h2>
        </div>
        <div className="content">
          <p>
            En <strong>Game Shift</strong> creemos que el trabajo puede ser
            mucho más que tareas y resultados. Puede ser un espacio para jugar,
            conectar y crecer.
          </p>
          <p>
            Somos una propuesta que nace de la pasión por los{" "}
            <strong>Recursos Humanos</strong>, la <strong>creatividad</strong> y
            el <strong>poder del juego como motor de cambio</strong>. Diseñamos
            experiencias que transforman lo cotidiano en algo significativo:
            talleres, dinámicas y juegos que invitan a pensar, moverse y
            descubrirnos en equipo.
          </p>
          <p>
            Nos mueve la idea de generar ese <em>shift</em>, ese cambio interno
            y colectivo que aparece cuando una persona se anima a probar algo
            distinto, cuando un grupo empieza a hablar otro idioma: el del
            aprendizaje compartido, la actitud positiva y la conexión genuina.
          </p>
          <p>
            No venimos a decirte cómo trabajar, venimos a invitarte a{" "}
            <strong>jugar para transformar</strong>. Porque cuando jugamos,
            aprendemos. Y cuando aprendemos, todo puede cambiar.
          </p>
        </div>
      </div>
    </main>
  );
}

function Contacto() {
  return (
    <main className="page">
      <div className="card">
        <div className="card-head">
          <h2>Contacto</h2>
        </div>
        <div className="content content-center">
          <img
            src="/logo-gameshift.png"
            alt="Game Shift"
            style={{ width: "140px", margin: "0 auto 10px" }}
          />
          <p>¿Querés escribirnos? Por ahora atendemos por correo:</p>
          <a className="mail" href="mailto:gamesshifft@gmail.com">
            gamesshifft@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <small>
        © {new Date().getFullYear()} Game Shift · Jugar para transformar
      </small>
    </footer>
  );
}

function StyleTag() {
  return (
    <style>{`
      :root {
        --bg:#fbf9f3;
        --card:#fff;
        --ink:#0f172a;
        --muted:#64748b;
        --accent:#6dd400;
        --accent2:#27b1ff;
        --radius:22px;
        --shadow:0 12px 30px rgba(15,23,42,0.08);
      }

      * {
        box-sizing:border-box;
      }

      html, body {
        margin:0;
        padding:0;
        background:var(--bg);
        color:var(--ink);
        font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
        scroll-behavior:smooth;
      }

      a {
        color:inherit;
        text-decoration:none;
      }

      .app-shell {
        min-height:100vh;
        display:flex;
        flex-direction:column;
      }

      .app-body {
        flex:1;
        display:flex;
      }

      /* NAV */

      .topnav {
        position:sticky;
        top:0;
        z-index:50;
        background:rgba(255,255,255,.96);
        backdrop-filter:saturate(120%) blur(10px);
        box-shadow:var(--shadow);
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:16px;
        padding:10px 18px;
      }

      .brand {
        display:flex;
        align-items:center;
        gap:10px;
      }

      .brand img {
        width:40px;
        height:40px;
        object-fit:contain;
      }

      .brand-text {
        display:flex;
        flex-direction:column;
        line-height:1.1;
      }

      .brand-text strong {
        font-size:14px;
      }

      .brand-text span {
        color:var(--muted);
        font-size:12px;
      }

      .topnav nav {
        display:flex;
        gap:10px;
        flex-wrap:wrap;
        justify-content:flex-end;
      }

      .topnav nav a {
        padding:8px 12px;
        border-radius:12px;
        border:1px solid transparent;
        font-size:14px;
        transition:all .18s ease;
      }

      .topnav nav a:hover {
        border-color:#e5e7eb;
        background:#ffffff;
        box-shadow:0 4px 10px rgba(15,23,42,.06);
      }

      /* HOME */

      .home {
        width:100%;
        display:grid;
        place-items:center;
        padding:26px 16px;
      }

      .hero {
        width:min(1080px,100%);
        display:grid;
        grid-template-columns:1.1fr .9fr;
        gap:24px;
        align-items:center;
      }

      .hero-left h1 {
        font-size:42px;
        margin:0 0 8px;
      }

      .lede {
        color:var(--muted);
        margin:0 0 18px;
        max-width:520px;
      }

      .actions {
        display:flex;
        gap:10px;
        flex-wrap:wrap;
      }

      .hero-right {
        position:relative;
        min-height:260px;
        display:grid;
        place-items:center;
      }

      .jugados-logo {
        max-width:260px;
        width:70%;
        display:block;
        margin:0 auto;
        filter:drop-shadow(0 10px 26px rgba(15,23,42,.16));
      }

      /* PAGES */

      .page {
        width:100%;
        display:grid;
        place-items:center;
        padding:28px 16px;
      }

      .card {
        width:min(860px,100%);
        background:var(--card);
        border-radius:var(--radius);
        box-shadow:var(--shadow);
        padding:18px;
      }

      .card-head {
        display:flex;
        align-items:center;
        justify-content:space-between;
        border-bottom:1px solid #f1f5f9;
        padding-bottom:10px;
        margin-bottom:12px;
      }

      .content {
        display:grid;
        gap:12px;
        font-size:15px;
        line-height:1.6;
      }

      .content-center {
        text-align:center;
      }

      /* BOTONES / LINKS */

      .btn {
        appearance:none;
        border:1px solid #e5e7eb;
        background:#fff;
        padding:10px 14px;
        border-radius:14px;
        cursor:pointer;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:6px;
        font-size:14px;
        transition:all .18s ease;
        white-space:nowrap;
      }

      .btn-primary {
        background:linear-gradient(90deg,var(--accent2),var(--accent));
        border:0;
        color:#0b1220;
        font-weight:800;
        box-shadow:var(--shadow);
      }

      .btn-primary:hover {
        transform:translateY(-1px);
        box-shadow:0 14px 30px rgba(15,23,42,.18);
      }

      .btn:hover:not(.btn-primary) {
        transform:translateY(-1px);
        box-shadow:0 10px 22px rgba(15,23,42,.12);
      }

      .mail {
        display:inline-block;
        margin-top:8px;
        font-weight:800;
        word-break:break-all;
      }

      .site-footer {
        padding:16px;
        text-align:center;
        color:var(--muted);
        font-size:12px;
      }

      /* 📱 Mobile */

      @media (max-width: 768px) {
        .topnav {
          flex-direction:column;
          align-items:flex-start;
          gap:8px;
          padding:10px 14px;
        }

        .topnav nav {
          width:100%;
          justify-content:flex-start;
          flex-wrap:wrap;
          gap:6px;
        }

        .topnav nav a {
          padding:6px 10px;
          font-size:13px;
        }

        .home {
          padding:20px 12px;
        }

        .hero {
          grid-template-columns:1fr;
          gap:16px;
        }

        .hero-left h1 {
          font-size:30px;
        }

        .hero-left,
        .hero-left .actions {
          text-align:left;
        }

        .jugados-logo {
          max-width:200px;
          width:55%;
          margin-top:4px;
        }

        .page {
          padding:20px 10px;
        }

        .card {
          width:100%;
          padding:14px;
          border-radius:18px;
        }

        .card-head {
          flex-direction:column;
          align-items:flex-start;
          gap:4px;
        }
      }

      /* Extra pequeño */

      @media (max-width: 400px) {
        .topnav {
          padding:8px 10px;
        }

        .hero-left h1 {
          font-size:26px;
        }

        .btn {
          flex:1 1 auto;
        }
      }
    `}</style>
  );
}