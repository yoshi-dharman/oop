class Enemy{
    constructor(name, speed, healthPoint, attackPoint, isDead){
        this.name = name;
        this.speed = speed;
        this.healthPoint = healthPoint;
        this.attackPoint = attackPoint;
        this.isDead = isDead;
    }

    attack(){
        console.log("Attack!");
    }

    confused(){
        console.log("Confused");
    }
    
    attacked(damage){
        this.healthPoint -= damage;
        console.log(`${this.name} attacked, hp - ${damage}`);
        console.log(`${this.name} hp remain = ${this.healthPoint}`);
        if (this.healthPoint <=0){
            this.isDead = true;
            console.log(`${this.name} is Dead`);
        }
        
    }
}

class Pocong extends Enemy{
    constructor(name, speed, healthPoint, attackPoint, isDead){
        super(name, speed, healthPoint, attackPoint, isDead);
    }

    jump(){
        console.log(`${this.name} Jump!`);
    }

    supperJump(){
        console.log(`${this.name} Supper Jump!`);
    }

    attack(){
        console.log(`${this.name} Attack!`);
    }

}

class Zombie extends Enemy{
    walk(){
        if(this.speed == 20){
            this.speed -= 10;
            console.log(`${this.name} turn to walk from running`);
        }
        console.log(`${this.name} Walk!`);
    }

    running(){
        if(this.speed == 20){
            console.log(`${this.name} already at top speed`);
        }
        else{
            this.speed += 10;
            console.log(`${this.name} Running!`);
        }
    }

    attack(){
        console.log(`${this.name} Zombie Horde with ${this.attackPoint} attack point!`);
    }

    infected(){
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