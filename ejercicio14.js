const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  function repeatCounter(list) {
    let counter = 0;
    let repetitions = [];
    for (let i = 0; i < list.length; i++) {
        if(list[i++] === list[i]){
            console.log("Se repite" +" "+  words[i])
            counter++;
        } else {
            repetitions.push(counter);
            counter = 1
        }
    }
    console.log(repetitions)
  }

  repeatCounter(words)