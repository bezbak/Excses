import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FiChevronRight } from 'react-icons/fi';

interface Props {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  label: string;

}

const CategorySelect: React.FC<Props> = ({ categories, selectedCategory, onCategoryChange, label}) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onCategoryChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth sx={{pb:2}}>
      <InputLabel id="category-select-label">{label}</InputLabel>
      <Select 
        labelId="category-select-label"
        value={selectedCategory}
        label={label}
        onChange={handleChange}
        IconComponent={FiChevronRight}>
        {categories.map(category => 
          <MenuItem key={category} value={category} sx={{fontSize:14}}>
            {category}
          </MenuItem>)}
          
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
