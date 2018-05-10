 
  const getPeopleData = async () => {
    const url = 'https://swapi.co/api/people/'
    const response = await fetch(url)
    const data = await response.json()
    const people = await data.results.map (async person => {
      const homePlanet = await getHomeWorld(person.homeworld)
      const species= await getSpecies(person.species)
      return {
        name: person.name,
        ...homePlanet,
        species
      }
    }) 
    return Promise.all(people)
  }

  const getHomeWorld = async (url) => {
      const response = await fetch(url)
      const planet = await response.json()
      return {planet:planet.name, population:planet.population}
  }
  
  const getSpecies = async (url) => {
      const response = await fetch(url)
      const species = await response.json()
      return species.name
  }

  const getPlanets = async () => {
    const url = 'https://swapi.co/api/planets'
    const response = await fetch(url)
    const data = await response.json()
    const planets = await data.results.map(async planet => {
      const planetResidents = await getPlanetPeople(planet.residents)
      return{
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: planetResidents
      }
    })
    
    return Promise.all(planets)
  }

  const getPlanetPeople = (url) => {
    const unresolvedPromises = url.map(async result => {
        const response = await fetch(result)
        const residents= await response.json()

        return residents.name
      })
    return Promise.all(unresolvedPromises)
  }

  const getVehicles = async () => {
    const url = 'https://swapi.co/api/vehicles/'
    const response = await fetch(url)
    const data = await response.json()
    const vehicles = await data.results.map(async vehicle => {
      return {
        name: vehicle.name,
        model: vehicle.model,
        type: vehicle.vehicle_class,
        passengers: vehicle.passengers
      }
    })
    return Promise.all(vehicles)
  }

  export {
      getPeopleData,
      getPlanets,
      getVehicles
  }
