export function objToArr(obj) {
  const strArr = new Array();
  for (const key of Object.keys(obj)) {
    strArr.push(obj[key]);
  }
  return strArr;
}
export function backIndex(valueId, nowArray) {
  const valueIdCache = (typeof valueId === 'number') ? valueId : Number(valueId);
  let valueIndexCache = 0;
  for (let arrayNowIndex = 0; arrayNowIndex < nowArray.length; arrayNowIndex++) {
    valueIndexCache = (typeof nowArray[arrayNowIndex].id === 'number') ? nowArray[arrayNowIndex].id : Number(nowArray[arrayNowIndex].id);
    if (valueIndexCache === valueIdCache) {
      return arrayNowIndex;
    }
  }
}
export function backPrevIndexAndLastIndexByArr(valueId, nowArray) {
  const nowIndex = backIndex(valueId, nowArray);
  const prevPageId = (nowIndex > 0) ? nowArray[nowIndex - 1].id : nowIndex;
  const lastPageId = (nowIndex < (nowArray.length - 1)) ? nowArray[nowIndex + 1].id : nowIndex;
  console.log(nowIndex);
  return {
    prevPageId: prevPageId,
    lastPageId: lastPageId,
    nowIndex: nowIndex,
    prevPageStatus: ((nowIndex === 0) ? false : true),
    lastPageStatus: ((nowIndex === (nowArray.length - 1)) ? false : true)
  };
}
export function strMapToObj(strMap) {
  const obj = Object.create(null);
  for (const [keys, values] of strMap) {
    obj[keys] = values;
  }
  return obj;
}
export function objToStrMap(obj) {
  const strMap = new Map();
  for (const keys of Object.keys(obj)) {
    strMap.set(keys, obj[keys]);
  }
  return strMap;
}
