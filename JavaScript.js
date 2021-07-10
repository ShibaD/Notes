// クラス
// 構成要素
// 属性：プロパティ（hp, offence, defense, speed）
// 操作/処理：メソッド（attack(), escape()）

class Monster {
  constructor(hp, offense, defense, speed) {
    this.hp = hp;
    this.offense = offense;
    this.defense = defense;
    this.speed = speed;
  }
  attack() {}
  escape() {
    if (this.speed <= 10) {
      console.log("しかし、回り込まれてしまった！");
    }
  }
}

class Pikachu extends Monster {}

class Bucho extends Monster {
  escape() {
    console.log("部長は逃げられません。");
  }
  constructor(hp, offense, defense, speed, special) {
    super(hp, offense, defense, speed);
    this.special = special;
  }
}

const bucho1 = new Bucho(100, 10, 10, 10, "定時退社");
const bucho2 = new Bucho(200, 20, 20, 20, "タバコ休憩");

// ****************************************************

const bucho1_hp = 100;
const bucho1_offense = 10;
const bucho1_defense = 10;
const bucho2_hp = 200;
const bucho2_offense = 20;
const bucho2_defense = 20;

console.log(bucho1.special);
console.log(bucho2.special);

// ****************************************************
// 関数
// ルール：関数は、カッコを付けると実行する

function greet_morning() {
  console.log("おはようございます！");
}

const greet_afternoon = () => {
  console.log("はよ寝ろや");
};

const greet_night = () => {
  console.log("おやすみなさい！");
};

class Pepper {
  greet(function_morning, function_afternoon, function_night) {
    const now = new Date().getHours();
    if (now >= 8 && now < 12) {
      function_morning();
    } else if (now >= 12 && now < 18) {
      function_afternoon();
    } else {
      function_night();
    }
  }
}

const myPepper = new Pepper();
// 変数を渡すように、関数を渡す（関数の名前を渡す）
// myPepper.greet(greet_morning, greet_afternoon, greet_night);

// greet_morning()と括弧をつけてしまうと、直ぐに実行されちゃう
// myPepper.greet(greet_morning(), greet_afternoon(), greet_night);
