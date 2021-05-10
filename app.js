
const fs = require('fs')

  const genders = ['M', 'F']
  const maleNames = ['Adam', 'David', 'Thorgal', 'Eric', 'Ragnar']
  const femaleNames = ['Eva', 'Melissa', 'Lagertha', 'Anastasiya', 'Kriss']
  const lastNames = ['Broflovsky', 'Vince', 'White', 'Snow', 'Dragonborn', 'Tepez']

    let people = []
    let i = 0;
    while (i <= 19) {
      let person = {}
      person.id = i;

      person.gender = genders[Math.floor(Math.random() * genders.length)]

      if (person.gender == 'F') {
        person.name = femaleNames[Math.floor(Math.random() * femaleNames.length)]
      }
      else if (person.gender == 'M') { 
        person.name = maleNames[Math.floor(Math.random() * maleNames.length)]

      }
      person.lastNames = lastNames[Math.floor(Math.random() * lastNames.length)]

      person.age = [Math.floor(Math.random() * 61) + 18]

     people.push(person)

      i++
    }
    
  console.log(people)
  


  const data = JSON.stringify(people);
fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
