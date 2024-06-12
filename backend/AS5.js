const AccionSemantica = require('./AccionSemantica');

class AS5 extends AccionSemantica {
  ejecutarAccion(parser) {
    parser.appendCharToValor(parser.getChar());
  }
}

module.exports = AS5;
