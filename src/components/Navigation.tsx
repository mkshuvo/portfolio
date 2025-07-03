'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(46, 204, 113, 0.1)',
              },
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                color: activeSection === item.href.substring(1) ? 'primary.main' : 'text.primary',
                fontWeight: activeSection === item.href.substring(1) ? 600 : 400,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: scrolled 
              ? 'rgba(15, 20, 25, 0.98)' 
              : 'rgba(15, 20, 25, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: scrolled ? '1px solid rgba(46, 204, 113, 0.2)' : 'none',
            transition: 'all 0.3s ease',
            boxShadow: scrolled ? 3 : 0,
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  onClick={() => scrollToSection('#home')}
                  sx={{
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    cursor: 'pointer',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  MKS
                </Typography>
              </motion.div>

              {isMobile ? (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ color: 'primary.main' }}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {navItems.map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      <Button
                        onClick={() => scrollToSection(item.href)}
                        sx={{
                          color: activeSection === item.href.substring(1) ? 'white' : '#BDC3C7',
                          fontWeight: 500,
                          mx: 0.5,
                          px: 2,
                          py: 1,
                          borderRadius: '25px',
                          background: activeSection === item.href.substring(1) 
                            ? 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)'
                            : 'transparent',
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            color: 'white',
                            background: activeSection === item.href.substring(1)
                              ? 'linear-gradient(135deg, #58D68D 0%, #2ECC71 100%)'
                              : 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 5px 15px rgba(46, 204, 113, 0.3)',
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            backgroundColor: 'background.paper',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;
