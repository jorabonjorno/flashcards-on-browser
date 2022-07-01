const React = require('react');
const Layout = require('./Layout');


module.exports = function Theme({ title, findThemes }) {
  { console.log('=======', findThemes); }

  return (
    <Layout title={title}>
      <div>
        <form method="GET" action="/themes">
          <nav className="nav flex-column">
            {/* {findThemes[0].title} */}
            {findThemes
              .map((theme) => <a className="nav-link" href={`/question/${theme.id}`}>{theme.title}</a>) }
          </nav>
        </form>
      </div>
    </Layout>
  );
};
