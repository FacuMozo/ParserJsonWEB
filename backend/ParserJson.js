const MatrizTransicion = require('./MatrizTransicion');


class ParserJson {
    constructor() {
      this.ambito = "";
      this.key = "";
      this.valor = "";
      this.resultado = "";
      this.charActual = '';
      this.contadorLLaves = 0;
    }
  
    clavesAnidadasFromJSON(texto) {
      const cantidadChar = texto.length;
      const matrizTrans = new MatrizTransicion();
      let estadoActual = 0;
      let i = 0;
      this.resultado = "";
  
      for (i; i < cantidadChar; i++) {
        this.charActual = texto[i];
  
        matrizTrans.ejecutarAccion(estadoActual, this.charActual, this);
  
        estadoActual = matrizTrans.siguienteEstado(this.charActual, estadoActual);
  
        if (estadoActual === 19 && this.contadorLLaves === 0) {
          i++;
          break;
        }
  
        if (estadoActual === 100) {
          return "ERROR: JSON con formato inválido | Resultado parcial, hasta error: " + this.resultado;
        }
      }
  
      if (i === cantidadChar && this.contadorLLaves === 0) {
        console.log("EXITO: JSON con formato válido");
        return this.resultado;
      } else {
        return "ERROR: JSON con formato inválido |i: "+i+" cantC: "+cantidadChar +" contLL: "+this.contadorLLaves+"| Resultado parcial, hasta error: " + this.resultado;
      }
    }
  
    getKey() {
      return this.key;
    }
  
    setKey(newValue) {
      this.key = newValue;
    }
  
    appendCharToKey(newChar) {
      this.key += newChar;
    }
  
    getValor() {
      return this.valor;
    }
  
    setValor(newValue) {
      this.valor = newValue;
    }
  
    appendCharToValor(newChar) {
      this.valor += newChar;
    }
  
    getAmbito() {
      return this.ambito;
    }
  
    setAmbito(newValue) {
      this.ambito = newValue;
    }
  
    getChar() {
      return this.charActual;
    }
  
    incrementarContador() {
      this.contadorLLaves++;
    }
  
    decrementarContador() {
      console.log("contadorLLaves: "+ this.contadorLLaves);
      this.contadorLLaves--;
  
      console.log("contadorLLaves desp: "+ this.contadorLLaves);
    }
  
    iniciarContadorLLaves() {
      this.contadorLLaves = 1;
    }
  
    appendTuplaToResultado(newTupla) {
      this.resultado += newTupla;
    }
  }
  
  module.exports = ParserJson;
  