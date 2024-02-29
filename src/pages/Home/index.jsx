import React, { useState } from "react";
import s from "./style.module.css";

const Home = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (!e) {
      return;
    }

    try {
      setAuthenticated(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {!authenticated && (
        <main className={s.containerLogin}>
          <h1 className={s.loginTitle}>Login</h1>

          <form className={s.boxForm} onSubmit={handleClick}>
            <label className={s.labelFormLogin} htmlFor="email">
              Email:
            </label>
            <input
              className={s.inputFormLogin}
              type="email"
              name="email"
              required
            />

            <label className={s.labelFormLogin} htmlFor="password">
              Senha:
            </label>
            <input
              className={s.inputFormLogin}
              type="password"
              name="password"
            />

            <button className={s.buttonLoginSubmit} type="submit">
              Entrar
            </button>

            <p className={s.createAccount}>
              Não tem uma conta? <a href="#">Clique aqui.</a>
            </p>
          </form>
        </main>
      )}

      {authenticated && (
        <main>
          <h1>Usuário logado com sucesso</h1>
        </main>
      )}
    </>
  );
};

export default Home;
