import supertest from 'supertest'
import app from '../app'

const api = supertest(app)

describe('GET / - a simple api endopoint', () => {
  it('Hello API request', async () => {
    await api.get('/')
      .expect(200)
  })
})

afterAll(() => {
  // console.log('Closing DB!')
})
