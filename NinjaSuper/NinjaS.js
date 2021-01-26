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

class Sensi extends Ninja{
    constructor(name, wisdom=10){
        super(name,200,10,10);
        this.wisdom=wisdom;
    }
    speakWisdom(){
        super.drinkShake();
        console.log("take a step back");
    }
}
const superSensi = new Sensi("Master Splinter");
superSensi.speakWisdom();
superSensi.sayStat();
