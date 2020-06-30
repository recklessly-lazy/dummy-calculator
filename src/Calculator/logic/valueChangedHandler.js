const operators = { "+": "", "-": "", "*": "", "/": "" };

const valueChangedHandler = (oldValue, input) => {
  let newValue = oldValue;
  let disabled = false;
  const previousInput = oldValue.charAt(oldValue.length - 1);
  const inputBeforePreviousInput = oldValue.charAt(oldValue.length - 2);
  if (newValue === "Infinity" || newValue === "NaN") {
    newValue = input;
    disabled = false;
  } else if (input === "0" && oldValue === "0") {
    newValue = "0";
  } else if (oldValue === "0") {
    newValue = input;
  } else if (previousInput === "0" && inputBeforePreviousInput in operators) {
    newValue = newValue.slice(0, -1) + input;
  } else {
    newValue += input;
  }
  const values = [ newValue, disabled ]
  return ( values );
};
export default valueChangedHandler;
