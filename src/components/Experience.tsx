'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import { Work } from '@mui/icons-material';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Field Nation',
    period: 'Jan 2021 – Present',
    location: 'Remote',
    description: 'Field Nation is a US-based technician service marketplace.',
    responsibilities: [
      'Developed scalable services using PHP and NestJS, adhering to microservice architecture',
      'Built performant frontends with ReactJS and TypeScript',
      'Implemented event-driven systems using RabbitMQ and Kafka',
      'Collaborated with DevOps to deploy and scale services effectively',
      'Designed and optimized SQL/NoSQL schemas for querying',
      'Wrote unit tests and debugged production issues to ensure quality',
    ],
    skills: ['PHP', 'NestJS', 'ReactJS', 'TypeScript', 'RabbitMQ', 'Kafka', 'DevOps'],
  },
  {
    title: 'Freelancer',
    company: 'Freelancer.com, Fiverr',
    period: 'Nov 2017 – Aug 2018',
    location: 'Remote',
    description: 'Frontend web development and design conversion services.',
    responsibilities: [
      'Convert PSD and Figma designs into fully responsive and interactive web pages',
      'Implement responsive design to ensure optimal user experience across various devices',
      'Utilize HTML, CSS, JavaScript, and Bootstrap to create pixel-perfect layouts',
      'Optimize web pages for maximum speed and scalability',
      'Ensure cross-browser compatibility and resolve any layout issues',
      'Conduct thorough testing and debugging to ensure high-quality deliverables',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design', 'PSD to HTML'],
  },
];

const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'grey.900',
        color: 'white',
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
                color: 'white',
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
              Professional Experience
            </Typography>
            <Typography
              variant="h6"
              sx={{ maxWidth: '600px', mx: 'auto', color: 'grey.100' }}
            >
              My journey in the tech industry
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ position: 'relative' }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              top: 0,
              bottom: 0,
              width: '3px',
              background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
              transform: { xs: 'none', md: 'translateX(-50%)' },
              zIndex: 1,
            }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                  alignItems: 'center',
                  mb: 6,
                  position: 'relative',
                }}
              >
                {/* Timeline dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '20px', md: '50%' },
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: { xs: 'translateX(-50%)', md: 'translateX(-50%)' },
                    zIndex: 2,
                    boxShadow: '0 0 0 4px #0F1419',
                  }}
                >
                  <Work sx={{ color: 'white', fontSize: 30 }} />
                </Box>

                {/* Date badge */}
                <Box
                  sx={{
                    position: { xs: 'static', md: 'absolute' },
                    left: { md: index % 2 === 0 ? 'calc(50% + 100px)' : 'calc(50% - 300px)' },
                    top: { md: '15px' },
                    mb: { xs: 2, md: 0 },
                    ml: { xs: 10, md: 0 },
                  }}
                >
                  <Chip
                    label={exp.period}
                    sx={{
                      background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
                      color: 'white',
                      fontWeight: 600,
                      px: 2,
                      py: 1,
                      height: 'auto',
                      fontSize: '0.9rem',
                      whiteSpace: 'nowrap',
                    }}
                  />
                </Box>

                {/* Content card */}
                <Box
                  sx={{
                    flex: 1,
                    ml: { xs: 10, md: index % 2 === 0 ? 0 : 4 },
                    mr: { xs: 0, md: index % 2 === 0 ? 4 : 0 },
                    maxWidth: { md: '45%' },
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      sx={{
                        background: 'linear-gradient(135deg, rgba(26, 30, 35, 0.95) 0%, rgba(15, 20, 25, 0.95) 100%)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(46, 204, 113, 0.1)',
                        color: 'white',
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: 'primary.main',
                          }}
                        >
                          {exp.title}
                        </Typography>
                        
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 500,
                            mb: 1,
                            color: 'grey.100',
                          }}
                        >
                          {exp.company}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            mb: 2,
                            color: 'grey.300',
                            fontStyle: 'italic',
                          }}
                        >
                          {exp.description}
                        </Typography>

                        <Box component="ul" sx={{ mb: 3, pl: 2 }}>
                          {exp.responsibilities.map((responsibility, idx) => (
                            <Box
                              component="li"
                              key={idx}
                              sx={{
                                mb: 1,
                                color: 'grey.100',
                                fontSize: '0.95rem',
                                lineHeight: 1.6,
                              }}
                            >
                              {responsibility}
                            </Box>
                          ))}
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {exp.skills.map((skill, idx) => (
                            <Chip
                              key={idx}
                              label={skill}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(46, 204, 113, 0.1)',
                                color: 'primary.main',
                                border: '1px solid rgba(46, 204, 113, 0.3)',
                                fontSize: '0.8rem',
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
