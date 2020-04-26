import {
    arrayToObjectWithIdsAsProp,
    groupByProperty,
    groupByNestedProperty
} from './arrayUtils'



describe('array utils', () => {

    function testData_arrayToObjectWithIdsAsProp() {

        const expectedObjectWithIdsAsProps = {
            "123456": {
                "id": "123456",
                "name": "Jimi",
            },
            "456789": {
                "id": "456789",
                "name": "Lee",
            }
        }


        const objectsArrayToGroupById = [
            {
                "id": "123456",
                "name": "Jimi",
            },
            {
                "id": "456789",
                "name": "Lee",
            }
        ];

        return {
            expected: expectedObjectWithIdsAsProps,
            origin: objectsArrayToGroupById,
            groupById: 'id'
        };
    }

    test('arrayToObjectWithIdsAsProp returns object with array items Ids as props', () => {

        const { origin, groupById, expected } = testData_arrayToObjectWithIdsAsProp();
        const actualResult = arrayToObjectWithIdsAsProp(origin, groupById)

        expect(actualResult).toEqual(expected);
    });

    test('groupByProperty groups by owner and handles owner value with spaces', () => {
        //arrange
        const myArray = [
            { id: 1, name: "an item", owner: "jimi" },
            { id: 2, name: "another item", owner: "jimi" },
            { id: 3, name: "unknown item", owner: "someone else" }
        ];

        const expected = {
            jimi: [
                { id: 1, name: "an item", owner: "jimi" },
                { id: 2, name: "another item", owner: "jimi" }
            ],
            "someone else": [
                { id: 3, name: "unknown item", owner: "someone else" }
            ]
        };

        //act
        const actual = groupByProperty(myArray, 'owner');
        debugger;

        //assert
        expect(actual).toEqual(expected);

    })

    test('groupByNestedProperty groups authors by books type, i.e paperback and audio', () => {

        //arrange
        const myAuthorsWithBook = [
            { name: 'Ray Dalio', book: { name: 'Principles', type: 'audiobook' } },
            { name: 'Nate Silver', book: { name: 'the signal and the noise', type: 'audiobook' } },
            { name: 'Seth Godin', book: { name: 'LINCHPIN - Are you indispenseble', type: 'paperback' } },
            { name: 'Seth Godin', book: { name: 'THIS IS MARKETING', type: 'paperback' } },
        ];

        const expected = {
            audiobook: [
                { name: 'Ray Dalio', book: { name: 'Principles', type: 'audiobook' } },
                { name: 'Nate Silver', book: { name: 'the signal and the noise', type: 'audiobook' } },
            ],
            paperback: [
                { name: 'Seth Godin', book: { name: 'LINCHPIN - Are you indispenseble', type: 'paperback' } },
                { name: 'Seth Godin', book: { name: 'THIS IS MARKETING', type: 'paperback' } },
            ]
        }

        //act
        const actual = groupByNestedProperty(myAuthorsWithBook, 'book', 'type');

        //assert
        expect(actual).toEqual(expected);

    })

    /**   working simple example of filtering with a reducer  
     * not sure if it should be used in arrayUtils, keeping for reference.
    */
    function filterItems(currentItems, idsOfItemsToKeep) {

        const initialValue = []; //start with empty array
        let _itemsVisible = currentItems.reduce((accumulator, item) => {

            if (idsOfItemsToKeep.find(filtered => filtered === item)) {
                // console.log('item found and added', item);
                accumulator.push(item)
            }

            // console.log('accumulator: ', accumulator)
            return accumulator;
        }, initialValue);

        return _itemsVisible;
    }

    test('filterItems returns items matching given Ids', () => {

        const filteredItemIds = [3, 6]
        const items = [1, 2, 3, 4, 5, 6];

        const _itemsVisible = filterItems(items, filteredItemIds)
        expect(_itemsVisible).toEqual([3, 6]);
    });


});