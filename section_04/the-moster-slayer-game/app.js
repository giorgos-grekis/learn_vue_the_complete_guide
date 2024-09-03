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
      logMessages: [],
    };
  },

  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
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
    newGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    attackMoster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "attack", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage("monster", "attack", attackValue);
    },
    specialAttackMoster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "attack", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
        this.addLogMessage("player", "heal", healValue);
        this.attackPlayer();
        return;
      }
      this.playerHealth += healValue;
      this.addLogMessage("player", "heal", healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = Winner.MONSTER;
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
