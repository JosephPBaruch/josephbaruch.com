import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import MoreIcon from '@mui/icons-material/MoreVert';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  '@media all': {
    minHeight: 128,
  },
}));

export default function App() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        {/* Change position to fixed or sticky to render at the top */}
        <AppBar position="fixed">
          <StyledToolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
            >
              Joseph Baruch
            </Typography>
            <IconButton size="large" aria-label="search" color="inherit">
              {/* <SearchIcon /> */}
            </IconButton>
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
              {/* <MoreIcon /> */}
            </IconButton>
          </StyledToolbar>
        </AppBar>
      </Box>
      {/* Add some padding to avoid content overlapping with AppBar */}
      <Box sx={{ pt: '128px' }}>
        {/* Rest of your page content */}
      </Box>
    </div>
  );
}
