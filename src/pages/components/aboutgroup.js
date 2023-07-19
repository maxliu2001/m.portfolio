import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import Icon from '@mui/material';
import CardContent from '@mui/material/CardContent';
import styles from '@/styles/Home.module.css'
import { merri } from '..';
import GlobalStyles from '@mui/material';
import { List, ListItem, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';

function CustomTabPanel(props) {
const { children, value, index, ...other } = props;
return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
    >
    {value === index && (
        <Box sx={{ p: 3 }}>
            {children}
        </Box>
    )}
    </div>
);
}

function a11yProps(index) {
return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
};
}

export default function BasicTabs() {
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
    setValue(newValue);
};

return (
    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="tabs of my stories"
            textColor="inherit"
            >
        <Tab label="My story" {...a11yProps(0)} className='tab'/>
        <Tab label="Campus involvement" {...a11yProps(1)} />
        <Tab label="Hobbies" {...a11yProps(2)} />
        <Tab label="Skills" {...a11yProps(3)} />
        </Tabs>
    </Box>
    <CustomTabPanel value={value} index={0}>
        <Paper elevation={3} className={styles.aboutcard}>
            <CardContent className={styles.aboutcardtxt}>
            <p className={merri.className}> Hi there! My name&apos;s Max Liu and I&apos;m a rising junior majoring in CS and DS at 
            University of Michigan. I&apos;m a programmer, photographer and graphics designer. I&apos;m passionate about expressing
            myself through the digital media. </p>
            </CardContent>
        </Paper>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
        <Paper elevation={3} className={styles.aboutcard}>
            <CardContent className={styles.aboutcardtxt}>
                <p className={merri.className}> I&apos;m interested in full-stack development and robotics. I currently work for MMINT 
                Lab at UMich and I&apos;m a member at Tau Beta Bi and MRover. Currently. I&apos;m interning at UM ITS as an SDE intern.</p>
            </CardContent>
        </Paper>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={2}>
        <Paper elevation={3} className={styles.aboutcard}>
            <CardContent className={styles.aboutcardtxt}>
            <p className={merri.className}> Outside of school, I love mountain biking and creating graphics. I&apos;m also a huge 
            soccer fan and definitely won&apos;t miss out on major games. I love traveling and eating great good as well. </p>
            </CardContent>
        </Paper>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={3}>
        <Paper elevation={3} className={styles.aboutcard}>
            <CardContent className={styles.aboutcardtxt}>
                <p className={merri.className}> Full Stack Development, Mobile/Web App Development </p>
                <p className={merri.className}> Languages: Python, Java, JS, C++, Swift ... </p>
                <p className={merri.className}> Libraries: React.js, Vue.js, Node.js, express.js, next.js, React Native, Flask, Django ... </p>
                <p className={merri.className}> Frameworks: AWS, Oracle, MongoDB, Firebase, SpringBoot, Vercel ... </p>
                <p className={merri.className}> Tools: Github CI/CD, Github actions, Docker, MERN, Postman ... </p>
            </CardContent>
        </Paper>
    </CustomTabPanel>
    </Box>
);
}
