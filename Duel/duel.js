class Card{
    constructor(name, cost){
        this.name=name;
        this.cost=cost;
    }
}
class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
        target.res-=this.power;
        console.log(target.res);
    }
}
class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
    }
    play(target){
        if (target instanceof Unit){
            if (this.stat == "power"){
                target.power+=this.magnitude;
                console.log(target.power);
            }else{
                console.log(target.res);
                target.rest+=this.magnitude;
                console.log(target.res);
            }
        }
        else{
            throw new console.error("Target must be a Unit!");
        }
    }
}

var ninja1 = new Unit("Red Belt Ninja",3,3,4);
var ninja2 = new Unit("Black Belt Ninja",4,5,4);
const card = new Effect("Hard Algorithm",2,"Increase target's resilience by 3", "resilience",3);
const card2 = new Effect("Unhandled Promise Rejection",1,"Increase target's resilience by 2", "resilience",-2);
const card3 = new Effect("Pair Programming",3,"increase target's power by 2	", "power",3);
card.play(ninja1);
card2.play(ninja1);
card3.play(ninja1);
ninja1.attack(ninja2);