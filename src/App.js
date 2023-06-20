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
          <Box sx={{marginLeft:4}}>
            <Main/>
          </Box>
        </Grid>
        <Grid item xs={8} sx={{marginTop:3 , marginBottom:5}} >
          <Box sx={{marginLeft:4}}>
            <LeftSideBar/>
          </Box>
        </Grid>
        <Grid item xs={4} sx={{marginTop:3, marginBottom:5}}>
          <Box >
            <RightSideBar/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

