import { Controller } from '@/presenters/controller/controller'

export type ControllerFac = () => Controller
export type ControllerType<T extends Controller> = new (...args: any[]) => T
