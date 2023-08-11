var centi = document.getElementById('centimeter');
var meter = document.getElementById('meter');

meter.addEventListener('input',function(){
    let m= this.value;
    let c = m*100;
    centi.value =c;
});

centi.addEventListener('input',function(){
    let c = this.value;
    // centimeter vaue = 100
    let m = c/100;
   meter.value=m;
});


