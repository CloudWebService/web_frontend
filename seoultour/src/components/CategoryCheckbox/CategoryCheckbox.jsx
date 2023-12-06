import React from 'react'

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

const CategoryItems = ({ selectedCategory, onCategoryChange }) => {
  
  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    const updatedCategories = [...selectedCategory];

    if (event.target.checked) {
      updatedCategories.push(categoryName);
    } else {
      const index = updatedCategories.indexOf(categoryName);
      if (index !== -1) {
        updatedCategories.splice(index, 1);
      }
    }

    // 부모 콜백함수 호출해서 상태 업데이트
    onCategoryChange(updatedCategories);
  };

  return (
    <>
      <FormGroup>
      <FormControlLabel 
        control={<Checkbox checked={selectedCategory.includes("콘서트")} />} 
        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} 
        label="콘서트" 
        onChange={handleCategoryChange}
        value="콘서트"
      />
      <FormControlLabel 
        control={<Checkbox checked={selectedCategory.includes("클래식")} />} 
        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} 
        label="클래식" 
        onChange={handleCategoryChange}
        value="클래식" 
      />
      <FormControlLabel 
        control={<Checkbox checked={selectedCategory.includes("국악")} />} 
        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} 
        label="국악" 
        onChange={handleCategoryChange}
        value="국악" 
      />
      <FormControlLabel 
        control={<Checkbox checked={selectedCategory.includes("연극")} />} 
        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} 
        label="연극" 
        onChange={handleCategoryChange}
        value="연극" 
      />
      <FormControlLabel 
        control={<Checkbox checked={selectedCategory.includes("무용")} />} 
        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} 
        label="무용" 
        onChange={handleCategoryChange}
        value="무용" 
      />
      <FormControlLabel 
        control={<Checkbox checked={selectedCategory.includes("교육/체험")} />} 
        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} 
        label="교육/체험" 
        onChange={handleCategoryChange}
        value="교육/체험" 
      />
      <FormControlLabel 
        control={<Checkbox checked={selectedCategory.includes("뮤지컬/오페라")} />} 
        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} 
        label="뮤지컬/오페라" 
        onChange={handleCategoryChange}
        value="뮤지컬/오페라" 
      />
      <FormControlLabel 
        control={<Checkbox checked={selectedCategory.includes("전시/미술")} />} 
        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} 
        label="전시/미술" 
        onChange={handleCategoryChange}
        value="전시/미술" 
      />
      <FormControlLabel 
        control={<Checkbox checked={selectedCategory.includes("영화")} />} 
        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} 
        label="영화" 
        onChange={handleCategoryChange}
        value="영화" 
      />
      <FormControlLabel 
        control={<Checkbox checked={selectedCategory.includes("독주/독창회")} />} 
        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} 
        label="독주/독창회" 
        onChange={handleCategoryChange}
        value="독주/독창회" 
      />
      <FormControlLabel 
        control={<Checkbox checked={selectedCategory.includes("축제-문화/예술")} />} 
        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} 
        label="축제-문화/예술" 
        onChange={handleCategoryChange}
        value="축제-문화/예술" 
      />
      <FormControlLabel 
        control={<Checkbox checked={selectedCategory.includes("축제-자연/경관")} />} 
        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} 
        label="축제-자연/경관" 
        onChange={handleCategoryChange}
        value="축제-자연/경관" 
      />
      <FormControlLabel 
        control={<Checkbox checked={selectedCategory.includes("축제-전통/역사")} />} 
        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} 
        label="축제-전통/역사"
        onChange={handleCategoryChange}
        value="축제-전통/역사" 
      />
      <FormControlLabel 
        control={<Checkbox checked={selectedCategory.includes("축제-시민화합")} />} 
        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} 
        label="축제-시민화합" 
        onChange={handleCategoryChange}
        value="축제-시민화합" 
      />
      <FormControlLabel 
        control={<Checkbox checked={selectedCategory.includes("축제-기타")} />} 
        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} 
        label="축제-기타" 
        onChange={handleCategoryChange}
        value="축제-기타" 
      />
      <FormControlLabel 
        control={<Checkbox checked={selectedCategory.includes("기타")} />} 
        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }}} 
        label="기타" 
        onChange={handleCategoryChange}
        value="기타" 
      />
      </FormGroup>    
    </>
  )
}

export default CategoryItems