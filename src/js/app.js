export default function StringToNumberFunc(input) {
  let output = '';
  try {
    if (Number.isNaN(input) === false && Number.parseInt(input, 10) == input) {
      output = parseInt(input, 10);
    } else throw input;
  } catch (e) {
    output = `Error: ${input} is not an integer in decimal`;
  }
  return output;
}
