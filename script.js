const randomDamage = () => Math.floor((Math.random() * 10) + 1);
const chooseOption = (opt1, opt2) => {
    let randomNum = Math.floor(Math.random() *2);
    return (randomNum === 0 ? opt1 : opt2);
}

function attackPlayer(health){
    return health = health - randomDamage();
}

const logHealth = (playerName, health) => console.log(`${playerName} has ${health} health remaining`);
const logDeath = (winner, loser) => console.log (`${winner} has punched ${loser} back to the third grade`);
const isDead = (health) => health <= 0 ? true : false;

function fight(player1Name, player2Name, player1Health, player2Health){
    while (true){
        let attacker = chooseOption(player1Name , player2Name);
        if (attacker === player1Name){
            player2Health = attackPlayer(player2Health);
            logHealth (player2Name, player2Health);
            isDead (player2Health);
            if (isDead(player2Health) === true){
                logDeath(player1Name, player2Name);
                break;
            }
        } else {
            player1Health = attackPlayer (player1Health);
            logHealth(player1Name, player1Health);
            isDead(player1Health);
            if (isDead(player1Health) === true){
                logDeath(player2Name, player1Name);
                break;
            }
        }
    }
}
console.log(fight("seth", "dave", 100,100)); 



