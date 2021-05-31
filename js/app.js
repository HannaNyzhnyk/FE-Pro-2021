function Auto(brand, model, issue, vinCode) {
    this.brand = brand;
    this.model = model;
    this.issue = issue;
    this.vinCode = vinCode;
}

Auto.prototype.log = function() {
    console.log(`марка: ${this.brand}, модель: ${this.model}, рік випуску: ${this.issue}, він-код: ${this.vinCode}`);
}

Auto.prototype.checkVin  = function() {
    let code  = this.vinCode;
    if (code.length === 16){
        return true;
    } else {
        return false;
    }
}

function Auto_Fuel(brand, model, issue, vinCode, engineVolume, consumption) {
    this.brand = brand;
    this.model = model;
    this.issue = issue;
    this.vinCode = vinCode;
    this.engineVolume = engineVolume;
    this.consumption = consumption;
}

Auto_Fuel.prototype = Object.create(Auto.prototype)

Auto_Fuel.prototype.showFuelConsumption = function(){
    return console.log(`объем двигателя:${this.engine_volume}, расход:${this.engineVolume}л.`)
}

function Auto_Electric(brand, model, issue, vinCode, batteryСapacity) {
    this.brand = brand;
    this.model = model;
    this.issue = issue;
    this.vinCode = vinCode;
    this.batteryСapacity = batteryСapacity;
}

Auto_Electric.prototype = Object.create(Auto.prototype)

Auto_Electric.prototype.showBatteryConfig = function(){
    return console.log(`емкость батареи:${this.batteryСapacity}`)
}