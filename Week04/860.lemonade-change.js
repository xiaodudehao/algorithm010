/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;
    let length = bills.length;
    for(let i = 0; i < length; i++){
        if(bills[i] === 5){
            five++
        }else if(bills[i] === 10){
            if(five === 0){
                return false
            }
            five--;
            ten++;
        }else{
            if(five > 0 && ten > 0){
                five--;
                ten--;
            }else if(five > 2){
                five -=3
            }else{
                return false
            }
        }
    }
    return true;
};