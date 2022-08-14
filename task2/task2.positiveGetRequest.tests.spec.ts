import superagent from 'superagent'
import { page } from './pageList/pageList'
import { pageStatus } from './pageStatus/pageStatus'

describe('positive Get requests', () => {
    test('positive get request1', async () => {
        const res1 = await superagent.get(page.mainPage)
        expect(res1.status).toBe(pageStatus.successfulStatus)
    })

    test('positive get request2', async () => {
        const res2 = await superagent.get(page.postsPage)
        expect(res2.status).toBe(pageStatus.successfulStatus)
    })

    test('positive get request3', async () => {
        const res3 = await superagent.get(page.commentsPage)
        expect(res3.status).toBe(pageStatus.successfulStatus)
    })

    test('positive get request4', async () => {
        const res4 = await superagent.get(page.albumsPAge)
        expect(res4.status).toBe(pageStatus.successfulStatus)
    })

    test('positive get request5', async () => {
        const res5 = await superagent.get(page.photosPage)
        expect(res5.status).toBe(pageStatus.successfulStatus)
    })
})
