
interface IName  {
  name: string
}

interface IAge {
  age: number
}

type mixedType = IName & IAge

///////////////////////
/////// METHOD # 2 ///
/////////////////////

interface IMixed extends IName, IAge {}
interface IMixed_alt extends mixedType {}

const _obj = {
  age: 25,
  name: "hamza"
} as IMixed
