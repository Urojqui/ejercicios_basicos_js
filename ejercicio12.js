const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  
  function removeDuplicates(list) {
    const uniques = [];
    for (const element of list) {
        if (uniques.includes(element)) {
            
        } else {
            uniques.push(element)
        }
    }
    console.log(uniques)
  }
    
  removeDuplicates(duplicates);
  
/*
  function removeDuplicates(list) {
    const uniques = [];
    duplicates.forEach((item)=>{
        if(!uniques.includes(item)){
            uniques.push(item);
        }
    })
    console.log(uniques)
  }
*/