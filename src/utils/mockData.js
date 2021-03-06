const fetchedHomeWorld = {
  name: "Tatooine",
  rotation_period: "23",
  orbital_period: "304",
  diameter: "10465",
  climate: "arid",
  gravity: "1 standard",
  terrain: "desert",
  surface_water: "1",
  population: "200000",
  residents: [
    "https://swapi.co/api/people/1/",
    "https://swapi.co/api/people/2/",
    "https://swapi.co/api/people/4/",
    "https://swapi.co/api/people/6/",
    "https://swapi.co/api/people/7/",
    "https://swapi.co/api/people/8/",
    "https://swapi.co/api/people/9/",
    "https://swapi.co/api/people/11/",
    "https://swapi.co/api/people/43/",
    "https://swapi.co/api/people/62/"
  ],
  films: [
    "https://swapi.co/api/films/5/",
    "https://swapi.co/api/films/4/",
    "https://swapi.co/api/films/6/",
    "https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/1/"
  ],
  created: "2014-12-09T13:50:49.641000Z",
  edited: "2014-12-21T20:48:04.175778Z",
  url: "https://swapi.co/api/planets/1/"
};

const fetchedPeopleData = {
  results: [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      homeworld: "https://swapi.co/api/planets/1/",
      films: [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"
      ],
      species: ["https://swapi.co/api/species/1/"],
      vehicles: [
        "https://swapi.co/api/vehicles/14/",
        "https://swapi.co/api/vehicles/30/"
      ],
      starships: [
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/"
      ],
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      url: "https://swapi.co/api/people/1/"
    }
  ]
};

const fetchedSpecies = {
  name: "Droid",
  classification: "artificial",
  designation: "sentient",
  average_height: "n/a",
  skin_colors: "n/a"
};

const fetchedPlanets = {
  results: [
    {
      name: "Alderaan",
      rotation_period: "24",
      orbital_period: "364",
      diameter: "12500",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grasslands, mountains",
      surface_water: "40",
      population: "2000000000",
      residents: [
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/68/",
        "https://swapi.co/api/people/81/"
      ],
      films: ["https://swapi.co/api/films/6/", "https://swapi.co/api/films/1/"],
      created: "2014-12-10T11:35:48.479000Z",
      edited: "2014-12-20T20:58:18.420000Z",
      url: "https://swapi.co/api/planets/2/"
    }
  ]
};
const fetchedVehicles = {
  results: [
    {
      name: "Sand Crawler",
      model: "Digger Crawler",
      manufacturer: "Corellia Mining Corporation",
      cost_in_credits: "150000",
      length: "36.8",
      max_atmosphering_speed: "30",
      crew: "46",
      passengers: "30",
      cargo_capacity: "50000",
      consumables: "2 months",
      vehicle_class: "wheeled",
      pilots: [],
      films: ["https://swapi.co/api/films/5/", "https://swapi.co/api/films/1/"],
      created: "2014-12-10T15:36:25.724000Z",
      edited: "2014-12-22T18:21:15.523587Z",
      url: "https://swapi.co/api/vehicles/4/"
    }
  ]
};

export { fetchedHomeWorld, fetchedPeopleData, fetchedSpecies, fetchedPlanets, fetchedVehicles };
