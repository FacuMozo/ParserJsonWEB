const AccionSemantica = require('./AccionSemantica');

class AS2 extends AccionSemantica {
  ejecutarAccion(parser) {
    parser.appendCharToKey(parser.getChar());
  }
}

module.exports = AS2;
