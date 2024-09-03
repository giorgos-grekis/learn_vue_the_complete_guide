const getRandomValue = (min, max) =>
  Math.floor(Math.random() * (min - max)) + min;

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },

  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
  },

  methods: {
    attackMoster() {
      //   const attachValue = getRandomValue(5, 12);
      //   this.monsterHealth -= attachValue;
      this.monsterHealth -= getRandomValue(5, 12);
      this.attackPlayer();
    },
    attackPlayer() {
      //   const attachValue = getRandomValue(8, 15);
      //   this.playerHealth -= attachValue;
      this.playerHealth -= getRandomValue(8, 15);
    },
  },
});

app.mount("#game");
