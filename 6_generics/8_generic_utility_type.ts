
interface CourseGoal {
  title: string
  description: string
  completeUntil: Date
}

interface ICreateCourseGoalProps {
  (a: string , b: string, c: Date): CourseGoal
}

let createCourseGoal: ICreateCourseGoalProps = (title, description, completeUntil) => {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title;
  courseGoal.completeUntil = completeUntil;
  courseGoal.description = description;
  return courseGoal as CourseGoal
} 

let _data = createCourseGoal("Intro to IT", "CS subject", new Date())

console.log(_data)

// { title: 'Intro to IT',
//   completeUntil: Sun Dec 05 2021 15:22:48 GMT+0500 (Pakistan Standard Time),
//   description: 'CS subject' }

/////////////////////////////////
///////// READONLY /////////////
///////////////////////////////

const names: Readonly<Array<string>> = ["Max", "Anna"]
console.log(names) // now this array can neither be pushed or popped