import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Project 1",
    description: `A property management system (PMS) is a software solution designed to assist property managers in managing their properties, tenants, and leases. It provides a centralized platform for tracking and organizing rental payments, maintenance requests, lease agreements, and tenant communications. PMS can automate many aspects of property management, from rent collection to tracking maintenance issues, streamlining operations and increasing efficiency. By providing valuable insights into property performance, PMS allows property managers to make data-driven decisions that can optimize their investments and improve tenant satisfaction.`,
    image: project1,
  },
  {
    name: "Project 2",
    description: `The student registration system is an essential web-based application designed to streamline and automate the process of student registration. This system facilitates the registration of students, manages course schedules, and generates reports for administrators. The system also provides online access to students, enabling them to enroll in courses and view their academic progress. With the student registration system, educational institutions can efficiently manage their student records, simplify their registration processes, and enhance the overall student experience.`,
    image: project2,
  },
  
  {
    name: "Project 3",
    description: `This e-commerce project built using JavaScript and CSS is a web-based platform that enables customers to browse and purchase products from the comfort of their own homes. The platform provides a user-friendly interface that allows customers to easily search for products, view product details and prices, add items to their cart, and securely checkout. The site is also optimized for mobile use, making it accessible to customers on the go. With its intuitive design and robust functionality, this e-commerce site is a great example of the power of JavaScript and CSS in building effective and engaging web applications.`,
    image: project4,
  }
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
