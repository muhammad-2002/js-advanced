///curring function
function discount(dis){
    return function(prise){
         console.log(prise -prise*dis)

    }

}

let tenpersentDidcount =discount(.1);
let customer1 = tenpersentDidcount(560)
let customer2 = tenpersentDidcount(760)
let customer3 = tenpersentDidcount(860)
let customer4 = tenpersentDidcount(860)