window.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await window.fplAPI.getData();
    document.getElementById('output').textContent = JSON.stringify(data.elements.slice(0, 5), null, 2);
  } catch (error) {
    document.getElementById('output').textContent = 'Failed to load data';
    console.error(error);
  }
});