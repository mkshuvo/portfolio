'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider
} from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Email,
  Phone,
  LocationOn
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    icon: <LinkedIn />,
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/mohsin-khan-shuvo-558aba125',
    color: '#0077B5'
  },
  {
    icon: <GitHub />,
    label: 'GitHub',
    url: 'https://github.com/mkshuvo',
    color: '#333'
  },
  {
    icon: <Email />,
    label: 'Email',
    url: 'mailto:mkshuvo123@gmail.com',
    color: '#ea4335'
  }
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

const Footer: React.FC = () => {
  const currentYear = 2025;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: 4,
              mb: 4
            }}
          >
            {/* Brand Section */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h4"
                component="h3"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Mohsin Khan Shuvo
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Software Engineer
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 300 }}>
                Building scalable systems and creating exceptional user experiences with modern technologies.
              </Typography>
            </Box>

            {/* Quick Links */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Quick Links
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'row', md: 'column' },
                  flexWrap: { xs: 'wrap', md: 'nowrap' },
                  gap: 1,
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                {quickLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        cursor: 'pointer',
                        px: { xs: 1, md: 0 },
                        py: 0.5,
                        borderRadius: 1,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: 'primary.main',
                          bgcolor: (theme) => `${theme.palette.primary.main}08`
                        }
                      }}
                      onClick={() => scrollToSection(link.href)}
                    >
                      {link.name}
                    </Typography>
                  </motion.div>
                ))}
              </Box>
            </Box>

            {/* Contact Info */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Get In Touch
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Email sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    mkshuvo123@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Phone sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    +8801707533967
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <LocationOn sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    Dhaka, Bangladesh
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Bottom Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © {currentYear} Mohsin Khan Shuvo. All rights reserved.
            </Typography>

            {/* Social Links */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    size="small"
                    onClick={() => window.open(social.url, '_blank')}
                    sx={{
                      color: 'text.secondary',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: social.color,
                        bgcolor: `${social.color}15`,
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
