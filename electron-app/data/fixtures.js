
class FixturesAPI{
    url = "https://fantasy.premierleague.com/api/fixtures/";

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
    async getFixturesData() {
        let data = await this.fetchData();
        //console.log(data[0])
        return data;
    }
    async getFilteredFixturesData() {
        let data = await this.getFixturesData();
        
        let table = []

        for (let i in data) {
            let row = data[i];
            let new_row = { code: row.code, team_h: row.team_h, team_a: row.team_a, time: row.kickoff_time, team_h_score: row.team_h_score, team_a_score: row.team_a_score};

            table.push(new_row)
        }
        //console.log(table)
        return table;
    }
}

let t = new FixturesAPI;
t.getFilteredFixturesData()