const interfaceElement = [
  { tags: [''] }
];

export function getFlatArrayUnrepeated(elements = interfaceElement) {
  let unrepeated = [];
  const setToLowerCase = (item = '') => item.toLowerCase();

  elements.forEach(item => {
    unrepeated = [...new Set([...unrepeated, ...new Set(item?.tags?.map(setToLowerCase))])]
  })

  return unrepeated;
}
