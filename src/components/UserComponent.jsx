import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image1 from '../../public/image.jpg'
import { Avatar, FormControlLabel } from '@mui/material';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Form from './Form';


export default function UserComponent() {

    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));

    return (
        <>
        <div className='flex justify-center'>

        <Card sx={{ maxWidth: 345, p:2 }}>

            <div className='flex text-end justify-end '>
                <div className='bg-orange-200 rounded-sm'>
                <Typography sx={{fontWeight: 'bold',fontSize:9, p:0.5, color:'#993d00' }}>Pending</Typography>
                </div>
            </div>
            <div id='imagediv' className='flex justify-center '>
                <div id='circular cover image' className='border-[1px] rounded-full p-2 border-dashed'>

                    <Avatar
                        alt="Remy Sharp"
                        src={image1}
                        sx={{ height: 150, width: 150 }}
                    />
                </div>
            </div>
            <CardContent>

                <div id='card lower section' className='flex justify-between my-5'>
                    <div>
                    <Typography gutterBottom variant="body1" sx={{ fontWeight: 'bold' }} component="div">
                        Banned
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Apply disable account
                    </Typography>
                    </div>

                    <div id='btn ios type'>
                        <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                        />
                    </div>
                </div>

                <div id='card lower section' className='flex justify-between'>
                    <div>

                    <Typography gutterBottom variant="body1" sx={{ fontWeight: 'bold' }} component="div">
                        Email Verified
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Disabling this will automatically
                    </Typography>

                    </div>

                    <div id='btn ios type'>
                        <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                        />
                    </div>
                </div>
            </CardContent>

            <CardActions>
                <div className='flex justify-center w-full'>
                    <Button variant="outlined" size="small" color="error">
                        Delete user
                    </Button>
                </div>
            </CardActions>
        </Card>
        </div>

        </>

    );
}
