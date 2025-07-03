'use client';

import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip } from '@mui/material';
import { BusinessCenter, ShoppingCart, People, Storage, Security } from '@mui/icons-material';
import { motion } from 'framer-motion';

const services = [
	{
		icon: <BusinessCenter sx={{ fontSize: 30, color: 'white' }} />,
		title: 'Enterprise Software',
		items: [
			'ERP systems for managing inventory, sales, finance, production, HR, and reporting',
			'CRM systems for tracking customer relationships and sales activity',
			'HR and payroll management systems for employee attendance and compensation',
			'Document management platforms for secure file sharing and versioning',
			'Accounting software for budgeting, invoicing, tax, and ledger maintenance',
		],
	},
	{
		icon: <ShoppingCart sx={{ fontSize: 30, color: 'white' }} />,
		title: 'Web & E-commerce Platforms',
		items: [
			'E-commerce websites with payment integration and order management',
			'Content Management Systems (CMS) for building and updating web content',
			'Inventory management systems for tracking stock across multiple locations',
			'Point-of-sale (POS) software for in-store billing and inventory syncing',
		],
	},
	{
		icon: <People sx={{ fontSize: 30, color: 'white' }} />,
		title: 'Mobile Applications',
		items: [
			'iOS and Android mobile apps, both native and cross-platform (e.g., Flutter, React Native)',
			'Social networking and messaging platforms',
			'Media streaming apps for audio, video, and live broadcasts',
			'Educational apps for e-learning, courses, and quizzes',
		],
	},
	{
		icon: <Storage sx={{ fontSize: 30, color: 'white' }} />,
		title: 'System and Infrastructure Software',
		items: [
			'Operating systems and low-level firmware tools',
			'Device drivers for hardware interaction',
			'Virtualization and container tools (e.g., Docker, Kubernetes)',
		],
	},
	{
		icon: <Security sx={{ fontSize: 30, color: 'white' }} />,
		title: 'Security & Identity Solutions',
		items: [
			'Authentication systems using OAuth, SSO, and RBAC',
			'Access control platforms for role-based permissions',
			'Antivirus and firewall solutions',
			'Password management tools for secure credential storage',
		],
	},
	{
		icon: <BusinessCenter sx={{ fontSize: 30, color: 'white' }} />,
		title: 'Data and AI-Based Applications',
		items: [
			'Business intelligence software for dashboards, analytics, and reporting',
			'Predictive analytics platforms using machine learning models',
			'AI assistants and chatbots for automated user interaction',
			'Real-time data tracking and KPI dashboards',
		],
	},
	{
		icon: <Storage sx={{ fontSize: 30, color: 'white' }} />,
		title: 'Developer and DevOps Tools',
		items: [
			'Integrated Development Environments (IDEs) and code editors (e.g., VS Code, Trae IDE)',
			'CI/CD platforms for automated deployment (e.g., GitHub Actions, Jenkins)',
			'API gateways for service routing and monitoring',
			'Container orchestration tools for scalable microservices',
		],
	},
];

const Services = () => {
	return (
		<Box
			id="services"
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
							Services
						</Typography>
						<Typography
							variant="h6"
							sx={{ maxWidth: '600px', mx: 'auto', color: 'grey.100' }}
						>
							Solutions I design, build, and deliver for businesses and users
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

					{services.map((service, index) => (
						<motion.div
							key={service.title}
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
									{service.icon}
								</Box>

								{/* Category badge */}
								<Box
									sx={{
										position: { xs: 'static', md: 'absolute' },
										left: { md: index % 2 === 0 ? 'calc(50% + 100px)' : 'calc(50% - 400px)' },
										top: { md: '15px' },
										mb: { xs: 2, md: 0 },
										ml: { xs: 10, md: 0 },
									}}
								>
									<Chip
										label={service.title}
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
												<Box component="ul" sx={{ mb: 0, pl: 2 }}>
													{service.items.map((item, idx) => (
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
															{item}
														</Box>
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

export default Services;
