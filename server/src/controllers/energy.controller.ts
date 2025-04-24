import { Request, Response } from 'express'
import { EnergyData } from '../types/energyTypes'
import EnergyRepository from '../data/energy.repository'

const EnergyController = {
  async getHydroGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRepository.getHydro()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining hydro data', error: err })
    }
  },

  async getNuclearGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRepository.getNuclear()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining nuclear data', error: err })
    }
  },

  async getSolarGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRepository.getSolar()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining solar data', error: err })
    }
  },
  async getThermalGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRepository.getThermal()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining thermal data', error: err })
    }
  },
  async getWindGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRepository.getWind()
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({ message: 'Error obtaining wind data', error: err })
    }
  },
}

export default EnergyController
