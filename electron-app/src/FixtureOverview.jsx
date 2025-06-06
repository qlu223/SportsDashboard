import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function BasicList() {
    const [fixtures, setFixtures] = useState([]);
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchData() {
        try {
            const data = await window.fplAPI.getFilteredFixturesData();
            const teams = await window.fplAPI.getLeagueData();
            console.log(data);
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

    const today = new Date();
    const upcoming = new Date(today);
    upcoming.setDate(today.getDate() + 7);

  return (
    <Box sx={{ 
        borderRadius: '10px',
        marginRight: '45px',
        width: '100%', 
        maxWidth: 360, 
        bgcolor: 'white' }}>
        
        <List>
            <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="SOMETHING" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    
                </ListItemIcon>
                <ListItemText primary="something else" />
            </ListItemButton>
            </ListItem>
        </List>
    </Box>
  );
}