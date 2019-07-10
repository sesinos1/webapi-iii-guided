module.exports = gate;

function gate(req, res, next) {
    const password = req.headers.password
  
    if (password && password === 'mellon'){
      next();
    } else {
      res.status(401).json( {you : 'shall not pass'})
    }
  }