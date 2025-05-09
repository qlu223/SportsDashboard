export default class BootstrapAPI {
    url = "https://fantasy.premierleague.com/api/bootstrap-static/";

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
    async getLeagueData() {
        let data = await this.fetchData();
        console.log(data['teams'])
        return data['teams'];
    }

    async getPlayerData() {
        let data = await this.fetchData();
        //console.log(data['elements'])
        return data['elements'];
    }

    async getFilteredLeagueData() {
        let data = await this.getLeagueData()

        let table = []

        for (let i in data) {
            let row = data[i];
            let new_row = { code: row.code, name: row.name, pts: row.points };

            table.push(new_row)
        }
        console.log(table)
        return table;
    }
}

let t = new BootstrapAPI;
t.getFilteredLeagueData()

