import React from 'react'

import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

const DistrictItems = ({ selectedDistrict, onDistrictChange }) => {
//   const [selectedDistrict, setSelectedDistrict] = useState('');

  const handleDistrictChange = (event) => {
    const districtName = event.target.value;
    onDistrictChange(districtName)
  }
  return (
    <>
      <RadioGroup
        value={selectedDistrict}
        onChange={handleDistrictChange}
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        <FormControlLabel value="종로구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="종로구" />
        <FormControlLabel value="중구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="중구" />
        <FormControlLabel value="용산구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="용산구" />
        <FormControlLabel value="성동구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="성동구" />
        <FormControlLabel value="광진구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="광진구" />
        <FormControlLabel value="동대문구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="동대문구" />
        <FormControlLabel value="중랑구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="중랑구" />
        <FormControlLabel value="성북구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="성북구" />
        <FormControlLabel value="강북구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="강북구" />
        <FormControlLabel value="도봉구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="도봉구" />
        <FormControlLabel value="노원구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="노원구" />
        <FormControlLabel value="은평구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="은평구" />
        <FormControlLabel value="서대문구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="서대문구" />
        <FormControlLabel value="마포구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="마포구" />
        <FormControlLabel value="양천구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="양천구" />
        <FormControlLabel value="강서구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="강서구" />
        <FormControlLabel value="구로구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="구로구" />
        <FormControlLabel value="금천구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="금천구" />
        <FormControlLabel value="영등포구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="영등포구" />
        <FormControlLabel value="동작구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="동작구" />
        <FormControlLabel value="관악구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="관악구" />
        <FormControlLabel value="서초구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="서초구" />
        <FormControlLabel value="강남구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="강남구" />
        <FormControlLabel value="송파구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="송파구" />
        <FormControlLabel value="강동구" control={<Radio />} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} label="강동구" />
      </RadioGroup>
    </>
  )
}

export default DistrictItems