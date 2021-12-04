// we might want to make generic type for all the form fields of our website, and we would want the fields to be flexible inside it

// for example we might not want to restrict ourself to only name and password fields

interface IErrorsProps {
  // id : 32 //You can't define id as number now 
  [props: string] : string
}

const errorBag: IErrorsProps = {
  1: "Error Invalid Email", // if we put 1 here, then it will be interprated as string here
  // 1: 2312  // this will be incorrect as we have defined that prop of string type will be equal to value of type string
  password: "Wrong Password!"
}


/////////////////////////
/////// EXAMPLE # 2 ////
///////////////////////

interface IErrorsNumberProps {
  [props: number] : string
}

const _errorObj: IErrorsNumberProps = {
  3: "Please enter the correct password!",
  // email: "Invalid Email !" // This won't work now    
}