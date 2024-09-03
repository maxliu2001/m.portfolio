import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardContent from '@mui/material/CardContent';
import styles from '@/styles/Home.module.css'
import { merri } from '..';

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

const BasicAccordion = () => {
    return (
        <div>
        <Accordion className={styles.aboutaccordion}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={merri.className} variant="h5">Key Skills</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className={merri.className}>
                    Cloud Computing, Distributed Systems, Full Stack Development, Software Systems, Communication, Team-Player
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion className={styles.aboutaccordion}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography className={merri.className} variant="h5">Programming Languages</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className={merri.className}>
                Python, Java, JavaScript, C++, C, Swift, SQL, Bash, Go
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion className={styles.aboutaccordion}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
            >
            <Typography className={merri.className} variant="h5">Frameworks & Libraries</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className={merri.className}>
                Apache Samza, Apache Kafka, Apache Airfow, AWS, GCP, K9S, Docker,
                Terraform, Ansible, ROS, PyTorch, Open3D, OpenCV, React, Node, express, Spring
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion className={styles.aboutaccordion}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
            >
            <Typography className={merri.className} variant="h5">Tools & Services</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className={merri.className}>
                Docker, Kubernetes, CI/CD (Lighthouse CI, Karma, Jasmine, Puppeteer), 
                Git, AWS, Oracle, MongoDB, Firebase, Vercel, GCP,
                Docker, Kubernetes
            </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
    );
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
        <Tab label="Intro" {...a11yProps(0)} className='tab'/>
        <Tab label="Education" {...a11yProps(1)} />
        <Tab label="Fun Facts" {...a11yProps(2)} />
        <Tab label="Qualifications" {...a11yProps(3)} />
        </Tabs>
    </Box>
    <CustomTabPanel value={value} index={0}>
        <Paper elevation={3} className={styles.aboutcard} >
            <CardContent className={[styles.aboutcardtxt, merri.className]}>
                Thanks for visiting my portfolio💻! I&apos;m <b>EXCITED</b> you are here!👋 <br></br>
                <br></br>
                A brief introduction about me. My name&apos;s Max(Yinghao) Liu and I&apos;m a senior majoring in computer science 
                and data science at University of Michigan, Ann Arbor. I&apos;m a programmer, graphics designer and photographer. I believe that 
                tech brings people and organizations closer🧑‍ through innivation. <br></br>
                <br></br>
                I&apos;m not only passionate about artistic expression through tech, I also value 
                intelligentual vitality in the process of coming up with interdisciplinary solutions 🔧 to real world problems. I&apos;m intrigued
                 by the design and implementation of intelligent systems, especially robotics🤖. <br></br>
                <br></br>
                I’m actively searching for opportunities as a AI/Data infra engineer. I am a highly motivated and open-minded
                person. I boast strong academic and industrial experiences. Here&apos;s my <a href="https://www.linkedin.com/in/max-liu-a7948a1ab/"> 
                <u>Linkedin</u></a> for a quick peek at my journey🌠.
                
            </CardContent>
        </Paper>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
        <Paper elevation={3} className={styles.aboutcard}>
            <CardContent className={[styles.aboutcardtxt, merri.className]}>
                <h3> UMich BS. Computer Science + Data Science (2022-Present) </h3>
                Tau Beta Pi <br></br>
                Bloackchain at Michigan <br></br>
                Michigan Chinese Business Club <br></br>
                MRover <br></br> 
                <br></br>
                <h3> UCI BS. Honors Computer Science and Engineering (-2022) </h3>
                Tau Beta Pi <br></br>
                New University (Official Campus Newspaper) <br></br>
                Honors Student Council <br></br> 
            </CardContent>
        </Paper>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={2}>
        <Paper elevation={3} className={styles.aboutcard}>
            <CardContent className={[styles.aboutcardtxt, merri.className]}>
            In my free time, I love watching movies and TV shows📺. My favorite director is Christopher Nolan, and my favorite show is
            WestWorld. I also enjoy some light-hearted comedy like the Office. <br></br>
            <br></br>
            Additionally, I also enjoy mountain biking🚵‍♂️, soccer⚽️, and skiing🏂. I&apos;ve been playing soccer since high school and I 
            learnt how to play lacrosse and squash (at a very amatuer level). <br></br>
            <br></br>
            I indulge in humanities, particularly in philosophy and history. Exploring the plenthora of possibilities of technology advancement instead
            of mindlessly chasing the buzzword (like AI) gives me much to reflect on what I learnt from the CS world.
            </CardContent>
        </Paper>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={3}>
        <Paper elevation={3} className={styles.aboutcard}>
            <CardContent className={[styles.aboutcardtxt, merri.className]}>
                <BasicAccordion/>
            </CardContent>
        </Paper>
    </CustomTabPanel>
    </Box>
);
}
