const BASE_URL = 'https://integra.ons.org.br/api/energiaagora/Get'

function formatRegion(str: string) {
  if (str === 'sin') return str.toUpperCase()

  if (str === 'cosu') return 'SudesteECentroOeste'

  return str.charAt(0).toUpperCase() + str.slice(1)
}

function formatSource(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const EnergyAPI = {
  async getEnergyDataFromONS(region: string, source: string) {
    const response = await fetch(
      `${BASE_URL}/Geracao_${formatRegion(region)}_${formatSource(source)}_json`
    )
    const data = await response.json()
    console.log(data)
    return data
  },
}

export default EnergyAPI
