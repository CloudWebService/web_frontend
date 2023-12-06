import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DistrictRadio from '../DistrictRadio/DistrictRadio';
import CategoryCheckbox from '../CategoryCheckbox/CategoryCheckbox';

export default function AccordionMenu({ isEvent, selectedDistrict, selectedCategory, onDistrictChange, onCategoryChange }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>자치구</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DistrictRadio selectedDistrict={selectedDistrict} onDistrictChange={onDistrictChange} />
        </AccordionDetails>
      </Accordion>
      {isEvent? (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
          <Typography>카테고리</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <CategoryCheckbox selectedCategory={selectedCategory} onCategoryChange={onCategoryChange}/>
          </AccordionDetails>
        </Accordion>
      ) : null}
      
    </div>
  );
}