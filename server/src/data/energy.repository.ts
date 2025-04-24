import fs from 'fs/promises'
import { EnergyData } from '../types/energyTypes'

let hydro: Array<EnergyData> = []

let nuclear: Array<EnergyData> = []

let solar: Array<EnergyData> = []

let thermal: Array<EnergyData> = []

let wind: Array<EnergyData> = []

async function loadData() {
  try {
    hydro = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockHydroEnergyData.json',
        'utf-8'
      )
    )
    nuclear = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockNuclearEnergyData.json',
        'utf-8'
      )
    )
    solar = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockSolarEnergyData.json',
        'utf-8'
      )
    )
    thermal = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockThermalEnergyData.json',
        'utf-8'
      )
    )
    wind = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockWindEnergyData.json',
        'utf-8'
      )
    )
  } catch (error) {
    console.error('Error loading data:', error)
  }
}

loadData()

const EnergyRepository = {
  async getHydro(): Promise<EnergyData[]> {
    return hydro
  },
  async getNuclear(): Promise<EnergyData[]> {
    return nuclear
  },
  async getSolar(): Promise<EnergyData[]> {
    return solar
  },
  async getThermal(): Promise<EnergyData[]> {
    return thermal
  },
  async getWind(): Promise<EnergyData[]> {
    return wind
  },
}

export default EnergyRepository
