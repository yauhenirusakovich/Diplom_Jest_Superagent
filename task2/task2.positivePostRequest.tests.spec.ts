import superagent from 'superagent'
import { page } from './pageList/pageList'
import { pageStatus } from './pageStatus/pageStatus'
import { expectedObjectsForPostRequests } from './expectedObjects/expectedObjectsForPostRequests'
import { helperConsts } from './constants/constantsHelpers'

describe('positive Post requests', () => {
    test('positive post request1', async () => {
        const res1 = await superagent
            .post(page.postsPage)
            .set(helperConsts.contentType, helperConsts.applicationJson)
            .send(expectedObjectsForPostRequests.expectedObject1)
        expect(res1.statusCode).toEqual(pageStatus.successPageUpdate)
        expect(res1.body.body).toEqual(
            expectedObjectsForPostRequests.expectedObject1.body
        )
        expect(res1.body.title).toEqual(
            expectedObjectsForPostRequests.expectedObject1.title
        )
    })

    test('positive post request2', async () => {
        const res1 = await superagent
            .post(page.postsPage)
            .set(helperConsts.contentType, helperConsts.applicationJson)
            .send(expectedObjectsForPostRequests.expectedObject2)
        expect(res1.statusCode).toEqual(pageStatus.successPageUpdate)
        expect(res1.body.body).toEqual(
            expectedObjectsForPostRequests.expectedObject2.body
        )
        expect(res1.body.title).toEqual(
            expectedObjectsForPostRequests.expectedObject2.title
        )
    })

    test('positive post request3', async () => {
        const res1 = await superagent
            .post(page.postsPage)
            .set(helperConsts.contentType, helperConsts.applicationJson)
            .send(expectedObjectsForPostRequests.expectedObject3)
        expect(res1.statusCode).toEqual(pageStatus.successPageUpdate)
        expect(res1.body.body).toEqual(
            expectedObjectsForPostRequests.expectedObject3.body
        )
        expect(res1.body.title).toEqual(
            expectedObjectsForPostRequests.expectedObject3.title
        )
    })

    test('positive post request4', async () => {
        const res1 = await superagent
            .post(page.postsPage)
            .set(helperConsts.contentType, helperConsts.applicationJson)
            .send(expectedObjectsForPostRequests.expectedObject4)
        expect(res1.statusCode).toEqual(pageStatus.successPageUpdate)
        expect(res1.body.body).toEqual(
            expectedObjectsForPostRequests.expectedObject4.body
        )
        expect(res1.body.title).toEqual(
            expectedObjectsForPostRequests.expectedObject4.title
        )
    })

    test('positive post request5', async () => {
        const res1 = await superagent
            .post(page.postsPage)
            .set(helperConsts.contentType, helperConsts.applicationJson)
            .send(expectedObjectsForPostRequests.expectedObject5)
        expect(res1.statusCode).toEqual(pageStatus.successPageUpdate)
        expect(res1.body.body).toEqual(
            expectedObjectsForPostRequests.expectedObject5.body
        )
        expect(res1.body.title).toEqual(
            expectedObjectsForPostRequests.expectedObject5.title
        )
    })
})
