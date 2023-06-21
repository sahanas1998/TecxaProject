import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { start } from '@popperjs/core';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import { Stack, margin } from '@mui/system';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import {CardItem} from './LeftSideBar'

const RightSideBar = () => {
  return (
    <div>
      <div class="flex flex-row">
        <div>
        <Card sx={{ minWidth: 260 , minHeight :150 , borderRadius:10, marginLeft:17 }} >
      <CardContent>
        <Typography variant="h5" sx={{textAlign:start , margin:2}}>
           Product Sale Chart
        </Typography>
        <Stack direction="row" spacing={2}>
          <div className='grid grid-cols-2 gap-14 text-center pb-4'>
        <Typography variant="body2" component="div">
          <h1>$5620</h1><h1 className='text-gray-500'>Online Sales</h1>
        </Typography>
        <Typography variant="body2" component="div">
         <h1>$2350</h1><h1 className='text-gray-500'>Offline Sales</h1>
        </Typography>
        </div>
         </Stack>
          <Typography variant="body2" component="div" class='pl-8 pb-4' >
          <img src='https://redyellowblue.org/wp-content/uploads/2017/07/ryb-color-wheel.png' height="170" width="170"/>
          </Typography>
          <Typography variant="body2" component="div">
            <ul role="list" class="list-disc pl-8 pb-2 space-y-3">
              <li>Gadget Branding</li>
              <li>Souvernir Gift Products</li>
              <li>Advertisement & Influencer</li>
            </ul>
        </Typography>
      </CardContent>
    </Card>
        </div>
      </div>
      <div class="flex flex-row ...">
      <Box sx={{display: 'flex', marginTop:3, marginLeft:17,flexWrap: 'wrap','& > :not(style)': {width: 260,height: 270}}}>
        <Paper sx={{ backgroundColor: '#1a237e' }}>
        <CardItem title="Sold" price="1890" value="+11%" icon={<DataThresholdingIcon/>} color="#1a237e" />
        </Paper>
      </Box>
    </div>
          </div>
  )
}

export default RightSideBar