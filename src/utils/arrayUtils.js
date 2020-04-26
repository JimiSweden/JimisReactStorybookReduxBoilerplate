/**
 * same as groupByProperty, but groups items by the value of a childs property
 * 
 * values are arrays with the grouped items
 * @returns object { valueGroupedBy1 : [...], valueGroupedBy2 : [...], }
 * 
 * @example //with an "item" object containing a nestedItem, where we want to group by 'nestedItem.type'
 * myArray: [{id :1, name: "an item", nestedItem: {id: '1.2', name: 'a nested item', type: 'the value grouped by'}}]
 * groupByNestedProperty(myArray, 'nestedItem', 'type')
 * //returns >> 
 * { 
 *  "the value grouped by" : [{id :1, name: "an item", nestedItem: {id: '1.2', name: 'a nested item', type: 'the value grouped by'}}]
 * }
 * 
 * @example //authors with book, group by 'author.book.type'
 * const myArray = [
 * { name: 'Ray Dalio', book: { name: 'Principles', type: 'audiobook' } },
 * { name: 'Seth Godin', book: { name: 'LINCHPIN - Are you indispenseble', type: 'paperback' } }
 * ]
 * groupByNestedProperty(myArray, 'book', 'type')
 * //returns >> 
 * { 
 *  audiobook: [{ name: 'Ray Dalio', book: { name: 'Principles', type: 'audiobook' } }]
 *  paperback: [{ name: 'Seth Godin', book: { name: 'LINCHPIN - Are you indispenseble', type: 'paperback' } }]
 * }
 * 
 * @param {*} objectArray 
 * @param {*} nestedProperty 
 * @param {*} propertyInNestedToGroupBy 
 */
export function groupByNestedProperty(objectArray, nestedProperty, propertyInNestedToGroupBy) {
    return objectArray.reduce(function (accumulator, currentObject) {

        let key = nestedProperty ? currentObject[nestedProperty][propertyInNestedToGroupBy] : currentObject[propertyInNestedToGroupBy];
        // console.log("object key : ", key)
        // debugger;

        //if property does not exists, set it and assign as array
        if (!accumulator[key]) {
            accumulator[key] = [];
        }
        //add to the grouping array
        accumulator[key].push(currentObject);
        return accumulator;
    }, {})
}

/**
 * use to create an object with the array items grouped by 
 * a propertys value. 
 * @returns object { valueGroupedBy1 : [...], valueGroupedBy2 : [...], }
 * @example 
 * //will group items by the value of owner. 
 * groupByProperty(myArray, 'owner')
 * myArray: [{id :1, name: "an item", owner: "jimi"}, {id :2, name: "another item", owner: "jimi"}, {id :3, name: "unknown item", owner: "someone else"} ]
 * //returns >>
 * { jimi: [{id :1, name: "an item", owner: "jimi"},{id :2, name: "another item", owner: "jimi"}], someoneelse: [{id :3, name: "unknown item", owner: "someone else"}] }
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
 * //returns >>
 * {
 *  1: {id :1, name: "an item"}
 *  2: {id :2, name: "another item"}
 * }
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

