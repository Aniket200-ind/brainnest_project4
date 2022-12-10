let dispValue = "";
let buttons = document.querySelectorAll('.btn');
let output = document.querySelector('#disp-result');
let arrayButtons = Array.from(buttons);
let period = document.querySelector('.period').textContent;


//looping through the array of buttons
arrayButtons.forEach((button)=>{
  button.addEventListener('click', (btnValue)=>{
    switch(btnValue.target.textContent){
      case '=':
          dispValue = eval(dispValue);
          output.value = dispValue;
          break;

      case 'C':
          dispValue = ""
          output.value = dispValue;
          break;
          
          case 'DEL':
            dispValue = dispValue.slice(0, -1);
            output.value = dispValue;
          break;

      default:
        dispValue = dispValue + btnValue.target.textContent;
        output.value = dispValue;
        break;
    }
    // if(btnValue.target.innerHTML == '='){
    //   dispValue = eval(dispValue);
    //   document.querySelector('#answerstyle').value = dispValue;
    // }
    // else if(btnValue.target.innerHTML == 'C'){
    //   dispValue = ""
    //   document.querySelector('#answerstyle').value = dispValue;
    // }else if(btnValue.target.innerHTML == 'DEL'){
    // }
    // else{ 
    // dispValue = dispValue + btnValue.target.innerHTML;
    // document.querySelector('#answerstyle').value = dispValue;
    //   }
  });
});