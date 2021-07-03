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

module.exports = {
    renameKeys : renameKeys,
    orderKeys : orderKeys
}