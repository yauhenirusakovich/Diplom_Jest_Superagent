import superagent from 'superagent'
import { page } from './pageList/pageList'
import { pageStatus } from './pageStatus/pageStatus'

describe('positive Delete requests', () => {
    test('positive delete test', async () => {
        const result = await superagent.delete(page.putPage)
        expect(result.statusCode).toEqual(pageStatus.successfulStatus)
    })
})
