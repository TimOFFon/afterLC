//1 Создайте функцию uniqueValues, которая принимает массив значений и возвращает новый массив, содержащий только уникальные значения из входного массива.

function uniqueValues(values) {
    let uniqueValuesArray = new Set(values);
  
    return Array.from(uniqueValuesArray);
  }
  
  // Пример использования
  const values = [1, 2, 2, 3, 4, 4, 5];
  const uniqueValuesArray = uniqueValues(values);
  // console.log(uniqueValuesArray); // [1, 2, 3, 4, 5]
  
  //2 Реализуйте класс Storage, который будет использовать Map для хранения данных. Класс должен предоставлять методы setItem для добавления данных, getItem для извлечения данных по ключу и removeItem для удаления данных по ключу.
  
  class Storage {
    constructor(value, key) {
      this.map = new Map();
    }
    setItem(key, value) {
      return this.map.set(key, value);
    }
  
    getItem(key) {
      // console.log(this.map.get(key));
      return this.map.get(key);
    }
  
    removeItem(key) {
      return this.map.delete(key);
    }
  
  }
  
  // Пример использования
  // const storage = new Storage();
  // storage.setItem('name', 'John');
  // storage.setItem('age', 30);
  // console.log(storage);
  // console.log(storage.getItem('name')); // John
  // storage.removeItem('age');
  // console.log(storage.getItem('age')); // undefined
  
  //3 Реализуйте функцию memoize, которая принимает функцию func и возвращает новую функцию, которая кэширует результаты вызовов func для уникальных аргументов. Используйте Map для хранения результатов и WeakMap для хранения ссылок на объекты, чтобы избежать утечек памяти.
  
  function memoize(func) {
    let map = new Map();
    return function(obj) {
      let result = func(obj);
      if (!map.has(obj)) {
        map.set(obj, result);
      }
  
  
      return map.get(obj);
    }
  
  }
  
  // Пример использования
  function expensiveOperation(obj) {
    console.log('Expensive operation');
    return obj.value * 2;
  }
  
  const memoizedOperation = memoize(expensiveOperation);
  
  const obj1 = { value: 10 };
  const obj2 = { value: 20 };
  
  // console.log(memoizedOperation(obj1)); // Expensive operation, 20
  // console.log(memoizedOperation(obj1)); // 20 (из кэша)
  // console.log(memoizedOperation(obj2)); // Expensive operation, 40
  
  //4 Реализуйте функцию trackUniqueObjectsWithWeakSet, 
  //которая принимает массив объектов и возвращает новый 
  //массив, содержащий только уникальные объекты. 
  //Используйте WeakSet для отслеживания уже встреченных 
  // объектов. 
  //Дополнительно, реализуйте функцию removeObject, 
  //которая позволяет удалять объекты из WeakSet по ссылке.

  const objects = [{ id: 1 }, { id: 2 }, { id: 1 }];
  const uniqueObjectsSet = new WeakSet()
  
  function trackUniqueObjectsWithWeakSet(objects) {
    let arr = [];
    
   objects.forEach((el, i) => {
    let item = JSON.stringify(el);
    uniqueObjectsSet.add(JSON.parse(item));
    console.log(uniqueObjectsSet.has(JSON.parse(item)));
   });

  //  objects.forEach((el, i) => {

  //  })

  //  for(let el of map.values()) {
  //   uniqueObjectsSet.add(el);
  //   arr.push(el);
  //  }
    return arr;
  
  }
  
  function removeObject(obj) {
    //...
  }
  
  // Пример использования
  
  const uniqueObjects = trackUniqueObjectsWithWeakSet(objects);
  console.log(uniqueObjects); // [{ id: 1 }, { id: 2 }]
  
  // Удаление объекта из WeakSet
  // removeObject(uniqueObjects[0]);
  // console.log(uniqueObjectsSet.has(uniqueObjects[0])); // false