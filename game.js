let readline = require('readline-sync');

const getName = () => {
  return readline.question('Add meg a neved psl: ');
};

const welcome = (str) => {
  console.log('Üdvözlégy', str);
};

const choseYourWeapon = (name, wep, prop, prop2, wep2, wep3) => {
  let answer;
  while (answer !== 'y') {
    let diff = readline.question('Válassz magadnak fegyver:\n1: shadowmourne(easy)\n2: Recruit\'s sword(normal)\n3: pencil(impossible)\n', name);
    while (diff > 3 || diff <= 0) {
      diff = readline.question('Ezek közül válissz már:\n1: shadowmourne(easy)\n2: Recruit\'s sword(normal)\n3: pencil(impossible)\n');
    }
    switch (diff) {
      case '1': console.log('Weapon damage: ', wep[prop], '-', wep[prop2]);
        break;
      case '2': console.log('Weapon damage: ', wep2[prop], '-', wep2[prop2]);
        break;
      case '3': console.log('Weapon damage: ', wep3[prop], '-', wep3[prop2]);
        break;
    }
    answer = readline.keyIn('Biztos? y/n', { limit: ['y', 'n'] });
    if (answer === 'y') {
      if (diff === '1') {
        return wep;
      } else if (diff === '2') {
        return wep2;
      } else if (diff === '3') {
        return wep3;
      }
    }
  }
};

const firstEncounter = (wep, prop) => {
  wep[prop] -= 10;
};

module.exports = {
  readline,
  getName,
  welcome,
  choseYourWeapon,
  firstEncounter
};
