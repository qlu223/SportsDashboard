
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
        console.log(data[0])
        return data;
    }
}

let t = new FixturesAPI;
t.getFixturesData()