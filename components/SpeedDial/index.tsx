import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { House, Info, Mail, Star } from '@mui/icons-material';
import { blue, red } from '@mui/material/colors';

const actions = [
  { icon: <a href="/"><House /></a>, name: "Home" },
  { icon: <a href="/about"><Info /></a>, name: "About" },
  { icon: <a href="/reviews"><Star /> </a>, name: "Reviews" },
];

export default function BasicSpeedDial() {
  return (
    <div className="xl:hidden h-[0em]">
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16}}
        icon={<SpeedDialIcon />}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name as unknown as React.Key}
            icon={action.icon}
            tooltipTitle={action.name}
            className="bg-red-100"
          />
        ))}
      </SpeedDial>
    </Box>
    </div>
  );
}