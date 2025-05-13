window.onload = async function () {
  try {
    const data = await window.fplAPI.getData();

    const players = data.elements;
    const teams = data.teams;
    const positions = data.element_types;

    const container = document.getElementById('table-container');

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headers = ['Name', 'Team', 'Position', 'Price (M)', 'Points'];
    const headRow = document.createElement('tr');
    headers.forEach(text => {
      const th = document.createElement('th');
      th.textContent = text;
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);

    players.forEach(player => {
      const row = document.createElement('tr');
      const teamName = teams[player.team - 1]?.name || 'Unknown Team';
      const posName = positions[player.element_type - 1]?.singular_name_short || 'Unknown Position';

      const fields = [
        `${player.first_name} ${player.second_name}`,
        teamName,
        posName,
        (player.now_cost / 10).toFixed(1),
        player.total_points
      ];

      fields.forEach(field => {
        const td = document.createElement('td');
        td.textContent = field;
        row.appendChild(td);
      });

      tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    container.innerHTML = '';
    container.appendChild(table);
  } catch (error) {
    console.error("Error fetching data from main process:", error);
    document.getElementById('table-container').textContent = "Failed to load data.";
  }
};