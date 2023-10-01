export default function getSpecialAttack(obj) {
  const result = [];
  const arr = [...obj.special];
  arr.forEach((elem) => {
    if (!Object.keys(elem).includes('description')) {
      Object.defineProperty(elem, 'description', {
        value: 'Описание недоступно',
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }
    result.push(elem);
  });
  return result;
}
