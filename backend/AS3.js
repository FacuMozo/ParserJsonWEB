const AccionSemantica = require('./AccionSemantica');

class AS3 extends AccionSemantica {
  ejecutarAccion(parser) {
    const newAmbito = `${parser.getAmbito()}${parser.getKey()}.`;
    parser.setAmbito(newAmbito);
    parser.incrementarContador();
  }
}

module.exports = AS3;
