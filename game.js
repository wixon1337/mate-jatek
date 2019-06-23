let readline = require('readline-sync');

const getName = () => {
  return readline.question('Add meg a neved psl: ');
};

const welcome = (str) => {
  console.log('Üdvözlégy', str);
};

const choseYourWeapon = (wep, prop, prop2, wep2, wep3) => {
  let answer;
  while (answer !== 'y') {
    let diff = readline.question('Válassz magadnak fegyvert:\n1: shadowmourne(easy)\n2: Recruit\'s sword(normal)\n3: pencil(impossible)\n');
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

const fight = (enemy, damage, health, name, life, wep, mind, maxd) => {
  while (enemy[health] >= 0) {
    if (life <= 0) {
      console.log('Meghaltál');
      console.log('GAME OVER');
      return -1;
    }
    let command = readline.question('Mit szeretnél csinálni? 1: Támadás 2: Védekezés 3: Futás');
    if (command === '1') {
      console.log(enemy[name], 'health: ', enemy[health]);
      let yourDamage = Math.floor(Math.random() * (wep[maxd] - wep[mind] + 1) + wep[mind]);
      console.log('-', yourDamage, 'sebzés');
      enemy[health] -= yourDamage;
      console.log('Maradt neki:', enemy[health]);
      console.log('\n');
      if (enemy[health] <= 0) {
        console.log(enemy[name], 'meghalt');
        break;
      } else {
        console.log(enemy[name], 'üt téged:');
        console.log('-', enemy[damage]);
        life -= enemy[damage];
        console.log('Élet pontod maradt: ', life);
      }
    } else if (command === '3') {
      console.log('Csicska vagy.');
      console.log('GAME OVER');
      return -1;
    } else if (command === '2') {
      console.log(enemy[name], 'üt téged:');
      let blockedDamage = Math.floor(enemy[damage] / 2);
      console.log('-', blockedDamage, '(', blockedDamage, ' blocked)');
      life -= blockedDamage;
      console.log('Élet pontod maradt: ', life);
      console.log('\n');
      console.log(enemy[name], 'health: ', enemy[health]);
      let yourDamage = wep[mind];
      console.log('Visszaütsz:\n-', yourDamage, 'sebzés');
      enemy[health] -= yourDamage;
      console.log('Maradt neki:', enemy[health]);
      if (enemy[health] <= 0) {
        console.log(enemy[name], 'meghalt');
        break;
      }
    }
    console.log('----------------------------------------------------------');
  }
  return life;
};

const hydraFight = (enemy, damage, health, name, life, wep, mind, maxd) => {
  while (enemy[health] >= 0) {
    if (life <= 0) {
      console.log('Meghaltál');
      console.log('GAME OVER');
      return -1;
    }
    let command = readline.question('Mit szeretnél csinálni? 1: Támadás 2: Védekezés 3: Futás');
    if (command === '1') {
      console.log(enemy[name], 'health: ', enemy[health]);
      let yourDamage = Math.floor(Math.random() * (wep[maxd] - wep[mind] + 1) + wep[mind]);
      console.log('-', yourDamage, 'sebzés');
      enemy[health] -= yourDamage;
      console.log('Maradt neki:', enemy[health]);
      console.log('\n');
      if (enemy[health] <= 0) {
        console.log(enemy[name], 'meghalt');
        break;
      } else {
        if (enemy[health] < 60) {
          console.log(enemy[name], 'egyik feje leesett.');
          enemy[damage] = 6;
        }
        if (enemy[health] < 30) {
          console.log(enemy[name], '-nak már csak 1 feje van.');
          enemy[damage] = 3;
        }
        console.log(enemy[name], 'üt téged:');
        console.log('-', enemy[damage]);
        life -= enemy[damage];
        console.log('Élet pontod maradt: ', life);
      }
    } else if (command === '3') {
      console.log('Csicska vagy.');
      console.log('GAME OVER');
      return -1;
    } else if (command === '2') {
      if (enemy[health] < 60) {
        console.log(enemy[name], 'egyik feje leesett.');
        enemy[damage] = 6;
      }
      if (enemy[health] < 30) {
        console.log(enemy[name], '-nak már csak 1 feje van.');
        enemy[damage] = 3;
      }
      console.log(enemy[name], 'üt téged:');
      let blockedDamage = Math.floor(enemy[damage] / 2);
      console.log('-', blockedDamage, '(', blockedDamage, ' blocked)');
      life -= blockedDamage;
      console.log('Élet pontod maradt: ', life);
      console.log('\n');
      console.log(enemy[name], 'health: ', enemy[health]);
      let yourDamage = wep[mind];
      console.log('Visszaütsz:\n-', yourDamage, 'sebzés');
      enemy[health] -= yourDamage;
      console.log('Maradt neki:', enemy[health]);
      if (enemy[health] <= 0) {
        console.log(enemy[name], 'meghalt');
        break;
      }
    }
    console.log('----------------------------------------------------------');
  }
  return life;
};

const thanosFight = (enemy, damage, health, name, life, wep, mind, maxd) => {
  while (enemy[health] >= 0) {
    if (life <= 0) {
      console.log('Meghaltál');
      console.log('GAME OVER');
      return -1;
    }
    let command = readline.question('Mit szeretnél csinálni? 1: Támadás 2: Védekezés 3: Futás');
    if (command === '1') {
      console.log(enemy[name], 'health: ', enemy[health]);
      let yourDamage = Math.floor(Math.random() * (wep[maxd] - wep[mind] + 1) + wep[mind]);
      console.log('-', yourDamage, 'sebzés');
      enemy[health] -= yourDamage;
      console.log('Maradt neki:', enemy[health]);
      console.log('\n');
      if (enemy[health] <= 0) {
        console.log(enemy[name], 'meghalt');
        break;
      } else {
        console.log(enemy[name], 'üt téged:');
        console.log('-', enemy[damage]);
        life -= enemy[damage];
        console.log('Élet pontod maradt: ', life);
      }
    } else if (command === '3') {
      console.log('Csicska vagy.');
      console.log('GAME OVER');
      return -1;
    } else if (command === '2') {
      console.log(enemy[name], 'üt téged:');
      let blockedDamage = Math.floor(enemy[damage] / 2);
      console.log('-', blockedDamage, '(', blockedDamage, ' blocked)');
      life -= blockedDamage;
      console.log('Élet pontod maradt: ', life);
      console.log('\n');
      console.log(enemy[name], 'health: ', enemy[health]);
      let yourDamage = wep[mind];
      console.log('Visszaütsz:\n-', yourDamage, 'sebzés');
      enemy[health] -= yourDamage;
      console.log('Maradt neki:', enemy[health]);
      if (enemy[health] <= 0) {
        console.log(enemy[name], 'meghalt');
        break;
      }
    }
    console.log('----------------------------------------------------------');
  }
  return life;
};

const randomEnemy = (enemy1, enemy2, enemy3) => {
  switch (Math.floor(Math.random() * 3 + 1)) {
    case 1: return enemy1;
    case 2: return enemy2;
    case 3: return enemy3;
  }
};

const kiiratas = (str) => {
  for (let i = 0; i < str.length; i++) {
    setInterval(() => { process.stdout.write(str[i]); }, 1000);
    // process.stdout.write(str[i]);
  }
};

module.exports = {
  readline,
  getName,
  welcome,
  choseYourWeapon,
  fight,
  randomEnemy,
  hydraFight,
  thanosFight,
  kiiratas
};
