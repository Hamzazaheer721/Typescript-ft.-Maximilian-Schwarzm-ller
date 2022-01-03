// Tagged functions are the functions which use template literals to extract their arguments

const logPerson = (msg, name, title = 'Dev') => {
  console.log(msg) // [ 'Hi! My name is ', ' and my job title is ', '' ]
  console.log(msg.length) // 3, one string before one template literal, one between the template literals and one string after last literal
  console.log(name) // Hamza
  console.log(title) // Sr. Js Developer
}

const Person: { name: string; title: string } = {
  name: 'Hamza',
  title: 'Sr. Js Developer'
}

logPerson`Hi! My name is ${Person.name} and my job title is ${Person.title}`
