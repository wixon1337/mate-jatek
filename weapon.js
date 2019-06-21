let readline = require('readline-sync');

let shadowmourne = {
  minDamage: 50,
  maxDamage: 75,
  special: 200,
  get minD () {
    return this.minDamage;
  },
  set minD (minD) {
    this.minDamage = minD;
  },
  get maxD () {
    return this.maxDamage;
  },
  get spec () {
    return this.special;
  }
};

let recruitShortsword = {
  minDamage: 25,
  maxDamage: 50
};

let pencil = {
  minDamage: 5,
  maxDamage: 10
};

module.exports = {
  readline,
  shadowmourne,
  recruitShortsword,
  pencil
};
