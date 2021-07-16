import { Request, Response } from 'express'
import { Controller } from '@/presenters/controller/controller'
import { adaptRequest } from './adapt-request'

type ControllerFactory = () => Controller

export function adaptRoute (controllerFac: ControllerFactory) {
  return async (req: Request, res: Response) => {
    const httpRequest = adaptRequest(req)

    try {
      const controller = controllerFac()
      const httpResponse = await controller.handle(httpRequest)
      res.status(httpResponse.status).json(httpResponse.body)
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
}
