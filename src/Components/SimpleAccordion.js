import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './SimpleAccordion.css'

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion sx={{background:'#303030'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:'white'}}>What is Netflix</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color:'white'}}>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
          </Typography>
        </AccordionDetails>
      </Accordion  >
      <Accordion sx={{background:'#303030'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{color:'white'}}>How much does Netflix cost?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color:'white'}}>
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
          </Typography>
        </AccordionDetails>
      </Accordion >
      <Accordion sx={{background:'#303030'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{color:'white'}}> Where Can I Watch</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color:'white'}}>
          Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
          </Typography>
         </AccordionDetails>
      </Accordion>
      <Accordion sx={{background:'#303030'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{color:'white'}}>How do I cancel</Typography>
        </AccordionSummary>
        <AccordionDetails><Typography sx={{color:'white'}}>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</Typography></AccordionDetails>
      </Accordion>
      <Accordion sx={{background:'#303030'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{color:'white'}}>What can I watch on Netflix</Typography>
          
        </AccordionSummary>
        <AccordionDetails><Typography sx={{color:'white'}}>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</Typography></AccordionDetails>
      </Accordion>
    </div>
  );
}
