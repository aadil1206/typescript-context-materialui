import React, { useState, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormControlLabel from '@mui/material/FormControlLabel';

interface IndeterminateCheckboxProps {}

const TerminateCheckbox: React.FC<IndeterminateCheckboxProps> = () => {
  const [checked, setChecked] = useState([true, false] as [boolean, boolean]);
  const [checked2, setChecked2] = useState([true, false,false] as [boolean, boolean,boolean]);
  const [drop, setDrop] = useState(false);

  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };
  const handleChange4 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked2([event.target.checked, event.target.checked,event.target.checked]);
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };
  const handleChange5 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked2([event.target.checked, checked2[1],checked2[2]]);
  };
  const handleChange6 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked2([checked2[0],event.target.checked, checked2[2]]);
  };
  const handleChange7 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked2([checked2[0],checked2[1],event.target.checked ]);
  };

  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const CheckboxConfig: { label: string; handleChange: (event: ChangeEvent<HTMLInputElement>) => void }[] = [
    { label: 'support', handleChange: handleChange2 },
    { label: 'customer_success', handleChange: handleChange3 },
  ];
  const CheckboxConfig2: { label: string; handleChange: (event: ChangeEvent<HTMLInputElement>) => void }[] = [
    { label: 'graphic_design', handleChange: handleChange5 },
    { label: 'product_design', handleChange: handleChange6 },
    { label: 'web_design', handleChange: handleChange7 },
  ];
  {console.log(checked2[1]===checked2[2])}
  return (
    <div>
      <FormControlLabel
        label="customer_service"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      <ArrowDropDownIcon onClick={() => setDrop(!drop)} />
      {drop && (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          {CheckboxConfig.map((config, index) => (
            <FormControlLabel
              key={index}
              label={config.label}
              control={<Checkbox checked={checked[index]} onChange={config.handleChange} />}
            />
          ))}
        </Box>
      )}
      <div>
       <FormControlLabel
        label="design"
        control={
          <Checkbox
            checked={checked2[0] && checked2[1] && checked2[2]}
            indeterminate={checked2.some(Boolean) && !checked2.every(Boolean)}
            onChange={handleChange4}
            
          />
        }
      />
      <ArrowDropDownIcon onClick={() => setDrop(!drop)} />
      {drop && (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          {CheckboxConfig2.map((config, index) => (
            <FormControlLabel
              key={index}
              label={config.label}
              control={<Checkbox checked={checked2[index]} onChange={config.handleChange} />}
            />
          ))}
        </Box>
      )}</div>
    </div>
  );
};

export default TerminateCheckbox;
