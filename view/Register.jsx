const React = require('react');
const Layout = require('./Layout');

module.exports = function Register({ title }) {
  return (
    <Layout title="Registration">
      <div>
        <form method="GET" action="/themes" className="regForm">
          <div className="mb-2">
            <label htmlFor="exampleInputLogin1" className="form-label">Логин</label>
            <input type="text" className="form-control" id="exampleInputLogin1" />
          </div>
          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-2">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">Ваши данные не будут переданы третьим лицам </div>
          </div>
          <button type="submit" className="btn btn-primary">Подтвердить</button>
        </form>
      </div>
    </Layout>
  );
};
