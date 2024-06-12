const AccionSemantica = require('./AccionSemantica');

class AS7 extends AccionSemantica {
  ejecutarAccion(parser) {
    parser.decrementarContador();
    let newAmbito = parser.getAmbito();
    if (newAmbito.length > 0) {
      const limite = newAmbito.lastIndexOf('.', newAmbito.length - 2);
      if (limite === -1) {
        parser.setAmbito("");
        return;
      } else {
        newAmbito = newAmbito.substring(0, limite + 1);
      }
    }
    parser.setAmbito(newAmbito);
  }
}

module.exports = AS7;
