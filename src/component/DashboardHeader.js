import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box } from '@mui/material';

export default function DashboardHeader() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#d2b48c', width: '100vw' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          Spero Home Healthcare Services
        </Typography>

        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body2" sx={{ marginRight: 1 }}>
            Welcome, Management Dashboard
          </Typography>
          <Avatar sx={{ bgcolor: '#757575' }}>S</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
