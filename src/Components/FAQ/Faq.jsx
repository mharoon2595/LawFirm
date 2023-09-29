import React from 'react'
import style from './Faq.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '../../Assets/ExpandIcon.png'
import { useState } from 'react';


const Faq = () => {
  const [rotationDegree, setRotationDegree] = useState(0);

  const rotateImage = () => {
    setRotationDegree(rotationDegree + 90);
  };

  return (
    <div className={style.wrapper}>
        <div className={style.seperate}>
            <div>
                FAQ
            </div>
            <div className={style.acc}>
            <Accordion style={{
          backgroundColor: '#1D1D1D'}}>
        <AccordionSummary
          expandIcon={<img src={ExpandMoreIcon} style={{ transform: `rotate(${rotationDegree}deg)`, cursor: 'pointer' }}
          onClick={rotateImage}></img>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{
         color: 'white'}}>Do I need a personal injury report?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{
         color: 'white',
         opacity: '0.3'}}>
            Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exer. Amet minim mollit non deserunt
ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{
          backgroundColor: '#1D1D1D'}}>
        <AccordionSummary
          expandIcon={<img src={ExpandMoreIcon} style={{ transform: `rotate(${rotationDegree}deg)`, cursor: 'pointer' }}
          onClick={rotateImage}></img>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{
         color: 'white'}}>How much is my case worth?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{
         color: 'white',
         opacity: '0.3'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{
          backgroundColor: '#1D1D1D'}}>
        <AccordionSummary
          expandIcon={<img src={ExpandMoreIcon} style={{ transform: `rotate(${rotationDegree}deg)`, cursor: 'pointer' }}
          onClick={rotateImage}></img>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{
         color: 'white'}}>What should I do right after a car accident</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{
         color: 'white',
         opacity: '0.3'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{
          backgroundColor: '#1D1D1D'}}>
        <AccordionSummary
          expandIcon={<img src={ExpandMoreIcon} style={{ transform: `rotate(${rotationDegree}deg)`, cursor: 'pointer' }}
          onClick={rotateImage}></img>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{
         color: 'white'}}>How much is my case worth?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{
         color: 'white',
         opacity: '0.3'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
            </div>
        </div>
    </div>
  )
}

export default Faq