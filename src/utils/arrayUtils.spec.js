import { arrayToObjectWithIdsAsProp } from './arrayUtils'



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

    test('arrayToObjectWithIdsAsProp returns object as expected', () => {

        const { origin, groupById, expected } = testData_arrayToObjectWithIdsAsProp();
        const actualResult = arrayToObjectWithIdsAsProp(origin, groupById)

        expect(actualResult).toEqual(expected);
    });




    /**   working simple example of filtering with a reducer  
     * not sure if it should be used in arrayUtils
    */
    function filterQueues(currentQueues, idsOfQueuesToKeep) {

        const initialValue = []; //start with empty array
        let _queuesVisible = currentQueues.reduce((accumulator, queue) => {

            if (idsOfQueuesToKeep.find(filtered => filtered === queue)) {
                // console.log('queue found and added', queue);
                accumulator.push(queue)
            }

            // console.log('accumulator: ', accumulator)
            return accumulator;
        }, initialValue);

        return _queuesVisible;
    }

    test.skip('returns queues matching given Ids', () => {

        const filteredQueueIds = [3, 6]
        const queues = [1, 2, 3, 4, 5, 6];

        const _queuesVisible = filterQueues(queues, filteredQueueIds)
        expect(_queuesVisible).toEqual([3, 6]);
    });


});