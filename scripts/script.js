
 var win_combination = 66;
 var input_number;
 var i = 1;
 while(input_number != win_combination){
   input_number = +prompt('Guess number from 1 to 100');
   if( !isNaN(input_number) && input_number >= 0 && input_number <= 100){
     if(input_number == win_combination){
       alert("U win from " + i + " attempts! CONGRATS");
     }else{
       var input_err =  input_number > win_combination ? 'Ur number is more then guessing number!' : 'Ur number is less then guessing number';
       alert(input_err);
       i++;
           }
   }else{
     alert("Write correct numbers");
         }
  }
