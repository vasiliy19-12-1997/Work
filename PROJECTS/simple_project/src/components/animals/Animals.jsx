import React, { Component } from "react";

class Animals extends Component {
  render() {
    return <div>Elefanввt</div>;
  }
}

export default Animals;
class Elefant {
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    prompt(`${this.name} бежит со скоростью ${this.speed}`);
  }
  stop() {
    this.speed = 0;
    prompt(`${this.name} стоит`);
  }
}
let vasya = new Elefant(`Vasya`, 50);
console.log(vasya);
