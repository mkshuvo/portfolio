'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  IconButton,
} from '@mui/material';
import { 
  Launch, 
  GitHub, 
  Computer,
  Chat,
  ShoppingCart,
  Assessment,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Earthquake Alert System',
    description: 'A system that provides real-time earthquake alerts using Next.js and RabbitMQ with comprehensive monitoring and notification features.',
    image: '/project1.jpg',
    technologies: ['Next.js', 'NestJS', 'Docker', 'MongoDB', 'Tailwind CSS', 'Google Maps API'],
    liveUrl: '#',
    githubUrl: '#',
    icon: Assessment,
    color: '#FF6B6B',
  },
  {
    title: 'Chat Hive',
    description: 'High-performance chat application supporting 1-on-1 and group conversations with secure authentication and real-time messaging.',
    image: '/project2.jpg',
    technologies: ['TypeScript', 'Node.js', 'Express', 'Socket.io', 'JWT', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mkshuvo/chat-hive',
    icon: Chat,
    color: '#4ECDC4',
  },
  {
    title: 'Garments Management System',
    description: 'Comprehensive platform for garments industry with order management, inventory tracking, and supplier coordination.',
    image: '/project3.jpg',
    technologies: ['NestJS', 'JWT', 'TypeORM', 'Next.js', 'Docker', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    icon: Computer,
    color: '#45B7D1',
  },
  {
    title: 'Offer Zone',
    description: 'ASP.NET Core project managing discounted products from online and physical stores with comprehensive analytics.',
    image: '/project4.jpg',
    technologies: ['ASP.NET Core 3.0', 'Entity Framework', 'Identity Server', 'SQL Server', 'Bootstrap 4'],
    liveUrl: '#',
    githubUrl: '#',
    icon: ShoppingCart,
    color: '#F7DC6F',
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '3px',
                  background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
                  borderRadius: '2px',
                },
              }}
            >
              Featured Projects
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: '600px', mx: 'auto' }}
            >
              Some of my recent work showcasing various technologies and solutions
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(2, 1fr)',
            },
            gap: 4,
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(46, 204, 113, 0.1)',
                  }}
                >
                  {/* Project Image with Overlay */}
                  <Box sx={{ position: 'relative', height: 250, overflow: 'hidden' }}>
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}40 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                      }}
                    >
                      <project.icon 
                        sx={{ 
                          fontSize: 80, 
                          color: project.color,
                          opacity: 0.8,
                        }} 
                      />
                      
                      {/* Hover overlay with action buttons */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'rgba(0,0,0,0.8)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 2,
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          '&:hover': {
                            opacity: 1,
                          },
                        }}
                        className="project-overlay"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <IconButton
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              backgroundColor: 'primary.main',
                              color: 'white',
                              '&:hover': {
                                backgroundColor: 'primary.dark',
                              },
                            }}
                          >
                            <Launch />
                          </IconButton>
                        </motion.div>
                        
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <IconButton
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              backgroundColor: 'grey.800',
                              color: 'white',
                              '&:hover': {
                                backgroundColor: 'grey.900',
                              },
                            }}
                          >
                            <GitHub />
                          </IconButton>
                        </motion.div>
                      </Box>
                    </Box>

                    {/* Enable hover effect */}
                    <style jsx>{`
                      .project-overlay:hover {
                        opacity: 1 !important;
                      }
                    `}</style>
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: 'text.primary',
                      }}
                    >
                      {project.title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        lineHeight: 1.6,
                        minHeight: '4.8em', // Ensure consistent height
                      }}
                    >
                      {project.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(46, 204, 113, 0.1)',
                            color: 'primary.main',
                            border: '1px solid rgba(46, 204, 113, 0.3)',
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Box>
                    
                    <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                      <Button
                        variant="contained"
                        startIcon={<Launch />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
                          color: 'white',
                          flex: 1,
                          '&:hover': {
                            background: 'linear-gradient(135deg, #58D68D 0%, #2ECC71 100%)',
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                      
                      <Button
                        variant="outlined"
                        startIcon={<GitHub />}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          flex: 1,
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                          },
                        }}
                      >
                        Code
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
