class Target {
  request() {
    return 'Target: The default target\'s behavior.';


    
  }
}

class Adaptee {
  specificRequest() {
    return '.eetpadA eht fo roivaheb laicepS';
  }
}

class Adapter extends Target {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request() {
    return `Adapter: (TRANSLATED) ${this.adaptee.specificRequest()}`;
  }
}
