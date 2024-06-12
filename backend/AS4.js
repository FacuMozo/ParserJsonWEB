const AccionSemantica = require('./AccionSemantica');

class AS4 extends AccionSemantica {
  ejecutarAccion(parser) {
    parser.setValor("");
  }
}

module.exports = AS4;
