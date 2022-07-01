const React = require('react');
const Layout = require('./Layout');


module.exports = function Question({ title, findQuestion }) {
  return (
    <Layout title={title}>
      <div>
        <form method="GET" action="/themes">
          <nav className="nav flex-column">
            {/* {findThemes[0].title} */}
            {findQuestion
              .map((theme) => <a className="nav-link" href={`/question/${theme.deck_id}/${theme.id}`}>{theme.point}</a>) }
          </nav>
        </form>
      </div>
    </Layout>
  );
};
