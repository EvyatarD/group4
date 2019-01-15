
function getFindsStr(phrase, letters)
{
    var arrPhrase = phrase.split('');
   console.log(letters);

}



function isInPhrase(phrase, letter)

{
    var arrPhrase = phrase.split('').splice(' ');
    return (arrPhrase.indexOf('letter') == -1 ? false : true);
}

function isWon(phrase, letters)

{

}

// function runGame(phrases)
// {

    var life = 10;
    var won = true;
    var letters = [];
    var letter = 'a';
    var phrases =["Robert De Niro","Jack Nicholson","Tom Hanks","Marlon Brando","Leonardo DiCaprio","Johnny Depp","Dustin Hoffman","Tom Cruise","Brad Pitt","Denzel Washington","Al Pacino"];
    var phrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    console.log(arrPhrase);

  

    // while (life>0 && won)
    // {
    //     console.log("your life: ",life );

     //    letter.push(letter);
    //     const finds = getFindsStr(phrase, letters);

        

    // }

    

// }
