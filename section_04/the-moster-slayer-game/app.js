const getRandomValue = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
// Math.floor(Math.random() * (min - max)) + min;

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },

  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },

  methods: {
    attackMoster() {
      this.currentRound++;
      // const attachValue = getRandomValue(5, 12);
      // this.monsterHealth -= attachValue;
      this.monsterHealth -= getRandomValue(5, 12);
      this.attackPlayer();
    },
    attackPlayer() {
      // const attachValue = getRandomValue(8, 15);
      // this.playerHealth -= attachValue;
      this.playerHealth -= getRandomValue(8, 15);
    },
    specialAttackMoster() {
      this.currentRound++;
      // const attachValue = getRandomValue(10, 25);
      // this.monsterHealth -= attachValue;
      this.monsterHealth -= getRandomValue(10, 25);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
        return;
      }
      this.playerHealth += healValue;
      this.attackPlayer();
    },
  },
});

app.mount("#game");
