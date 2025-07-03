'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Card,
  CardMedia,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Email,
  LinkedIn,
  GitHub,
  Twitter,
  GetApp,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

const titles = [
  'Software Engineer',
  'Full Stack Developer',
  'Backend Specialist',
  'DevOps Enthusiast',
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    const typeSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(prev => {
          if (isDeleting) {
            return currentTitle.substring(0, prev.length - 1);
          } else {
            return currentTitle.substring(0, prev.length + 1);
          }
        });
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const socialLinks = [
    { icon: LinkedIn, href: 'https://linkedin.com/in/mohsin-khan-shuvo-558aba125', color: '#0077B5' },
    { icon: GitHub, href: 'https://github.com/mkshuvo', color: '#333' },
    { icon: Twitter, href: '#', color: '#1DA1F2' },
    { icon: Email, href: 'mailto:mkshuvo123@gmail.com', color: '#EA4335' },
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0F1419 0%, #1A1E23 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 12 },
        pb: 8,
      }}
    >
      {/* Particles.js Style Background */}
      <ParticlesBackground
        particleCount={isMobile ? 60 : 120}
        maxDistance={150}
        particleSpeed={1.5}
        particleColor="#2ECC71"
        lineColor="#2ECC71"
      />

      <Container 
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Box sx={{ flex: { xs: '1', lg: '2' }, width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                }}
              >
                Hi, I&apos;m{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Mohsin Khan Shuvo
                </Box>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: '#BDC3C7',
                  fontWeight: 400,
                  mb: 3,
                  minHeight: { xs: '60px', md: '80px' },
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                {displayText}
                <Box
                  component="span"
                  sx={{
                    borderRight: '2px solid #2ECC71',
                    animation: 'blink 1s infinite',
                    '@keyframes blink': {
                      '0%, 50%': { opacity: 1 },
                      '51%, 100%': { opacity: 0 },
                    },
                  }}
                />
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#BDC3C7',
                  mb: 4,
                  maxWidth: '600px',
                  lineHeight: 1.7,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                }}
              >
                Software Engineer with hands-on expertise in distributed systems, backend services, and frontend frameworks. Designs scalable and maintainable software solutions with a focus on performance and operational efficiency. Engages closely with DevOps to align engineering execution with infrastructure strategy.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Email />}
                  onClick={() => scrollToSection('contact')}
                  sx={{
                    background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #58D68D 0%, #2ECC71 100%)',
                    },
                  }}
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<GetApp />}
                  href="/resume.pdf"
                  target="_blank"
                  download
                  sx={{
                    borderColor: '#2ECC71',
                    color: '#2ECC71',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      backgroundColor: '#2ECC71',
                      color: 'white',
                    },
                  }}
                >
                  Download Resume
                </Button>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        width: 50,
                        height: 50,
                        border: '2px solid #2ECC71',
                        color: '#2ECC71',
                        backgroundColor: 'rgba(46, 204, 113, 0.1)',
                        '&:hover': {
                          backgroundColor: '#2ECC71',
                          color: 'white',
                          boxShadow: '0 0 30px rgba(46, 204, 113, 0.4)',
                        },
                      }}
                    >
                      <social.icon />
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>

          <Box sx={{ flex: { xs: '1', lg: '1' }, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    border: '2px solid rgba(46, 204, 113, 0.3)',
                    borderRadius: '50%',
                    top: 0,
                    left: 0,
                  }}
                />
                <Card
                  sx={{
                    width: { xs: 280, md: 350 },
                    height: { xs: 280, md: 350 },
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid #2ECC71',
                    boxShadow: '0 0 50px rgba(46, 204, 113, 0.3)',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/placeholder-avatar.png"
                    alt="Mohsin Khan Shuvo"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder-avatar.png';
                    }}
                  />
                </Card>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
        }}
        onClick={() => scrollToSection('about')}
      >
        <Box
          sx={{
            width: 30,
            height: 50,
            border: '2px solid #2ECC71',
            borderRadius: '20px',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            pt: 1,
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: 6,
              height: 6,
              backgroundColor: '#2ECC71',
              borderRadius: '50%',
            }}
          />
        </Box>
      </motion.div>
    </Box>
  );
};

export default Hero;
