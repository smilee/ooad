class Guitar {
  constructor (serialNumber, price, builder, model, type, backWood, topWood) {
    this._serialNumber = serialNumber
    this._price = price
    this._builder = builder
    this._model = model
    this._type = type
    this._backWood = backWood
    this._topWood = topWood
  }
  
  get serialNumber () {
    return serialNumber
  }
  get price () {
    return price
  }
  set price (newPrice) {
    price = newPrice
  }
  get builder () {
    return builder
  }
  get model () {
    return model
  }
  get type () {
    return type
  }
  get backWood () {
    return backWood
  }
  get topWood () {
    return topWood
  }
}
