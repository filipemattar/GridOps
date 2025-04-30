const BASE_URL = 'https://integra.ons.org.br/api/energiaagora/Get'

function format(str: string) {
  if (str === 'sin') return str.toUpperCase()

  if (str === 'Centro-OesteeSudeste') return 'SudesteECentroOeste'

  return str.charAt(0).toUpperCase() + str.slice(1)
}

const EnergyAPI = {
  async getEnergyDataFromONS(region: string, source: string) {
    const response = await fetch(
      `${BASE_URL}/Geracao_${format(region)}_${format(source)}_json`
    )
    if (response.body === null) {
      return []
    }
    const data = await response.json()

    return data
  },
}

export default EnergyAPI
