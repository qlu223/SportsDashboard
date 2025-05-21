/**
 * Class for interacting with public Premier League bootstrap API
 */
class BootstrapAPI {
  url = "https://fantasy.premierleague.com/api/bootstrap-static/";

  /**
   * Fetches JSON data from API
   * @returns JS object with player and league data
   */
  async fetchData() {
    try {
      let response = await fetch(this.url);

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      let data = await response.json();

      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  /**
   * Retrieves league data from JSON object
   * @returns Array of dictionaries, each representing
   * a team
   */
  async getLeagueData() {
    let data = await this.fetchData();

    return data["teams"];
  }

  /**
   * Retrieves player data from JSON object
   * @returns Array of dictionaries, each representing
   * a player
   */
  async getPlayerData() {
    let data = await this.fetchData();
    return data["elements"];
  }
}

module.exports = BootstrapAPI;
