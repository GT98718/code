let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let age = 19;
if(registeredEarly && age > 18){
  raceNumber += 1000;
}

if(registeredEarly && age > 18){
  console.log('Race will begin at 9:30, your race number is' + raceNumber);
}

    switch(athleteFinalPosition = 'first place')
{
        case "first place":
            console.log('You get the gold medal');
            break;
            case "second place":
                console.log('You get the silver medal');
                break;
                case "third place":
                    console.log('You get the bronze medal');
                    break;



                    default:
                        console.log('No medal is awarded');
}