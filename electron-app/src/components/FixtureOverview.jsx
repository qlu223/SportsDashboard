import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
//Reference: https://mui.com/material-ui/react-list/
export default function BasicList() {
  const [fixtures, setFixtures] = useState([]);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await window.fplAPI.getFilteredFixturesData();
        const teams = await window.fplAPI.getLeagueData();
        setFixtures(data);
        setTeams(teams);
      } catch (err) {
        console.error("Error fetching FPL data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  // Convert ISO fixture times to Date objects
  const fixturesWithDates = fixtures.map(f => ({
    ...f,
    kickoff_time: new Date(f.kickoff_time),
  }));

  // Find the latest past or current gameweek
  const now = new Date();
  const pastFixtures = fixturesWithDates.filter(f => f.kickoff_time <= now);

  const latestGameweek =
    pastFixtures.length > 0
      ? Math.max(...pastFixtures.map(f => f.event))
      : null;

  const recentWeekFixtures = fixturesWithDates.filter(
    f => f.event === latestGameweek
  );
  /**
    * Input: teamId(int)
    * Returns: team name corresponding to the id (String)
   */
  function getTeamName(teamId) {
    const team = teams.find(t => t.id === teamId);
    return team ? team.name : 'Unknown';
  }

  return (
    <Box
      sx={{
        borderRadius: '10px',
        marginRight: '45px',
        width: {
                xs: '100%',  // full width on mobile
                sm: '75%',   // 75% width on tablets
                md: '75%'    // 50% width on desktop
                },
        maxWidth: 360,
        bgcolor: 'white',
        p: 2,
      }}
    >
        <Typography variant="h6" gutterBottom align= "center">
            Recently Played Matches
        </Typography>
        <Typography variant="h6" gutterBottom>
            Gameweek {latestGameweek}
        </Typography>

        <List
            sx={{
                maxHeight: '250px', 
                overflowY: 'auto',
            }}
            >
        {recentWeekFixtures.map((fixture, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={`${getTeamName(fixture.team_h)} ${fixture.team_h_score} - ${fixture.team_a_score} ${getTeamName(fixture.team_a)}`}
                secondary={fixture.kickoff_time.toLocaleString()}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
