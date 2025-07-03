'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C#', level: 95, color: '#239120' },
      { name: 'JavaScript/TypeScript', level: 90, color: '#F7DF1E' },
      { name: 'PHP', level: 85, color: '#777BB4' },
      { name: 'GoLang', level: 75, color: '#00ADD8' },
      { name: 'C/C++', level: 70, color: '#00599C' },
    ],
  },
  {
    title: 'Frontend Technologies',
    skills: [
      { name: 'React/Next.js', level: 95, color: '#61DAFB' },
      { name: 'Angular', level: 80, color: '#DD0031' },
      { name: 'HTML/CSS', level: 95, color: '#E34F26' },
      { name: 'Material UI', level: 90, color: '#0081CB' },
      { name: 'Tailwind CSS', level: 88, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js/NestJS', level: 90, color: '#339933' },
      { name: '.NET Core', level: 85, color: '#512BD4' },
      { name: 'MongoDB', level: 88, color: '#47A248' },
      { name: 'PostgreSQL/MySQL', level: 85, color: '#336791' },
      { name: 'Redis', level: 75, color: '#DC382D' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker/Kubernetes', level: 85, color: '#2496ED' },
      { name: 'AWS', level: 80, color: '#FF9900' },
      { name: 'CI/CD Pipelines', level: 85, color: '#326CE5' },
      { name: 'Git/GitHub', level: 95, color: '#F05032' },
      { name: 'DataDog', level: 75, color: '#632CA6' },
    ],
  },
];

const Skills = () => {
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const timeout = setTimeout(() => {
      const levels: { [key: string]: number } = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          levels[skill.name] = skill.level;
        });
      });
      setAnimatedLevels(levels);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      id="skills"
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
              Technical Skills
            </Typography>
            <Typography
              variant="h6"
              sx={{ maxWidth: '600px', mx: 'auto', color: 'grey.100' }}
            >
              Technologies and tools I work with
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
            },
            gap: 4,
          }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(26, 30, 35, 0.95) 0%, rgba(15, 20, 25, 0.95) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(46, 204, 113, 0.1)',
                  color: 'white',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      color: 'primary.main',
                      textAlign: 'center',
                    }}
                  >
                    {category.title}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <Box>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              mb: 1,
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                fontWeight: 500,
                                color: 'grey.100',
                              }}
                            >
                              {skill.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                              }}
                            >
                              {skill.level}%
                            </Typography>
                          </Box>

                          <Box sx={{ position: 'relative' }}>
                            <LinearProgress
                              variant="determinate"
                              value={animatedLevels[skill.name] || 0}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: 'rgba(46, 204, 113, 0.1)',
                                '& .MuiLinearProgress-bar': {
                                  background: `linear-gradient(90deg, ${skill.color} 0%, #2ECC71 100%)`,
                                  borderRadius: 4,
                                  transition: 'transform 2s ease-in-out',
                                },
                              }}
                            />
                            
                            {/* Skill icon/dot */}
                            <Box
                              sx={{
                                position: 'absolute',
                                right: `${100 - skill.level}%`,
                                top: '50%',
                                transform: 'translate(50%, -50%)',
                                width: 16,
                                height: 16,
                                borderRadius: '50%',
                                backgroundColor: skill.color,
                                border: '2px solid white',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                                transition: 'right 2s ease-in-out',
                              }}
                            />
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* Technology Icons Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 4,
                color: 'white',
              }}
            >
              Technologies & Frameworks
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 3,
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              {[
                'C#', '.Net Core', 'Next.js', 'Node.js', 'NestJS', 'TypeScript', 'MongoDB', 
                'PostgreSQL', 'MySQL', 'Docker', 'Kubernetes', 'AWS', 'Material UI', 'Tailwind', 'Git'
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      p: 2,
                      minWidth: 120,
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.1) 0%, rgba(39, 174, 96, 0.1) 100%)',
                      border: '1px solid rgba(46, 204, 113, 0.2)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.2) 0%, rgba(39, 174, 96, 0.2) 100%)',
                        border: '1px solid rgba(46, 204, 113, 0.4)',
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                      }}
                    >
                      {tech}
                    </Typography>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
