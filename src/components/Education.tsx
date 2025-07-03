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
import { 
  School, 
  Code,
  Computer,
  Engineering,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'B.Sc. in Software Engineering',
    institution: 'Daffodil International University',
    location: 'Dhaka, Bangladesh',
    period: 'Sep 2015 – Jan 2021',
    grade: 'CGPA: 3.33',
    description: 'Comprehensive study of software development lifecycle, algorithms, data structures, and modern programming paradigms.',
    icon: Computer,
  },
  {
    degree: 'Higher Secondary Certificate',
    institution: 'Milestone College',
    location: 'Dhaka, Bangladesh',
    period: 'Jun 2013 – Jun 2015',
    grade: 'GPA: 4.58',
    description: 'Science background with focus on Mathematics, Physics, and Chemistry.',
    icon: School,
  },
  {
    degree: 'Secondary School Certificate',
    institution: 'Milestone School',
    location: 'Dhaka, Bangladesh',
    period: 'Jan 2011 – May 2013',
    grade: 'GPA: 5.00',
    description: 'Science background with excellent academic performance.',
    icon: School,
  },
];

const certifications = [
  {
    title: 'DevOps Bootcamp Training',
    issuer: 'BongoDev by Optimizely Engineers',
    icon: Engineering,
    color: '#FF6B6B',
  },
  {
    title: 'C# Certification',
    issuer: 'HackerRank',
    icon: Code,
    color: '#4ECDC4',
  },
  {
    title: 'JavaScript Certification',
    issuer: 'HackerRank',
    icon: Code,
    color: '#45B7D1',
  },
];

const languages = [
  { name: 'Bangla', level: 'Native or Bilingual Proficiency' },
  { name: 'English', level: 'Full Professional Proficiency' },
];

const Education = () => {
  return (
    <Box
      id="education"
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
              Education & Certifications
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: '600px', mx: 'auto' }}
            >
              My academic journey and professional development
            </Typography>
          </Box>
        </motion.div>

        {/* Education Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 4,
              textAlign: 'center',
              color: 'text.primary',
            }}
          >
            Education
          </Typography>

          <Box sx={{ position: 'relative' }}>
            {/* Timeline line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '30px', md: '50%' },
                top: 0,
                bottom: 0,
                width: '3px',
                background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
                transform: { xs: 'none', md: 'translateX(-50%)' },
                zIndex: 1,
              }}
            />

            {education.map((edu, index) => (
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
                      left: { xs: '30px', md: '50%' },
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: { xs: 'translateX(-50%)', md: 'translateX(-50%)' },
                      zIndex: 2,
                      boxShadow: '0 0 0 4px #F8F9FA',
                    }}
                  >
                    <edu.icon sx={{ color: 'white', fontSize: 30 }} />
                  </Box>

                  {/* Period badge */}
                  <Box
                    sx={{
                      position: { xs: 'static', md: 'absolute' },
                      left: { md: index % 2 === 0 ? 'calc(50% + 100px)' : 'calc(50% - 350px)' },
                      top: { md: '15px' },
                      mb: { xs: 2, md: 0 },
                      ml: { xs: 10, md: 0 },
                    }}
                  >
                    <Chip
                      label={edu.period}
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

                  {/* Content */}
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
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(46, 204, 113, 0.1)',
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
                            {edu.degree}
                          </Typography>
                          
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 500,
                              mb: 1,
                              color: 'text.primary',
                            }}
                          >
                            {edu.institution}
                          </Typography>

                          <Typography
                            variant="body2"
                            sx={{
                              mb: 1,
                              color: 'text.secondary',
                              fontStyle: 'italic',
                            }}
                          >
                            {edu.location}
                          </Typography>

                          <Typography
                            variant="body2"
                            sx={{
                              mb: 2,
                              color: 'primary.main',
                              fontWeight: 600,
                            }}
                          >
                            {edu.grade}
                          </Typography>

                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              lineHeight: 1.6,
                            }}
                          >
                            {edu.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 4,
              textAlign: 'center',
              color: 'text.primary',
            }}
          >
            Certifications
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
              mb: 6,
            }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      height: '100%',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(46, 204, 113, 0.1)',
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${cert.color} 0%, #2ECC71 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                        color: 'white',
                      }}
                    >
                      <cert.icon sx={{ fontSize: 40 }} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: 'text.primary',
                      }}
                    >
                      {cert.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {cert.issuer}
                    </Typography>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 4,
              textAlign: 'center',
              color: 'text.primary',
            }}
          >
            Languages
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              flexWrap: 'wrap',
            }}
          >
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    minWidth: 200,
                    background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.05) 0%, rgba(39, 174, 96, 0.05) 100%)',
                    border: '1px solid rgba(46, 204, 113, 0.1)',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: 'primary.main',
                    }}
                  >
                    {lang.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {lang.level}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education;
