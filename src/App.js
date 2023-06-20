import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Main from './Components/Home/Main';
import LeftSideBar from './Components/Home/LeftSideBar';
import RightSideBar from './Components/Home/RightSideBar'

export const App = () => {
  return (
    <Box >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box sx={{margin:5}}>
            <Main/>
          </Box>
        </Grid>
        <Grid item xs={8} >
          <Box sx={{marginLeft:5}}>
            <LeftSideBar/>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{marginLeft:5}}>
            <RightSideBar/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

