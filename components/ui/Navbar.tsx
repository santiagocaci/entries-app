import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { UiContext } from 'context/ui';
import NextLink from 'next/link';

export const Navbar = () => {
  const { openSideMenu } = useContext(UiContext);

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton onClick={openSideMenu} size='large' edge='start'>
          <MenuIcon />
        </IconButton>
        <NextLink href='/' passHref>
          <Link underline='none'>
            <Typography color={'white'} variant='h6'>
              OpenJira
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
