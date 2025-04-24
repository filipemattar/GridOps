import { Router } from 'express'
import EnergyController from './controllers/energy.controller'

const router = Router()

router.get('/hydro', EnergyController.getHydroGeneration)
router.get('/nuclear', EnergyController.getNuclearGeneration)
router.get('/solar', EnergyController.getSolarGeneration)
router.get('/thermal', EnergyController.getThermalGeneration)
router.get('/wind', EnergyController.getWindGeneration)

export default router
