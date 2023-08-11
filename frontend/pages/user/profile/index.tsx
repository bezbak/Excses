import React from 'react'
import { Avatar, Box, Grid, Link, Typography, Container } from '@mui/material';
import { useUser } from '@/hooks/useUser';

const Profile = () => {
  const user = useUser()
  const {fullName, avatar, products, rating, country, bio} = user
  console.log(user)
  return (
    <Box sx={{ mb: 4 }} color='initial'>
      <Container>
      <Typography variant="h4" align="center" gutterBottom>
        {fullName}
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center" m={0}>
        <Avatar src={avatar} alt="avatar" sx={{ width: 200, height: 200 }} />
        <Grid item xs={2}>
          <Typography variant="h5" align="center" fontWeight={600} >
            {products?.length} 0
          </Typography>
          <Typography variant="subtitle2" align="center" >
            Публикаций
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h5" align="center" fontWeight={600} >
            {rating}
          </Typography>
          <Typography variant="subtitle2" align="center" >
            Рейтинг
          </Typography>
        </Grid>
        <Grid item xs={2}>
          {country && (
            <>
              {/* <FlagIcon code={country.code.toLowerCase()} size={32} /> */}
              <Typography variant="subtitle2" align="center" >
                {country.name}
              </Typography>
            </>
          )}
        </Grid>
      </Grid>

      <Box  mb={2}>
        <Typography variant="h5" >{fullName}</Typography>
        <Typography variant="body1" >{bio}</Typography>
      </Box>

      <Grid container justifyContent="center" alignItems="center">
        <Link href="#">
          <Avatar src="/assets/excses-transformed 1.png" alt="logo img " sx={{ mr: 2 }} />
        </Link>
        <Link href="#">
          <Avatar src="/assets/Frame 623.svg" alt="logo img " sx={{ mr: 2 }} />
        </Link>
        <Link href="#">
          <Avatar src="/assets/image 47.png" alt="logo img " sx={{ mr: 2 }} />
        </Link>
        <Link href="#">
          <Avatar src="/assets/material-symbols_call.svg" alt="logo img " sx={{ mr: 2 }} />
        </Link>
        <Link href="#">
          <Avatar src="/assets/Rectangle 1994.png" alt="logo img " />
        </Link>
      </Grid>
      </Container>
    </Box>
  );
};

export default Profile;
