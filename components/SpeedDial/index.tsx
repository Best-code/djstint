import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { House, Info, Mail, Star } from '@mui/icons-material';
import { blue, red } from '@mui/material/colors';
import Link from 'next/link';

const actions = [
  { icon: <Link href="/"><House /></Link>, name: "Home" },
  { icon: <Link href="/about"><Info /></Link>, name: "About" },
  { icon: <Link href="/reviews"><Star /> </Link>, name: "Reviews" },
  { icon: <Link href="mailto:cpmraygun@gmail.com?subject=Contact Dj's Tinting from my Website!"><Mail /></Link>, name: "Contact Us" }
];

export default function BasicSpeedDial() {
  return (
    <div className="xl:hidden h-[0em]">
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position: 'relative', zIndex: '10'}}>
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