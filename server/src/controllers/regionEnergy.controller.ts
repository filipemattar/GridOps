import { Request, Response } from 'express'
import { EnergyData } from '../types/energyTypes'
import EnergyRegionRepository from '../data/region.energy.repository'

const RegionEnergyController = {
  async getNorthHydroGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRegionRepository.getNorthHydro()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining hydro data', error: err })
    }
  },
  async getNorthNuclearGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRegionRepository.getNorthNuclear()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining nuclear data', error: err })
    }
  },

  async getNorthSolarGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRegionRepository.getNorthSolar()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining solar data', error: err })
    }
  },
  async getNorthThermalGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRegionRepository.getNorthThermal()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining thermal data', error: err })
    }
  },
  async getNorthWindGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRegionRepository.getNorthWind()
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({ message: 'Error obtaining wind data', error: err })
    }
  },

  //______________________________SOUTH_______________________________________

  async getSouthHydroGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRegionRepository.getSouthHydro()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining hydro data', error: err })
    }
  },
  async getSouthNuclearGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRegionRepository.getSouthNuclear()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining nuclear data', error: err })
    }
  },

  async getSouthSolarGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRegionRepository.getSouthSolar()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining solar data', error: err })
    }
  },
  async getSouthThermalGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRegionRepository.getSouthThermal()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining thermal data', error: err })
    }
  },
  async getSouthWindGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRegionRepository.getSouthWind()
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({ message: 'Error obtaining wind data', error: err })
    }
  },

  //______________________________NORTHEAST_______________________________________

  async getNortheastHydroGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] =
        await EnergyRegionRepository.getNortheastHydro()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining hydro data', error: err })
    }
  },
  async getNortheastNuclearGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] =
        await EnergyRegionRepository.getNortheastNuclear()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining nuclear data', error: err })
    }
  },

  async getNortheastSolarGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] =
        await EnergyRegionRepository.getNortheastSolar()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining solar data', error: err })
    }
  },
  async getNortheastThermalGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] =
        await EnergyRegionRepository.getNortheastThermal()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining thermal data', error: err })
    }
  },
  async getNortheastWindGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRegionRepository.getNortheastWind()
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({ message: 'Error obtaining wind data', error: err })
    }
  },

  //______________________________COSU_______________________________________

  async getCosuHydroGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRegionRepository.getCosuHydro()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining hydro data', error: err })
    }
  },
  async getCosuNuclearGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRegionRepository.getCosuNuclear()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining nuclear data', error: err })
    }
  },

  async getCosuSolarGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRegionRepository.getCosuSolar()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining solar data', error: err })
    }
  },
  async getCosuThermalGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRegionRepository.getCosuThermal()
      res.status(200).json(data)
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error obtaining thermal data', error: err })
    }
  },
  async getCosuWindGeneration(_: Request, res: Response) {
    try {
      const data: EnergyData[] = await EnergyRegionRepository.getCosuWind()
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({ message: 'Error obtaining wind data', error: err })
    }
  },
}

export default RegionEnergyController
