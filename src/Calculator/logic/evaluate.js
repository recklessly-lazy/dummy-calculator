const operators = { "+": "", "-": "", "*": "", "/": "" };

const evaluate = (result) => {
  let disabled;
  let lastInput = result.length > 1 ? result.charAt(result.length - 1) : null;
  if (lastInput in operators) {
    result = result.slice(0, -1);
  }
  let output = eval(result).toString();
  if (output === "Infinity" || output === "NaN") {
    disabled = true;
    output = (output === 'NaN' ? 'Indeterminate' : output)
  }
  const values = [ output, disabled ];
  return values;
};
export default evaluate
