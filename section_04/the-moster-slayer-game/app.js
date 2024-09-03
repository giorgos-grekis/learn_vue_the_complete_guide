// class WinnerClass {
//   // Private Fields
//   static #_DRAW = "draw";
//   static #_MONSTER = "monster";
//   static #_PLAYER = "player";

//   // Accessors for "get" functions only (no "set" functions)
//   static get DRAW() {
//     return this.#_DRAW;
//   }

//   static get MONSTER() {
//     return this.#_MONSTER;
//   }

//   static get PLAYER() {
//     return this.#_PLAYER;
//   }
// }

const getRandomValue = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
// Math.floor(Math.random() * (min - max)) + min;

/**
 * Enum for winner
 * @readonly
 * @enum string
 */
const Winner = Object.freeze({
  DRAW: "draw",
  MONSTER: "monster",
  PLAYER: "player",
});

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
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

  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // draw
        this.winner = Winner.DRAW;
      }
      if (value <= 0) {
        //Player lost
        this.winner = Winner.MONSTER;
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // draw
        this.winner = Winner.DRAW;
      }
      if (value <= 0) {
        // Monster lost
        this.winner = Winner.PLAYER;
      }
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
        this.attackPlayer();
        return;
      }
      this.playerHealth += healValue;
      this.attackPlayer();
    },
  },
});

app.mount("#game");
