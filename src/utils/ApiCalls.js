 
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
    const planetResidents = await getPlanetPeople(data.results)
    
    return planetResidents
  }

  const getPlanetPeople = (data) => {
    const unresolvedPromises = data.map( result => {
      const planets = result.residents.map( async resident => {
        const response = await fetch(resident)
        const planetData = await response.json()

        return planetData.name
      })
      return Promise.all([...planets, result])
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
        class: vehicle.vehicle_class,
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


//   const url = 'https://swapi.co/api/people/'
//   const response = await fetch(url)
//   const data = await response.json()
//   const people = await data.results.map (async person => {
//     const homePlanet = await getHomeWorld(person.homeworld)
//     const species= await getSpecies(person.species)
//     return {
//       name: person.name,
//       ...homePlanet,
//       species
//     }
//   }) 
//   return Promise.all(people)
// }

  // fetchStaffBio= (staffMembers) => {
  //   const unresolvedData = staffMembers.bio.map(staffMember => {
  //     return fetch(staffMember.info)
  //     .then(response => response.json())
  //     .then(data => ({...data, name: staffMember.name}))
  //   })
  //   return Promise.all(unresolvedData)
  // }