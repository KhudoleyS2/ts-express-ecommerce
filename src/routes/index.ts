import Router from 'express'

const router = Router()

router.get('/', (_req, res) => {
  return res.send('Hello world!')
})

export default router
