import {encoded, translations} from './data.js'


function decodeFields(encoded, translations) {
    let decodedData = [];
    let uniqueIds = new Set();
  
    for (const item of encoded) {
      let decodedItem = {};
      
      for (const key in item) {
        if (key.endsWith('Id')) {
          // Расшифровываем поле, если есть соответствующее значение в словаре
          if (translations.hasOwnProperty(item[key])) {
            decodedItem[key] = translations[item[key]];
          } else {
            decodedItem[key] = item[key];
          }
          uniqueIds.add(item[key]);
        } else {
          // Оставляем поле без изменений
          decodedItem[key] = item[key];
        }
      }
  
      decodedData.push(decodedItem);
    }
  
    return { decodedData, uniqueIds };
  }
  
  // Пример использования
  const { decodedData, uniqueIds } = decodeFields(encoded, translations);
  
  console.log(encoded)
  console.log(decodedData);
  console.log(Array.from(uniqueIds));
