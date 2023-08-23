import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Stack from '@mui/material';
import Paper from '@mui/material/Paper'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material';
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
                    Full Stack Development, Mobile Development, Web Development, Software Testing, QA Engineering, Communication,
                    Collaboration, Team-Player
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion className={styles.aboutaccordion}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography className={merri.className} variant="h5">Languages</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className={merri.className}>
                Languages: Python, Java, JavaScript, C++, C, Swift, SQL, Bash
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
                React.js, Vue.js, Node.js, express.js, next.js, React Native, Flask, Django, 
                SpringBoot, TensorFlow, PyTorch, Pandas, Numpy, Keras, ROS, Open3D, OpenCV, 
                Beautiful Soup, Ansible
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
                Git, AWS services, Oracle, MongoDB, Firebase, Vercel, Google Cloud,
                Docker, Kubernetes, Postman, Hadoop
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
        <Tab label="My story" {...a11yProps(0)} className='tab'/>
        <Tab label="Campus involvement" {...a11yProps(1)} />
        <Tab label="Hobbies" {...a11yProps(2)} />
        <Tab label="Skills" {...a11yProps(3)} />
        </Tabs>
    </Box>
    <CustomTabPanel value={value} index={0}>
        <Paper elevation={3} className={styles.aboutcard}>
            <CardContent className={[styles.aboutcardtxt, merri.className]}>
                First of all, thanks for visiting my portfolio💻! I&apos;m <b>EXCITED</b> you are here!👋 <br></br>
                <br></br>
                A brief introduction about me. My name&apos;s Max(Yinghao) Liu and I&apos;m a rising junior majoring in computer science 
                and data science at University of Michigan, Ann Arbor. I&apos;m a programmer, graphics designer and photographer. The reason
                I choose to study this field is because I believe that tech brings people and organizations closer🧑‍. I&apos;m not only passionate 
                about artistic expression through tech, I also value intelligentual vitality in the process of coming up with innovative solutions 
                that do social good💻. I&apos;m intrigued by the design and implementation of intelligent systems and I&apos;m interested in learning
                more about robotics🤖. <br></br>
                <br></br>
                I’m actively searching for opportunities as a full stack software development engineer. I am an open-minded, motivated and inquisitive 
                person. I have good academic records and hands-on internship experience. Here&apos;s my <a href="https://www.linkedin.com/in/max-yinghao-liu-a7948a1ab/"> 
                <u>Linkedin</u> </a> if you want to check out my journey🌠.
                
            </CardContent>
        </Paper>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
        <Paper elevation={3} className={styles.aboutcard}>
            <CardContent className={[styles.aboutcardtxt, merri.className]}>
                <h3> UMich BS. Computer Science + Data Science (2022-Present) </h3>
                Tau Beta Pi (Present) <br></br>
                Bloackchain at Michigan (Present) <br></br>
                Michigan Chinese Business Club (Present) <br></br>
                MRover (Present) <br></br> 
                <br></br>
                <h3> UCI BS. Computer Science and Engineering (-2022) </h3>
                Tau Beta Pi (Present) <br></br>
                New University (Official Newspaper 2022) <br></br>
                Honors Student Council (2022) <br></br> 
            </CardContent>
        </Paper>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={2}>
        <Paper elevation={3} className={styles.aboutcard}>
            <CardContent className={[styles.aboutcardtxt, merri.className]}>
            In my free time, I love watching Netflix and movies whenever I can. My favorite director is Christopher Nolan, and my favorite show is
            WestWorld📺. I also enjoy light-hearted comedy shows like Friends. <br></br>
            <br></br>
            Additionally, I also enjoy mountain biking🚵‍♂️, soccer⚽️, and skiing🏂. I&apos;ve been playing soccer since high school and mountain biking
            is just a side hobby of mine. I picked up skiing in college and It&apos;s still learning in progress. Fun fact: I also play squash but I&apos;
            m not very good at it. <br></br>
            <br></br>
            I love humanities and I always believe humanities powers technological advancement. In my free time, I&apos;m devoted to reading literature, 
            philosophy, and history💡. I love the phrase of &quot;standing on the shoulder of giants&quot; because it allows me to think in different perspectives.
            I also enjoy creating digital graphics in my free time🎨. Artistic expression is vital in the world where more tasks can be automated now and I
            value my unique way of channeling my feelings through creativity.
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
