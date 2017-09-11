const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init () {
  for (let x = 0; x < code.length; x++) {
    var body = document.querySelector('body');
    body.addEventListener('keydown', function(e) {
      const key = parseInt(e.detail || e.which);

      if (key === code[index]) {
        index++;
        if (index === code.length){
          alert('Yes!');

          index = 0;
        }
      }
      else {
        index = 0;

      }
      });
    }
init();