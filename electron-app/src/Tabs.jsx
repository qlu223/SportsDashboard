import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicMenu from './Menu.jsx';
import TeamPage from './TeamPage.jsx';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', height: '100vh' }}
    >
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
        >
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="Fixtures" {...a11yProps(1)} />
            <Tab label="Players" {...a11yProps(2)} />
            <Tab label="Teams" {...a11yProps(3)} />
            <Tab label="Visualizations" {...a11yProps(4)} />
            <Tab label="Predictions" {...a11yProps(5)} />
        </Tabs>
        <TabPanel value={value} index={0}>
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                <BasicMenu />
            </Box>
            Overview
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                <BasicMenu />
            </Box>
            Fixturessss
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                <BasicMenu />
            </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <TeamPage />
        </TabPanel>
        <TabPanel value={value} index={4}>
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                <BasicMenu />
            </Box>
            Visualizations
        </TabPanel>
        <TabPanel value={value} index={5}>
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                <BasicMenu />
            </Box>
            Predictions
      </TabPanel>
    </Box>
  );
}
