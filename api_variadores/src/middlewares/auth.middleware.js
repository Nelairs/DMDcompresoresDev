export function checkAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
      
      next();
    } else {
      // console.log('not logged');
      res.status(403).send('NO ESTAS LOGUEADO')
    }
  }