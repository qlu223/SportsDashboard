class BootstrapAPI {
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

        return data['teams'];
    }
}
