/**
 * API for interacting with FPL bootstrap API
 */
export default class BootstrapAPI {
    url = "https://fantasy.premierleague.com/api/bootstrap-static/";
    /**
     * Pulls all data from Public API
     * @returns parsed JSON object
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
     * Extracts team info from JSON object
     * @returns Dictionary object containing team info
     */
    async getLeagueData() {
        let data = await this.fetchData();
        //console.log(data['teams'])
        return data['teams'];
    }
    /**
     * Extracts player info from JSON object
     * @returns Dictionary object containing player info
     */
    async getPlayerData() {
        let data = await this.fetchData();
        //console.log(data['elements'][0])
        return data['elements'];
    }
    /**
     * Extracts relevant player info to be displayed from dictionary
     * @returns Array of dictionaries with each dictionary corresponding 
     * to relevant player info
     */
    async getFilteredPlayerData() {
        let data = await this.getPlayerData();
        //console.log(data)
        let table = []

        for (let i in data) {
            let row = data[i];
            let new_row = {
                id: row.id,
                name: row.web_name,
                price: (row.now_cost / 10),
                influence: row.influence,
                creativity: row.creativity,
                threat: row.threat,
                form: row.form,
                pts: row.total_points
            };

            table.push(new_row)
        }
        //console.log(table)
        return table;
    }
    /**
     * Extracts relevant team info to be displayed from dictionary
     * @returns Array of dictionaries with each dictionary corresponding 
     * to relevant team info
     */
    async getFilteredLeagueData() {
        let data = await this.getLeagueData()

        let table = []

        for (let i in data) {
            let row = data[i];
            let new_row = { code: row.code, name: row.name, win: row.win, draw: row.draw, loss: row.loss, pts: row.points };

            table.push(new_row)
        }
        //console.log(table)
        return table;
    }
}
/*
let t = new BootstrapAPI;
t.getFilteredPlayerData()
*/
