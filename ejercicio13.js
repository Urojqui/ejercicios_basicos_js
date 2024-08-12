const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList, name) {
    const index = nameList.indexOf(name);
    if (index === -1) {
        console.log(false, "No se encuentra el elemento")
    } else {
        console.log(true, index)
    }    
  }

  nameFinder(names, "Logan");
  nameFinder(names, "Pepe");