// function sayHello(name) {
//   console.log('Hi ' + name);
// }

const sayHello = (name) => {
  console.log('Hi ' + name);
}

const sayHello2 = (greeting, name = 'JL') => {
  console.log(greeting + ' ' + name);
}

const sayHello3 = () => {
  console.log('Hi JL');
}

const sayHello4 = (name) => {
  return 'Hi ' + name;
}

const checkInput = (cb, ...input) => {
  let hasEmptyText= false;
  for(const text of input){
    if(!text){
      hasEmptyText = true;
      break;
    }
  }
  if(!hasEmptyText){
    cb();
  }
}

sayHello('JL');
sayHello2('Hey hey', 'JL');
sayHello2('Hey');
sayHello3();
sayHello4();

checkInput(
  ()=>{
    console.log('All not empty');
  }, 
  'Hello',
  'Nice',
  ''
);