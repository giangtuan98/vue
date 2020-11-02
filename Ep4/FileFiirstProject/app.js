new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    maxMonsterDamage: 10,
    minMonsterDamage: 4,
    maxPlayerDamage: 14,
    minPlayerDamage: 3,
    turns: [],
  },
  methods: {
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameIsRunning = true;
      this.turns = [];
    },
    stopGame() {
      this.gameIsRunning = false;
    },
    attack() {
      if (this.checkPlayerOptions()) {
        return;
      }

      this.monsterAttack();

      let dam = this.inputDamage(this.minPlayerDamage, this.maxPlayerDamage);

      this.log({
        isPlayer: true,
        textLog: "Player hits monster for " + dam,
      });

      this.monsterHealth -= dam;

      this.checkPlayerOptions();
    },
    specialAttack() {
      if (this.checkPlayerOptions()) {
        return;
      }

      let damage = this.inputDamage(
        this.minPlayerDamage + 5,
        this.maxPlayerDamage + 5
      );
      this.monsterHealth = damage;
      this.log({
        isPlayer: true,
        textLog: "Player hits monster for " + dam,
      });

      this.monsterAttack();

      this.checkPlayerOptions();
    },
    heal() {
      if (this.checkPlayerOptions()) {
        return;
      }

      if (this.playerHealth < 70) {
      } else if (this.playerHealth <= 60) {
        this.log({
          isPlayer: true,
          textLog: "Player heal for " + dam,
        });
      } else {
        this.playerHealth = 70;
      }

      this.monsterAttack();
    },
    giveUp() {
      if (!this.gameIsRunning) {
        return;
      }

      if (confirm("Are you sure you want to give up")) {
        this.playerHealth = 0;
        this.gameIsRunning = false;
        this.checkPlayerOptions();
      }
    },
    monsterAttack() {
      let damage = this.inputDamage(
        this.minMonsterDamage,
        this.maxMonsterDamage
      );

      this.playerHealth -= damage;

      this.log({
        isPlayer: false,
        textLog: "Monster hits player for " + damage,
      });
    },
    log(logContent) {
      this.turns.unshift(logContent);
    },
    checkPlayerOptions() {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! Play new game?")) {
          this.startNewGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }

      if (this.playerHealth <= 0) {
        if (confirm("You lost! Play new game?")) {
          this.startNewGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }

      return false;
    },
    inputDamage(minDamage, maxDamage) {
      return Math.max(Math.floor(Math.random() * maxDamage + 1), minDamage);
    },
  },
});
