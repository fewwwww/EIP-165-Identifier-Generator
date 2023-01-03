export const parseInterfaceABI = (interfaceCode) => {
  let interfaceCodeLines = interfaceCode.split(String.fromCharCode(10));
  for (let i = 0; i < interfaceCodeLines.length; i++) {
    interfaceCodeLines[i] = interfaceCodeLines[i].trim();
  }
  interfaceCodeLines = interfaceCodeLines.filter((line) =>
    line.startsWith('function'),
  );
  interfaceCodeLines = interfaceCodeLines.map((line) => line.replace(';', ''));
  return interfaceCodeLines;
};
