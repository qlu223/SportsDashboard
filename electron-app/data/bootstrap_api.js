export default class BootstrapAPI {
    url = "https://fantasy.premierleague.com/api/bootstrap-static/";
    /**
     * Retrieves data from bootstrap-static URL
     * @returns A JSON response
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
     * Retrieves team data from API
     * @returns an array of dictionaries, each dictionary referring to a particular team
     */
    async getLeagueData() {
        let data = await this.fetchData();
        //console.log(data['teams'])
        return data['teams'];
    }
    /**
     * Retrieves player data from API
     * @returns an array of dictionaries, each dictionary referring to a particular player
     */
    async getPlayerData() {
        let data = await this.fetchData();
        //console.log(data['elements'][0])
        return data['elements'];
    }


}

module.exports = BootstrapAPI;

