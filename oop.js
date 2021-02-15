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
    
}

class Pocong extends Enemy{
    jump(){
        console.log("Jump!");
    }

    supperJump(){
        console.log("Supper Jump!");
    }

    attack(){
        console.log("Pocong Attack!");
    }
}

class Zombie extends Enemy{
    walk(){
        console.log("Walk!");
    }

    running(){
        console.log("Running!");
    }

    attack(){
        console.log("Zombie Attack!");
    }

    infected(){
        console.log("Palague!!");
    }
}

let zombie_man = new Zombie("ZombieMan", 10, 100, 10, false);
let popocong = new Pocong("Popo", 10, 150, 10, false);

zombie_man.attack();
popocong.supperJump();