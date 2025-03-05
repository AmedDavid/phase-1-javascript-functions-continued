// code your solution here

const saturdayFun = (activity = "roller-skate") => {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity = "go to the office") => {
  return `This Monday, I will ${activity}.`;
}

const wrapAdjective = (style = "*") => {
  return (adjective = "special") => {
    return `You are ${style}${adjective}${style}!`;
  }
}

const Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
}

const actionApplyer = (start, functions) => {
  let a = start;

  for (let i = 0; i < functions.length; i++) {
    a = functions[i](a);
  }

  return a;
}