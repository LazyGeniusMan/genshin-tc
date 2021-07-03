//Rename object key
const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );

//Change object key order
function orderKeys(newOrder, oldOrderObj) {
    let newOrderObj = {}
    newOrder.forEach(ele => {
        newOrderObj[ele]= null
    });
    oldOrderObj = Object.assign(newOrderObj, oldOrderObj);
    return oldOrderObj;
}

//Find keys based on value (return an array)
const findKeys = (obj, val) => 
  Object.keys(obj).filter(key => obj[key] === val);

module.exports = {
    renameKeys : renameKeys,
    orderKeys : orderKeys,
    findKeys : findKeys,
}