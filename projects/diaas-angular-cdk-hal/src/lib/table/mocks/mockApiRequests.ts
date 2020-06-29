import { setupWorker, rest } from 'msw'

export const mocks = [
  rest.get('http://localhost:3000/data?_start=1&_num=4', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(req.params),
    )
  }),
]

const worker = setupWorker(...mocks)
worker.start()

export { worker, rest }