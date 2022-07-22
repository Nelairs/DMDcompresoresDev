/* -------------------------------------------------------------------------- */
/*                                   signup                                   */
/* -------------------------------------------------------------------------- */

export function getSignup(req, res) {
  res.send("PAGINA SIGNUP");
}

export function postSignup(req, res) {
  const user = req.user;
  console.log(user);
  res.send("USER CREADO");
}

export function failSignup(req, res) {
  console.log("Error en el registro");
  res.send('ERROR');
}

/* -------------------------------------------------------------------------- */
/*                                    login                                   */
/* -------------------------------------------------------------------------- */

export function getLogin(req, res) {
  if (req.isAuthenticated()) {
    const user = req.user;
    console.log("Usuario logueado!");
    res.render("login-ok", {
      usuario: user.userName,
      nombre: user.firstName,
      apellido: user.lastName,
      email: user.email,
    });
  } else {
    console.log('Usuario no loggeado!")');
    res.send('ok');
  }
}
export function postLogin(req, res) {
  const user = req.user;
  //console.log(user);
  res.status(200).send(user);
}

export function failLogin(req, res) {
  console.log("Error en el login");
  res.status(404).send('USER NOT FOUND');
}

/* -------------------------------------------------------------------------- */
/*                                   logout                                   */
/* -------------------------------------------------------------------------- */

export function logout(req, res) {
  console.log("logout");
  req.logout();
  res.send("DESLOGUEADO");
}