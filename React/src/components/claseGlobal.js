import React from "react";

export default class vuelo {
    constructor(fecha1,destino,origen) {
        this.fecha1 = fecha1
        this.destino = destino
        this.origen = origen
    }
    setFecha1(fecha1) {
        this.fecha1 = fecha1
    }
    setDestino(destino) {
        this.destino = destino
    }
    setOrigen(origen) {
        this.origen = origen
    }
    setFecha2(fecha2) {
        this.fecha2 = fecha2
    }
    getFecha1(){
        return this.fecha1
    }
}

