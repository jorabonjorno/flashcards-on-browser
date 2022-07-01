const React = require('react');
const Layout = require('./Layout');

module.exports = function Register({ title }) {
  return (
    <Layout title="Themes">
      <div>
        <form method="GET" action="/themes">
          <nav className="nav flex-column">
            <a className="nav-link" href="/themes/1">Космос</a>
            <a className="nav-link" href="/themes/2">Мультипликационные фильмы</a>
            <a className="nav-link" href="/themes/3">Бригада</a>
            <a className="nav-link" href="/themes/4">Поттер</a>
          </nav>
        </form>
      </div>
    </Layout>
  );
};
