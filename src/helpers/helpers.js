export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word){
  let status = 'win';

  // check for a win

  word.split('').forEach(letter => {
    if(!correct.includes(letter)){
      status = '';
    }
  })

  // check for loss

  if(wrong.length === 6) status = 'lose';

  return status;
}

export function library(){
 return ['aquiver', 'mellifluous', 'ineffable', 'hiraeth']
//  ['hei', 'Nakemiin', 'kylla', 'ei', 'kiitos', 'Ei kesta', 'anteeksi', 'hauska tavata'] finnish option
}