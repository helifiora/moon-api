import { Controller } from '@/presenters/controller/controller'

export type ControllerFactory = () => Controller
export type ControllerType<T extends Controller> = new (...args: any[]) => T
