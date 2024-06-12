const AccionSemantica = require('./AccionSemantica');

class AS6 extends AccionSemantica {
  ejecutarAccion(parser) {
    const tupla = ` ${parser.getAmbito()}${parser.getKey()} = ${parser.getValor()}`;
    parser.appendTuplaToResultado(tupla);
  }
}

module.exports = AS6;

