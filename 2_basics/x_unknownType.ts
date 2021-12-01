let userInput: unknown
let userName: string

userInput = 5
userInput = "Hamza"

// we can do and assign it to whatever hardcoded value we want like we do after declaring any type
// the only difference will lie as in following
// we can't assign it directly to other varibles because its type is unknown to them although we know we defined it to same type

// userName = userInput //typescript will throw error that unknown is not assigable to string
// to tackle with this error, we either define it to any or do the following

if (typeof userInput === "string") {
  userName = userInput //now it works and this is why unknown is better than any, since it adds an extra check
}

// I can't tell what type of unknown typed variable is, but I know what I want to do with it, since I have put a check on it
// whenever I will be assigning it to any variable
// Unlike any, you are doing some typechecking with unknown  
