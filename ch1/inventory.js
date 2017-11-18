class Inventory {
  constructor () {
    this._guitars = new LinkedList()
  }

  addGuitar (serialNumber, price, builder, model, type, backwood, topwood) {
    let guitar = new Guitar(serialNumber, price, builder, model, type, backWood, topWood)
    guitars.add(guitar)
  }
  get Guitar (serialNumber) {
    for (let i = guitars.iterator(); i.hasNext();) {
      let guitar = i
      if (guitar.getSerialNumber() === serialNumber) {
        return guitar
      }
    }
    return null
  }
  search (searchGuitar) {
    for (let i = guitars.iterator(); i.hasNext();) {
      let guitar = i
      // 일련번호와 가격은 유일한 값이라 무시
      let builder = searchGuitar.getBuilder()
      if ((builder !== null) && (builder !== guitar.getBuilder())) {
        continue
      }
      let model = searchGuitar.getModel()
      if ((model !== null) && (model !== guitar.getModel())) {
        continue
      }
      let type = searchGuitar.getType()
      if ((type !== null) && (type !== guitar.getType())) {
        continue
      }
      let backWood = searchGuitar.getBackWood()
      if ((backWood !== null) && (backWood !== guitar.getBackWood())) {
        continue
      }
      let topWood = searchGuitar.getTopWood()
      if ((topWood !== null) && (topWood !== guitar.getTopWood())) {
        continue
      }
      return guitar
    }
    return null
  }
}


if( searchSpec.getBuilder() !== this._builder ) return false;
    if( searchSpec.getType() !== this._type ) return false;
    if( searchSpec.getBackWood() !== this._backWood ) return false;
    if( searchSpec.getTopWood() !== this._topWood ) return false;

switch (true) {
  case searchSpec.getBuilder() !== this._builder:
    return false
  case searchSpec.getBackWood() !== this._backWood:
    return false
    break
  default:

}
