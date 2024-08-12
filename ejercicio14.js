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
    const wordCount = {};

    for (const word of list) {
       if (wordCount [word]) {
        wordCount[word]++;
       } else{
        wordCount[word] = 1;
       }
    }
    console.log(wordCount);
    
  }

 repeatCounter(words);
  
