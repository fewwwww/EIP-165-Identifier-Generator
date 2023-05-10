export const parseInterfaceABI = (interfaceCode) => {
  let interfaceCodeLines = interfaceCode.split('\n');

  // The Output
  let interfaceFunctionLines = [];

  for (let i = 0; i < interfaceCodeLines.length; i++) {
    interfaceCodeLines[i] = interfaceCodeLines[i].trim();

    // If it is a multiple line function, combine them into one line.
    if (interfaceCodeLines[i].startsWith('function') && !interfaceCodeLines[i].endsWith(';')) {
      for (let j = i + 1; j < interfaceCodeLines.length; j++) {
        // Need extra trim because lines after index i are not trimmed yet.
        interfaceCodeLines[i] += interfaceCodeLines[j].trim();
        if (interfaceCodeLines[j].endsWith(';')) {
          break;
        }
      }
    }

    // If it is a function line (optionally after combination of multiple line),
    // push it to the output.
    if (interfaceCodeLines[i].startsWith('function') && interfaceCodeLines[i].endsWith(';')) {
      interfaceFunctionLines.push(interfaceCodeLines[i].replace(';', ''));
    }
  }

  return interfaceFunctionLines;
};
