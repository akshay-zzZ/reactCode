import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Cards from './Cards';

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 500,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

  function renderProduct ({ Tower_Lead, nstatus, nplanned, ystatus, yplanned }) {
    if(ystatus == null)
       ystatus = 0;
    if(nstatus == null)
       nstatus = 0;
    if(nplanned == null)
       nplanned = 0;
    if(yplanned == null)
       yplanned = 0;
    return (
      <div>
        <Cards tl = { Tower_Lead } ns = { nstatus } np = { nplanned } ys = { ystatus } yp = { yplanned }/> 
        <br/>
      </div>
    );
  }


export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [products, setProducts] = useState([]);


  async function fetchData() {
    const res = await fetch("http://localhost:4000/");
    res
      .json()
      .then(res => setProducts(res))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (

    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="June" {...a11yProps(0)} />
        <Tab label="July" {...a11yProps(1)} />
        <Tab label="August" {...a11yProps(2)} />
        <Tab label="Sepetember" {...a11yProps(3)} />
        <Tab label="October" {...a11yProps(4)} />
        <Tab label="November" {...a11yProps(5)} />
        <Tab label="December" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        No Records Found
      </TabPanel>
      <TabPanel value={value} index={1}>
      No Records Found
      </TabPanel>
      <TabPanel value={value} index={2}>
        { products.map((product) => (
          <Cards tl = { product.Tower_Lead } />
        ))}
      </TabPanel>
      <TabPanel value={value} index={3}>
      No Records Found
      </TabPanel>
      <TabPanel value={value} index={4}>
      No Records Found
      </TabPanel>
      <TabPanel value={value} index={5}>
      No Records Found
      </TabPanel>
      <TabPanel value={value} index={6}>
      No Records Found
      </TabPanel>
    </div>
  );
}
