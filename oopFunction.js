function Enemy(name, speed, healthPoint, attackPoint, isDead){
    this.name = name;
    this.speed = speed;
    this.healthPoint = healthPoint;
    this.attackPoint = attackPoint;
    this.isDead = isDead;

    this.attack = function(){
        return "Attack";
    }

    this.confused = function () {
        return "Confused";
    }

    this.attacked = function (damage) {
        this.healthPoint -= damage;
        console.log(`${this.name} attacked, hp - ${damage}`);
        console.log(`${this.name} hp remain = ${this.healthPoint}`);
        if (this.healthPoint <=0){
            this.isDead = true;
            console.log(`${this.name} is Dead`);
        }
    }
}

function Pocong(name, speed, healthPoint, attackPoint, isDead) {
    Enemy.call(this, name, speed, healthPoint, attackPoint, isDead);

    this.jump = function(){
        console.log(`${this.name} Jump!`);
    }

    this.supperJump = function(){
        console.log(`${this.name} Supper Jump!`);
    }

    this.attack = function(){
        console.log(`${this.name} Attack!`);
    }
}

function Zombie(name, speed, healthPoint, attackPoint, isDead){
    Enemy.call(this, name, speed, healthPoint, attackPoint, isDead);

    this.walk = function () {
        if(this.speed == 20){
            this.speed -= 10;
            console.log(`${this.name} turn to walk from running`);
        }
        console.log(`${this.name} Walk!`);
    }

    this.running = function () {
        if(this.speed == 20){
            console.log(`${this.name} already at top speed`);
        }
        else{
            this.speed += 10;
            console.log(`${this.name} Running!`);
        }
    }

    this.attack = function(){
        console.log(`${this.name} Zombie Horde with ${this.attackPoint} attack point!`);
    }

    this.infected = function(){
        console.log(`${this.name} Palague!!`);
    }
}

let zombie_man = new Zombie("ZombieMan", 10, 100, 10, false);
let popocong = new Pocong("Popo", 10, 150, 10, false);

zombie_man.attack();
popocong.supperJump();

zombie_man.attacked(30);
zombie_man.attacked(15);
zombie_man.attacked(100);