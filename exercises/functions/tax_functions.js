var calculate_tax = function getSocSecTax() {
    var total;
    var income = parseFloat( $("income").value );
    $("tax").value =  calcTaxes(income);
    console.log(tax);
    function calcTaxes(amount){
    var calculate = 0;
    if(amount > 85650){
        tax = (amount - 85650) * .28 + 870.0+(35350-8700)*.15+(89350-36900)*.25;
    }
    else if( amount > 35350){
    tax = (amount - 35350) * .25 + 870.0+(35350-8700)*.15;    
    }
    else if(amount > 8700){
    tax = (amount - 8700) * .15 + 870.0;
    }
    else{
       tax = amount * .10;
        }
    tax += amount * .153;
    return tax;
    
}}