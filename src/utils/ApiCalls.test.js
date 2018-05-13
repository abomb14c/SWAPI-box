import {
  getPeopleData,
  getPlanets,
  getVehicles,
  getHomeWorld,
  getSpecies
} from "./ApiCalls";
import * as mockData from "./mockData";

describe("ApiCalls", () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({ data: "mock data" })
      })
    );
  });

  describe("getPeopleData", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          ok: true,
          json: () => Promise.resolve(mockData.fetchedPeopleData)
        })
      );
    });

    it("calls fetch with the correct argument", async () => {
      await getPeopleData();
      await expect(window.fetch).toHaveBeenCalled();
    });

    it("returns the correct people data", async () => {
      const results = [
        {
          id: "people0",
          name: "Luke Skywalker",
          planet: undefined,
          population: undefined,
          species: undefined
        }
      ];
      await expect(getPeopleData()).resolves.toEqual(results);
    });
  });

  describe("getHomeWorld", () => {
    it("calls fetch with the correct argument", async () => {
      const url = "www.url.com";
      await getHomeWorld(url);
      await expect(window.fetch).toHaveBeenCalledWith(url);
    });
    it("returns the correct planet data", async () => {
      const results = {
        planet: "Tatooine",
        population: "200000"
      };
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          ok: true,
          json: () => Promise.resolve(mockData.fetchedHomeWorld)
        })
      );
      await expect(getHomeWorld()).resolves.toEqual(results);
    });
  });

  describe("getSpecies", () => {
    it("calls fetch with the correct argument", async () => {
      const url = "www.url.com";
      await getSpecies(url);
      await expect(window.fetch).toHaveBeenCalledWith(url);
    });
    it("returns the correct species data", async () => {
      const results = "Droid";
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          ok: true,
          json: () => Promise.resolve(mockData.fetchedSpecies)
        })
      );

      await expect(getSpecies()).resolves.toEqual(results);
    });
  });
  describe("getPlanets", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          ok: true,
          json: () => Promise.resolve(mockData.fetchedPlanets)
        })
      );
    });
    it("calls fetch with the correct argument", async () => {
    
      await getPlanets();
      await expect(window.fetch).toHaveBeenCalled();
    });

    it("returns the correct people data", async () => {
      const results = [
        {
          climate: "temperate",
          id: "planet0",
          name: "Alderaan",
          population: "2000000000",
          residents: [undefined, undefined, undefined],
          terrain: "grasslands, mountains"
        }
      ];
      await expect(getPlanets()).resolves.toEqual(results);
    });
  });

  describe("getVehicles", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          ok: true,
          json: () => Promise.resolve(mockData.fetchedVehicles)
        })
      );
    });

    it("calls fetch with the correct argument", async () => {
      const url = "https://swapi.co/api/vehicles/"
      await getVehicles(url);
      await expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it("returns the correct people data", async () => {
      const results = [
        {
          id: "vehicle0",
          model: "Digger Crawler",
          name: "Sand Crawler",
          passengers: "30",
          type: "wheeled"
        }
      ];
      await expect(getVehicles()).resolves.toEqual(results);
    });
  });
});

