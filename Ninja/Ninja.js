class Ninja {
    constructor(name,health,speed=3,strength=3){
        this.name= name;
        this.health= health;
        this.speed= speed;
        this.strength= strength;
    }
    sayName(){
        console.log(this.name);
    }
    sayStat(){
        console.log(this.name,this.health,this.speed,this.strength);
    }    
    drinkShake(){
        console.log(this.health+10);
    }
}
var ninja1 = new Ninja("Lina", 100);
ninja1.sayName();
ninja1.sayStat();
ninja1.drinkShake();
