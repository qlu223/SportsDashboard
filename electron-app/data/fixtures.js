/**
 * Class for interacting with public Premier League fixtures API
 */
class FixturesAPI {
  url = "https://fantasy.premierleague.com/api/fixtures/";

  /**
   * Fetches JSON data from API
   * @returns JS object with fixture data
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
   * Extracts fixture data from API
   * @returns Array of dictionaries, with each dictionary
   * representing a fixture
   */
  async getFixturesData() {
    let data = await this.fetchData();

    return data;
  }

  /**
   * Extracts fixture data to be presented in app
   * @returns Array of dictionaries, with each dictionary
   * representing a fixture
   */
  async getFilteredFixturesData() {
    let data = await this.getFixturesData();

    let table = [];

    for (let i in data) {
      let row = data[i];
      let new_row = {
        code: row.code,
        team_h: row.team_h,
        team_a: row.team_a,
        time: row.kickoff_time,
        team_h_score: row.team_h_score,
        team_a_score: row.team_a_score,
      };

      table.push(new_row);
    }

    return table;
  }
}
module.exports = FixturesAPI;

