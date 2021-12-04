// if("runningSpeed" in _animal) is not optimized way for bigger objs so we will make Descriminated type for obj by defining type attribute in interface for each.

enum IAction {
  BIRD,
  HORSE
}

interface IHorse {
  type: IAction.HORSE
  runningSpeed: number
}
interface IBird {
  type: IAction.BIRD
  flyingSpeed: number
}
type Animal = IHorse | IBird

const _horse: IHorse = {
  runningSpeed: 32,
  type: IAction.HORSE
}
const _bird: IBird = {
  flyingSpeed: 46,
  type: IAction.BIRD
}

const moveAnimal = (animal: Animal) => {
  switch (animal.type) {
    case IAction.BIRD:
      return animal.flyingSpeed
    case IAction.HORSE:
      return animal.runningSpeed
    default:
      return 0
  }
}
console.log(moveAnimal(_bird)) // 46
