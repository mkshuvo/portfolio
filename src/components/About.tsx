'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
} from '@mui/material';
import { Download, Code, People, Timeline } from '@mui/icons-material';
import { motion } from 'framer-motion';

const stats = [
  { number: '5+', label: 'Years Experience', icon: Timeline },
  { number: '20+', label: 'Projects Completed', icon: Code },
  { number: '7+', label: 'Technologies', icon: People },
];

const About = () => {
  return (
    <Box
      id="about"
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
              About Me
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: '600px', mx: 'auto' }}
            >
              Passionate Software Engineer from Bangladesh
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            gap: 6,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}
              >
                Hello! I&apos;m Mohsin Khan Shuvo
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  color: 'text.secondary',
                  fontSize: '1.2rem',
                  lineHeight: 1.7,
                }}
              >
                Experienced Software Engineer with expertise in backend, frontend, and microservices. 
                Strong proficiency in building scalable systems and collaborating with DevOps teams. 
                Passionate about software design and system optimization.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  lineHeight: 1.7,
                }}
              >
                Based in Dhaka, Bangladesh, I specialize in full-stack development with a focus on 
                creating innovative digital solutions. I have experience working as a remote developer 
                independently and as part of a team, collaborating with multiple startups and gaining 
                diverse experience in data-driven development (DDD).
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  lineHeight: 1.7,
                }}
              >
                I&apos;m a quick learner, passionate team player with excellent communication and mentoring 
                skills. I enjoy working with cutting-edge technologies and am always eager to learn 
                and adapt to new challenges in the ever-evolving tech landscape.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 3,
                  mb: 4,
                }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    style={{ flex: 1 }}
                  >
                    <Card
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.05) 0%, rgba(39, 174, 96, 0.05) 100%)',
                        border: '1px solid rgba(46, 204, 113, 0.1)',
                        height: '100%',
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                          color: 'white',
                        }}
                      >
                        <stat.icon sx={{ fontSize: 30 }} />
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 800,
                          color: 'primary.main',
                          mb: 1,
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontWeight: 500 }}
                      >
                        {stat.label}
                      </Typography>
                    </Card>
                  </motion.div>
                ))}
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<Download />}
                href="/resume.pdf"
                target="_blank"
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
                Download Resume
              </Button>
            </motion.div>
          </Box>

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 300, md: 400 },
                  height: { xs: 300, md: 400 },
                }}
              >
                {/* Floating elements */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    style={{
                      position: 'absolute',
                      width: 80 + i * 20,
                      height: 80 + i * 20,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, rgba(46, 204, 113, ${0.1 - i * 0.02}) 0%, rgba(39, 174, 96, ${0.1 - i * 0.02}) 100%)`,
                      top: `${20 + i * 30}%`,
                      left: `${10 + i * 25}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 6 + i * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Code-like background */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    height: '80%',
                    background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.05) 0%, rgba(39, 174, 96, 0.05) 100%)',
                    borderRadius: '20px',
                    border: '2px solid rgba(46, 204, 113, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '6rem',
                    fontWeight: 800,
                    color: 'rgba(46, 204, 113, 0.3)',
                    fontFamily: 'monospace',
                  }}
                >
                  {'</>'}
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
