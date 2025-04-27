import fs from 'fs/promises'
import { EnergyData } from '../types/energyTypes'

let northHydro: Array<EnergyData> = []

let northNuclear: Array<EnergyData> = []

let northSolar: Array<EnergyData> = []

let northThermal: Array<EnergyData> = []

let northWind: Array<EnergyData> = []

let southHydro: Array<EnergyData> = []

let southNuclear: Array<EnergyData> = []

let southSolar: Array<EnergyData> = []

let southThermal: Array<EnergyData> = []

let southWind: Array<EnergyData> = []

let northeastHydro: Array<EnergyData> = []

let northeastNuclear: Array<EnergyData> = []

let northeastSolar: Array<EnergyData> = []

let northeastThermal: Array<EnergyData> = []

let northeastWind: Array<EnergyData> = []

let cosuHydro: Array<EnergyData> = []

let cosuNuclear: Array<EnergyData> = []

let cosuSolar: Array<EnergyData> = []

let cosuThermal: Array<EnergyData> = []

let cosuWind: Array<EnergyData> = []

async function loadData() {
  try {
    northHydro = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/North/mockNorthHydro.json',
        'utf-8'
      )
    )
    northNuclear = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/North/mockNorthNuclear.json',
        'utf-8'
      )
    )
    northSolar = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/North/mockNorthSolar.json',
        'utf-8'
      )
    )
    northThermal = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/North/mockNorthThermal.json',
        'utf-8'
      )
    )
    northWind = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/North/mockNorthWind.json',
        'utf-8'
      )
    )

    // _______________________________________________SOUTH___________________________________________

    southHydro = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockHydroEnergyData.json',
        'utf-8'
      )
    )
    southNuclear = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockNuclearEnergyData.json',
        'utf-8'
      )
    )
    southSolar = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockSolarEnergyData.json',
        'utf-8'
      )
    )
    southThermal = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockThermalEnergyData.json',
        'utf-8'
      )
    )
    southWind = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockWindEnergyData.json',
        'utf-8'
      )
    )

    //________________________________________NORTHEAST_______________________________________________

    northeastHydro = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockHydroEnergyData.json',
        'utf-8'
      )
    )
    northeastNuclear = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockNuclearEnergyData.json',
        'utf-8'
      )
    )
    northeastSolar = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockSolarEnergyData.json',
        'utf-8'
      )
    )
    northeastThermal = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockThermalEnergyData.json',
        'utf-8'
      )
    )
    northeastWind = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockWindEnergyData.json',
        'utf-8'
      )
    )

    //________________________________________COSU_______________________________________________

    cosuHydro = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockHydroEnergyData.json',
        'utf-8'
      )
    )
    cosuNuclear = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockNuclearEnergyData.json',
        'utf-8'
      )
    )
    cosuSolar = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockSolarEnergyData.json',
        'utf-8'
      )
    )
    cosuThermal = JSON.parse(
      await fs.readFile(
        '/Users/filipemattar/Developer/solo-project/server/src/database/mockThermalEnergyData.json',
        'utf-8'
      )
    )
    cosuWind = JSON.parse(
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

const EnergyRegionRepository = {
  async getNorthHydro(): Promise<EnergyData[]> {
    return northHydro
  },
  async getNorthNuclear(): Promise<EnergyData[]> {
    return northNuclear
  },
  async getNorthSolar(): Promise<EnergyData[]> {
    return northSolar
  },
  async getNorthThermal(): Promise<EnergyData[]> {
    return northThermal
  },
  async getNorthWind(): Promise<EnergyData[]> {
    return northWind
  },

  async getSouthHydro(): Promise<EnergyData[]> {
    return southHydro
  },
  async getSouthNuclear(): Promise<EnergyData[]> {
    return southNuclear
  },
  async getSouthSolar(): Promise<EnergyData[]> {
    return southSolar
  },
  async getSouthThermal(): Promise<EnergyData[]> {
    return southThermal
  },
  async getSouthWind(): Promise<EnergyData[]> {
    return southWind
  },

  async getNortheastHydro(): Promise<EnergyData[]> {
    return northeastHydro
  },
  async getNortheastNuclear(): Promise<EnergyData[]> {
    return northeastNuclear
  },
  async getNortheastSolar(): Promise<EnergyData[]> {
    return northeastSolar
  },
  async getNortheastThermal(): Promise<EnergyData[]> {
    return northeastThermal
  },
  async getNortheastWind(): Promise<EnergyData[]> {
    return northeastWind
  },

  async getCosuHydro(): Promise<EnergyData[]> {
    return cosuHydro
  },
  async getCosuNuclear(): Promise<EnergyData[]> {
    return cosuNuclear
  },
  async getCosuSolar(): Promise<EnergyData[]> {
    return cosuSolar
  },
  async getCosuThermal(): Promise<EnergyData[]> {
    return cosuThermal
  },
  async getCosuWind(): Promise<EnergyData[]> {
    return cosuWind
  },
}

export default EnergyRegionRepository
