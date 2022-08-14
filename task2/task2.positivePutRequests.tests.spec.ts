import superagent from "superagent";
import {page} from "./pageList/pageList";
import {pageStatus} from "./pageStatus/pageStatus";
import {helperConsts} from "./constants/constantsHelpers";
import {expectedObjectsForPutRequests} from "./expectedObjects/expectedObjectsForPutRequests";

describe('positive Put requests', () => {
    test('positive put test1', async () => {
        const res1 = await superagent
            .put(page.putPage)
            .set(helperConsts.contentType, helperConsts.applicationJson)
            .send(expectedObjectsForPutRequests.expectedObject1)
        expect(res1.statusCode).toEqual(pageStatus.successfulStatus)
        expect(res1.body.body).toEqual(
            expectedObjectsForPutRequests.expectedObject1.body
        )
        expect(res1.body.title).toEqual(
            expectedObjectsForPutRequests.expectedObject1.title
        )
    })

    test('positive put test2', async () => {
        const res2 = await superagent
            .put(page.putPage)
            .set(helperConsts.contentType, helperConsts.applicationJson)
            .send(expectedObjectsForPutRequests.expectedObject2)
        expect(res2.statusCode).toEqual(pageStatus.successfulStatus)
        expect(res2.body.body).toEqual(
            expectedObjectsForPutRequests.expectedObject2.body
        )
        expect(res2.body.title).toEqual(
            expectedObjectsForPutRequests.expectedObject2.title
        )
    })

    test('positive put test3', async () => {
        const res3 = await superagent
            .put(page.putPage)
            .set(helperConsts.contentType, helperConsts.applicationJson)
            .send(expectedObjectsForPutRequests.expectedObject3)
        expect(res3.statusCode).toEqual(pageStatus.successfulStatus)
        expect(res3.body.body).toEqual(
            expectedObjectsForPutRequests.expectedObject3.body
        )
        expect(res3.body.title).toEqual(
            expectedObjectsForPutRequests.expectedObject3.title
        )
    })

    test('positive put test4', async () => {
        const res4 = await superagent
            .put(page.putPage)
            .set(helperConsts.contentType, helperConsts.applicationJson)
            .send(expectedObjectsForPutRequests.expectedObject4)
        expect(res4.statusCode).toEqual(pageStatus.successfulStatus)
        expect(res4.body.body).toEqual(
            expectedObjectsForPutRequests.expectedObject4.body
        )
        expect(res4.body.title).toEqual(
            expectedObjectsForPutRequests.expectedObject4.title
        )
    })

    test('positive put test5', async () => {
        const res5 = await superagent
            .put(page.putPage)
            .set(helperConsts.contentType, helperConsts.applicationJson)
            .send(expectedObjectsForPutRequests.expectedObject5)
        expect(res5.statusCode).toEqual(pageStatus.successfulStatus)
        expect(res5.body.body).toEqual(
            expectedObjectsForPutRequests.expectedObject5.body
        )
        expect(res5.body.title).toEqual(
            expectedObjectsForPutRequests.expectedObject5.title
        )
    })
})