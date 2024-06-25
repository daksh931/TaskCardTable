import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Divider } from '@mui/material';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PersonIcon from '@mui/icons-material/Person';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardComponent() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Card sx={{ maxWidth: 345, m:2}}>
      <div className='px-2'> 

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        
      />
     
      <CardContent>
      <Typography level="h2" sx={{fontWeight: 'bold' , py:[0.5]}}>Software Engineer</Typography>
        <Typography variant="body2" color="text.secondary" sx={{py:[0.5]}}>
          Posted date
        </Typography>

        <Typography variant="body2" color="success.main" sx={{fontWeight: 600 , py:[0.5]}}> 
          <PeopleIcon />12 Candidates
        </Typography >

      </CardContent>
      </div>

        <hr id='divider line' className='w-full text-xl border border-dashed bg-gray-400' />
        
        <div id='4-icons'  className=' py-4 w-full text-gray-600 px-5 flex text-nowrap justify-between flex-wrap'>

        <div className='w-1/2' >
        <Typography variant='caption' sx={{}}> 
        <SignalCellularAltIcon  /> No experience
        </Typography>
        </div>

        <div className='w-1/2'>
        <Typography variant="caption"> 
        <WatchLaterIcon /> Full-Time
        </Typography>
        </div >

        <div className='w-1/2'>
        <Typography variant="caption"> 
        <MonetizationOnIcon /> Negotiable
        </Typography>
        </div>

        <div className='w-1/2'>
        <Typography variant="caption"> 
        <PersonIcon /> CEO
        </Typography>
        </div>

        </div>

      
    </Card>
    </>

  );
}
