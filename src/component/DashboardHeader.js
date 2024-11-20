import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box } from '@mui/material';

export default function DashboardHeader() {
  return (
    <AppBar position="static" sx={{ width: '100vw',padding:0 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between',flexWrap:'wrap' }}>
        <span style={{ fontSize:'1.2rem' }}>Spero Home Healthcare Services</span>
        <Box display="flex" alignItems="center" justifyContent="space-between" gap={1} sx={{ width:{ xs:'100%',md:'20%' } }}>
          <Typography variant="body2" sx={{ marginRight: 1 }}>
            Welcome, Management Dashboard
          </Typography>
          <Avatar sx={{ bgcolor: '#757575' }}>S</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
