class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
    }
    
    get temperature() {
      // To return celcius temp
      return (5 / 9) * (this._fahrenheit - 32);
    }
    
    set temperature(celsius) {
      return this._fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26; // returns the value of 76
  temp = thermos.temperature; // 26 in Celsius