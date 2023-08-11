import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Assuming you have installed react-feather for Chevron icons
import Box from '@mui/material/Box';


const languageOptions = [
  { value: 'en', label: 'Eng' },
  { value: 'ru', label: 'Rus' }
];

const LanguageSelect: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = React.useState(languageOptions[0].value);
  
    const handleChange = (event: SelectChangeEvent<string>) => {
      setSelectedLanguage(event.target.value);
    };
  
    return (
      <Box sx={{ width: 'min-content', maxHeight: 40, minWidth: 65 }}>
        <Select
          value={selectedLanguage}
          onChange={handleChange}
          variant="outlined"
          sx={{
            maxWidth: 80,
            maxHeight: 40,
            minWidth: 65,
            minHeight: 25,
            '& .MuiSelect-select': {
              paddingRight: '2rem',
            },
            '& .MuiSelect-icon': {
              right: '0.5rem',
              top: 'calc(50% - 0.5rem)',
              color: 'black',
              position: 'absolute',
            },
          }}
          IconComponent={FiChevronUp}
        >
          {languageOptions.map((option) => (
            <MenuItem sx={{fontSize:16}} key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
    );
  };
  



export default LanguageSelect;
