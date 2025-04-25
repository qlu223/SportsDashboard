const url = "https://fantasy.premierleague.com/api/bootstrap-static/";

async function fetchData() {
    try{
    let response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        let data = await response.json();

        return data;
    }
        catch (error) {
            console.error('Error fetching data:', error);
    }   
};

async function getLeagueData(){
    let data = await fetchData();

    return data['teams'];
}

async function L