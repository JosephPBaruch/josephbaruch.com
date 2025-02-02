import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '30px',
  },
  projectsContainer: {
    maxHeight: '80vh',
    overflowY: 'auto',
    padding: '20px',
  },
  projectCard: {
    marginBottom: '20px',
  },
  title: {
    fontWeight: 'bold',
  },
});

const Projects: React.FC = () => {
  const classes = useStyles();

  const projects = [
    {
      title: 'josephbaruch.com',
      description: 'A frontend web application built with React, AWS, and MUI.',
      link: 'https://github.com/JosephPBaruch/josephbaruch.com',
    },
    {
      title: 'Weather App',
      description: 'A Express.js application making http requests to retrieve weather data based on an address.',
      link: 'https://github.com/JosephPBaruch/data_web_app',
    },
    {
      title: 'Pong',
      description: 'Pong built in the Unity game engine',
      link: 'https://github.com/JosephPBaruch/Pong',
    },
    // Add more projects as needed
  ];

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h4" className={classes.title} gutterBottom>
        My Projects
      </Typography>
      <Box className={classes.projectsContainer}>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <Card className={classes.projectCard} variant="outlined">
                <CardContent>
                  <Typography variant="h6" className={classes.title} gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href={project.link} target="_blank">
                    View on GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
