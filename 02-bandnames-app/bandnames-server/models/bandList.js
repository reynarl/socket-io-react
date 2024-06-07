const Band = require("./band");


class BandList {
  constructor() {
    this.bands = [
      new Band('Metallica'),
      new Band('BMTH'),
      new Band('DPR')
    ]
  }

  addBand(name) {
    const newBand = new Band(name);
    this.bands.push(newBand);
    return this.bands
  }

  removeBand(id) {
    this.bands = this.bands.filter(band =>
      band.id !== id
    )
  }

  getBands() {
    return this.bands
  }

  increaseVotes(id) {
    this.bands = this.bands.map(band => {
      if (band.id === id) {
        band.votes += 1
      }

      return band
    })
  }

  changeName(id, newName) {
    this.bands = this.bands.map(band =>
      band.id === id && band.name == newName
    )
  }
}

module.exports = BandList;