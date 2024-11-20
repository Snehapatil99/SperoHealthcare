import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useFilter } from './FilterContext'; // Import the context hook

export default function ServiceDetailsChart({ filter }) {
  // const { filter } = useFilter(); // Get the filter value from context
  const [serviceData, setServiceData] = useState([]);

  console.log("selectfilter", filter)

  useEffect(() => {
    // Make the API request based on the current filter value
    axios
      .get(`http://122.176.232.35:8008/web/Details_of_ServicesOngoingPendingCompleted/?${filter}`)
      .then((response) => {
        setServiceData(response.data);
        console.log("data", response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the service data:', error);
      });
  }, [filter]); // The data will refetch when the filter changes

  return (
    <Box p={1} sx={{ backgroundColor: '#f0f4f7', borderRadius: '10px', width: '98%', maxWidth: 800, border: '1px #000 solid' }}>
      <Typography variant="h6" align="center" gutterBottom>
        SERVICE DETAILS
      </Typography>

      <Box display="flex" justifyContent="space-around" mb={0.5}>
        <Typography variant="caption" color="purple">■ Completed Services</Typography>
        <Typography variant="caption" color="skyblue">■ Ongoing</Typography>
        <Typography variant="caption" color="tomato">■ Pending</Typography>
      </Box>

      {serviceData && serviceData.map((service, index) => (
        <Box key={index} display="flex" alignItems="center" mb={0.5}>
          <Box sx={{ width: '50%', display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1">{service.srv_name}</Typography>
          </Box>

          <Box sx={{ width: '50%', display: 'flex', alignItems: 'center' }}>
            {service.data.total_completed_till_date > 0 && (
              <Box
                sx={{
                  width: `${service.data.total_completed_till_date * 2}px`,
                  height: '5vh',
                  backgroundColor: '#4B0082',
                  borderTopRightRadius: '4px',
                  borderBottomRightRadius:'4px',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  color:'white'
                }}
              >
                { service.data.total_completed_till_date ?? 0 }
              </Box>
            )}
            {service.data.total_ongoing_till_date > 0 && (
              <Box
                sx={{
                  width: `${service.data.total_ongoing_till_date * 2}px`,
                  height: '5vh',
                  backgroundColor: '#87CEEB',
                  borderTopRightRadius: '4px',
                  borderBottomRightRadius:'4px',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  color:'white'
                }}
              >{ service.data.total_ongoing_till_date ?? 0 }
              </Box>
            )}
            {service.data.total_pending_till_date > 0 && (
              <Box
                sx={{
                  width: `${service.data.total_pending_till_date * 2}px`,
                  height: '5vh',
                  backgroundColor: '#FF6347',
                  borderTopRightRadius: '4px',
                  borderBottomRightRadius:'4px',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  color:'white'
                }}
              >{ service.data.total_pending_till_date ?? 0 }
              </Box>
            )}
            {/* <Typography variant="caption" sx={{ marginLeft: '8px', color: '#FF6347' }}>
              {service.data.total_pending_till_date > 0 ? service.data.total_pending_till_date : ''}
            </Typography> */}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
