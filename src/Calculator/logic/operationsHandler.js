const operators = { "+": "", "-": "", "*": "", "/": "" };

const operationsHandler = (result, operation) => {
  let newResult = result;
  const lastInput = result.charAt(result.length - 1);
  if (lastInput === operation) {
  } else if (lastInput !== operation && lastInput in operators) {
    newResult = result.slice(0, -1) + operation;
  } else {
    newResult += operation;
  }
  return(newResult);
};

export default operationsHandler
