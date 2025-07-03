'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Paper,
  Alert,
  Snackbar
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  Send
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: <Email />,
    title: 'Email',
    value: 'mkshuvo123@gmail.com',
    link: 'mailto:mkshuvo123@gmail.com'
  },
  {
    icon: <Phone />,
    title: 'Phone',
    value: '+8801707533967',
    link: 'tel:+8801707533967'
  },
  {
    icon: <LocationOn />,
    title: 'Location',
    value: 'Dhaka, Bangladesh',
    link: null
  }
];

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
  }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    // For demo purposes, we'll just show a success message
    setShowAlert(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        background: (theme) => `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background floating elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: (theme) => `${theme.palette.primary.main}15`,
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: (theme) => `${theme.palette.secondary.main}10`,
          animation: 'float 8s ease-in-out infinite reverse'
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Let&apos;s discuss your next project or opportunity
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4
          }}
        >
          {/* Contact Info */}
          <Box sx={{ flex: { xs: 1, md: '0 0 40%' } }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Let&apos;s Connect
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                I&apos;m always interested in discussing new opportunities, innovative projects, 
                and how we can work together to create something amazing.
              </Typography>

              {/* Contact Info Cards */}
              <Box sx={{ mb: 4 }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        mb: 2,
                        cursor: info.link ? 'pointer' : 'default',
                        transition: 'all 0.3s ease',
                        '&:hover': info.link ? {
                          transform: 'translateY(-2px)',
                          boxShadow: (theme) => theme.shadows[8]
                        } : {}
                      }}
                      onClick={() => info.link && window.open(info.link, '_blank')}
                    >
                      <CardContent sx={{ display: 'flex', alignItems: 'center', py: 2 }}>
                        <Box
                          sx={{
                            mr: 2,
                            color: 'primary.main',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" color="text.secondary">
                            {info.title}
                          </Typography>
                          <Typography variant="body1" fontWeight="medium">
                            {info.value}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Box>

              {/* Social Links */}
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Follow Me
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      onClick={() => window.open(social.url, '_blank')}
                      sx={{
                        bgcolor: 'background.paper',
                        color: social.color,
                        boxShadow: (theme) => theme.shadows[2],
                        '&:hover': {
                          bgcolor: social.color,
                          color: 'white',
                          boxShadow: (theme) => theme.shadows[8]
                        }
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* Contact Form */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: (theme) => `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Send Message
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'column', sm: 'row' }, 
                        gap: 3 
                      }}
                    >
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Box>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<Send />}
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          '&:hover': {
                            background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                          }
                        }}
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Box>
        </Box>
      </Container>

      {/* Success Alert */}
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={() => setShowAlert(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setShowAlert(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Thank you for your message! I&apos;ll get back to you soon.
        </Alert>
      </Snackbar>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </Box>
  );
};

export default Contact;
