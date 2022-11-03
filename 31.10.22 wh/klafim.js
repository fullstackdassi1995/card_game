let sachkan1 = 0
let computer = 0

while(true){
    
    play1(Math.ceil((Math.random()+0.001)*12), Math.ceil( (Math.random()+0.001)*12) )
            
    function play1(x , y){
        switch (x , y) {
            case 10:
                console.log(`sachkan : J`);
                break;
            case 11:
                console.log(`sachkan : Q`);
                break;
            case 12:
                console.log(`sachkan : k`);
                break;
            case 1:
                console.log(`sachkan : A`);
                break;
            default: console.log(`sachkan : ${x} `);
                break;
        }
        switch (y) {
            case 10:
                console.log(`computer : J`);
                break;
            case 11:
                console.log(`computer : Q`);
                break;
            case 12:
                console.log(`computer : k`);
                break;
            case 1:
                console.log(`computer : A`);
                break;
            default: console.log(`computer : ${y}`);
                break;
        } 
        
        if (x !== y)  {    
        x > y ? sachkan1++  +console.log("player won"): computer++ +console.log("computer won");
        console.log(`points sachkan are ${sachkan1} , points computre are ${computer}`);
        }
        else console.log("Equally, no one wins");
    }

    if (sachkan1 == 5 || computer == 5){
        sachkan1 > computer ? console.log("sachkan winn!") : console.log("computer winn!");
        if (sachkan1 == computer){console.log("There are no winners in this game :(")};
        break;
    }
}        

