const AccionSemantica = require('./AccionSemantica');

class AS0 extends AccionSemantica {
  ejecutarAccion(parser) {
    parser.iniciarContadorLLaves();
  }
}

module.exports = AS0;
