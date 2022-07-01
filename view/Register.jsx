const Layout = require('./Layout');
const React = require('react');

module.exports = function Register({title}) {
  return (
    <Layout title ="Registration">
      <form method="GET" action="/themes">
        <div class="mb-3">
          <label for="exampleInputLogin1" class="form-label">Логин</label>
          <input type="text" class="form-control" id="exampleInputLogin1" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Пароль</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">Ваши данные не будут переданы третьим лицам </div>
        </div>
        <button type="submit" class="btn btn-primary">Подтвердить</button>
      </form>
    </Layout>
  );
};
