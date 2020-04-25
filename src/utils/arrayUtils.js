/**
 * use to create an object with values from nested property id values as property names. 
 * @example with an "item" object containing a nestedItem, where we want to group by 'nestedItem.id'
 * groupByProperty(myArray, 'id', 'nestedItem')
 * myArray: [{id :1, name: "an item", nestedItem: {id: '2', name: 'a nested item'}}]
 * 
 * @param {*} objectArray 
 * @param {*} propertyToGroupBy 
 * @param {*} nestedProperty 
 */
export function groupByNestedProperty(objectArray, propertyToGroupBy, nestedProperty) {
    return objectArray.reduce(function (accumulator, currentObject) {

        let key = nestedProperty ? currentObject[nestedProperty][propertyToGroupBy] : currentObject[propertyToGroupBy]
        // console.log("object key : ", key)
        // debugger;

        //if property does not exists, set it and assign as array
        if (!accumulator[key]) {
            accumulator[key] = []
        }
        //add to the grouping array
        accumulator[key].push(currentObject)
        return accumulator
    }, {})
}

/**
 * use to create an object with the array items grouped by a propertys value in child arrays. 
 * @example 
 * will group items by the value of owner prop. 
 * groupByProperty(myArray, 'owner')
 * myArray: [{id :1, name: "an item", owner: "jimi"}, {id :2, name: "another item", owner: "jimi"}, {id :3, name: "unknown item", owner: "someone else"} ]
 * 
 * @param {*} objectArray 
 * @param {*} property 
 */
export function groupByProperty(objectArray, property) {
    return objectArray.reduce(function (accumulator, currentObject) {
        let key = currentObject[property]

        //if property does not exists, set it and assign as array
        if (!accumulator[key]) {
            accumulator[key] = []
        }
        accumulator[key].push(currentObject)
        return accumulator
    }, {})
}


/**
 * use to create an object with the array items id values as property names to match the item. 
 * @example 
 * groupByProperty(myArray, 'id')
 * myArray: [{id :1, name: "an item"}, {id :2, name: "another item"}]
 * 
 * @param {*} objectArray 
 * @param {*} property 
 */
export function arrayToObjectWithIdsAsProp(objectArray, property) {
    return objectArray.reduce(function (accumulator, currentObject) {
        //get value from the key, e.g. "id"
        let key = currentObject[property]
        //set key, e.g. "id", as property name
        accumulator[key] = currentObject;
        return accumulator
    }, {})
}

