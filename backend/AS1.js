const AccionSemantica = require('./AccionSemantica');

class AS1 extends AccionSemantica {
  ejecutarAccion(parser) {
    parser.setKey("");
  }
}

module.exports = AS1;
