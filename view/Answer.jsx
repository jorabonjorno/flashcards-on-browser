const React = require('react');
const Layout = require('./Layout');

module.exports = function Answer({ title, findQuestion }) {
  return (
    <Layout title={title}>
      <div>
        <form method="GET" action="/qu">
          <nav className="nav flex-column">
            {/* {findThemes[0].title} */}
            {/* {if (findQuestion[0].deck_id === 2) {
              <img src=`${findQuestion[0].question}` alt="альтернативный текст"></img>
            }} */}
            { findQuestion[0].question }

            <form method="GET" action="/themes" className="regForm">
              <div className="mb-2">
                <label htmlFor="exampleInputLogin1" className="form-label">Ваш ответ:</label>
                <input type="text" className="form-control" id="exampleInputLogin1" />
              </div>

              <button type="submit" className="btn btn-primary">Подтвердить</button>
            </form>
          </nav>
        </form>
      </div>
    </Layout>
  );
};
