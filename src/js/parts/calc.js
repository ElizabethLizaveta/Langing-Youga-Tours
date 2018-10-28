function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if(restDays.value == '' || restDays.value == 0 || persons.value == '' || persons.value == 0) {
            totalValue.innerHTML = 0;
        } else {
           totalValue.innerHTML = total;
        }
    });
    
    restDays.addEventListener('change', function() {
       daysSum = +this.value;
       total = (daysSum + personsSum)*4000;

       if(persons.value == '' || persons.value == 0 || restDays.value == '' || restDays.value == 0) {
           totalValue.innerHTML = 0;
       } else {
          totalValue.innerHTML = total;
       }
   });

   place.addEventListener('change', function() {
       if (persons.value == '' || persons.value == 0 || restDays.value == '' || restDays.value == 0) {
       totalValue.innerHTML = 0;
       } else {
           let a = total;
           totalValue.innerHTML = a * this.options[this.selectedIndex].value;
       }
   });

   
   function checkinput (input) {
       input.addEventListener('keyup', () => {
           let value = input.value;
           let forbid = /[d.+aA-zZ]/;
           if (forbid.test(input.value)) value = value.replace(forbid, '');
           input.value = value;
       });
   }

   checkinput (persons);
   checkinput(restDays);
}

export {calc};