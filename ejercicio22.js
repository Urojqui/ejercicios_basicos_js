/*Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.

Finalmente, imprime el array resultante.*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Burger", isVegan: false },
  { name: "Burger", isVegan: false },
];

for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {  
      if (fruits.length > 0) { 
        foodSchedule[i].name = fruits.shift();  
        foodSchedule[i].isVegan = true; 
      } else {
        foodSchedule[i].isVegan = false;  // Si no hay frutas, marcamos como no vegana
      }
    }
  }

console.log(foodSchedule);

