import NextLink from 'next/link';

import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { useAppDispatch } from 'store';
import { openSideBar } from 'store/ui';

export const Navbar = () => {
  const dispatch = useAppDispatch();

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton
          onClick={() => dispatch(openSideBar())}
          size='large'
          edge='start'
        >
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
