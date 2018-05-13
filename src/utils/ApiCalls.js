  const getPeopleData = async () => {
    try {
    const url = 'https://swapi.co/api/people/'
    const response = await fetch(url)
    const data = await response.json()
    const people = await data.results.map (async (person, index) => {
      const homePlanet = await getHomeWorld(person.homeworld)
      const species= await getSpecies(person.species)
      return {
        id:`people${index}`,
        name: person.name,
        ...homePlanet,
        species,
        category:"people"
      }
    }) 
    return Promise.all(people)
  } catch(error) {
    throw new Error("it's not working!")
  }
  }

  const getHomeWorld = async (url) => {
    try {
      const response = await fetch(url)
      const planet = await response.json()
      return {planet:planet.name, population:planet.population}
    }catch(error){
      throw new Error("it's not working!")
    }
  }
  
  const getSpecies = async (url) => {
    try {
      const response = await fetch(url)
      const species = await response.json()
      return species.name
    }catch(error){
      throw new Error("it's not working!")
    }
  }

  const getPlanets = async () => {
    try{
    const url = 'https://swapi.co/api/planets'
    const response = await fetch(url)
    const data = await response.json()
    const planets = await data.results.map(async (planet, index) => {
      const planetResidents = await getPlanetPeople(planet.residents)
      return{
        id:`planet${index}`,
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: planetResidents,
        category: "planets"
      }
    })
    return Promise.all(planets)
  }catch(error){
    throw new Error("it's not working!")
  }
};

  const getPlanetPeople = (url) => {
    try {
    const unresolvedPromises = url.map(async result => {
        const response = await fetch(result)
        const residents= await response.json()

        return residents.name
      })
    return Promise.all(unresolvedPromises)
  }catch(error){
    throw new Error("it's not working!")
  }
  }

  const getVehicles = async () => {
    try {
    const url = 'https://swapi.co/api/vehicles/'
    const response = await fetch(url)
    const data = await response.json()
    const vehicles = await data.results.map(async (vehicle, index) => {
      return {
        id:`vehicle${index}`,
        name: vehicle.name,
        model: vehicle.model,
        type: vehicle.vehicle_class,
        passengers: vehicle.passengers,
        category: "vehicles"
      }
    })
    return Promise.all(vehicles)
  }catch(error){
    throw new Error("it's not working!")
  }
}

  export {
      getPeopleData,
      getPlanets,
      getVehicles,
      getHomeWorld,
      getSpecies
  }
