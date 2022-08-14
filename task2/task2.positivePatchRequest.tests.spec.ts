import superagent from 'superagent'
import { page } from './pageList/pageList'
import { pageStatus } from './pageStatus/pageStatus'
import { helperConsts } from './constants/constantsHelpers'
import { expectedObjectsForPutRequests } from './expectedObjects/expectedObjectsForPutRequests'
import { expectedObjectsForPatchRequests } from './expectedObjects/expectedObjectsForPatchRequests'

describe('positive Patch requests', () => {
    test('positive patch test1', async () => {
        const res1 = await superagent
            .put(page.putPage)
            .set(helperConsts.contentType, helperConsts.applicationJson)
            .send(expectedObjectsForPatchRequests.expectedObject1)
        expect(res1.statusCode).toEqual(pageStatus.successfulStatus)
        expect(res1.body.body).toEqual(
            expectedObjectsForPatchRequests.expectedObject1.body
        )
    })

    test('positive patch test2', async () => {
        const res2 = await superagent
            .put(page.putPage)
            .set(helperConsts.contentType, helperConsts.applicationJson)
            .send(expectedObjectsForPatchRequests.expectedObject2)
        expect(res2.statusCode).toEqual(pageStatus.successfulStatus)
        expect(res2.body.body).toEqual(
            expectedObjectsForPatchRequests.expectedObject2.body
        )
    })

    test('positive patch test3', async () => {
        const res3 = await superagent
            .put(page.putPage)
            .set(helperConsts.contentType, helperConsts.applicationJson)
            .send(expectedObjectsForPatchRequests.expectedObject3)
        expect(res3.statusCode).toEqual(pageStatus.successfulStatus)
        expect(res3.body.body).toEqual(
            expectedObjectsForPatchRequests.expectedObject3.body
        )
    })

    test('positive patch test4', async () => {
        const res4 = await superagent
            .put(page.putPage)
            .set(helperConsts.contentType, helperConsts.applicationJson)
            .send(expectedObjectsForPatchRequests.expectedObject4)
        expect(res4.statusCode).toEqual(pageStatus.successfulStatus)
        expect(res4.body.body).toEqual(
            expectedObjectsForPatchRequests.expectedObject4.body
        )
    })

    test('positive patch test5', async () => {
        const res5 = await superagent
            .put(page.putPage)
            .set(helperConsts.contentType, helperConsts.applicationJson)
            .send(expectedObjectsForPatchRequests.expectedObject5)
        expect(res5.statusCode).toEqual(pageStatus.successfulStatus)
        expect(res5.body.body).toEqual(
            expectedObjectsForPatchRequests.expectedObject5.body
        )
    })
})
