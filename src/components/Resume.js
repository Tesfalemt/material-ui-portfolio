import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            web design
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Emmanual IT Solution Provider
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
          I have developed a strong set of web design skills through both academic training and practical experience. I have a deep understanding of HTML, CSS, and JavaScript and can use these languages to create dynamic and visually appealing websites. My design aesthetic is clean and modern, and I have a strong sense of color theory and typography. I am skilled in designing for both desktop and mobile platforms, and have experience with responsive design. I am able to work collaboratively with developers and other team members to ensure that my designs are implemented effectively.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Backend Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          Emmanual IT Solution Provider
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
          experienced backend developer with strong skills in Java, database management, and Spring Boot framework. He has a solid understanding of object-oriented programming principles and is proficient in creating scalable and reliable applications using Java. His expertise in database management allows him to design and implement efficient data storage solutions that ensure data integrity and high performance. Tesfalem is also well-versed in Spring Boot, a popular Java framework for building web applications, and has hands-on experience in creating RESTful APIs and implementing security features. With his skills and experience, Tesfalem is a valuable asset to any backend development team.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Software Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          Emmanual IT Solution Provider
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
          I possess a strong foundation in programming languages such as Java, Python, and C++. I have experience in developing web applications using front-end technologies like HTML, CSS, and JavaScript, as well as back-end frameworks like Node.js and Django. In addition, I am well-versed in database management and have experience with SQL and NoSQL databases. I have worked in both Agile and Waterfall environments, collaborating with cross-functional teams to deliver high-quality software solutions. I also have experience with DevOps practices, including continuous integration and delivery. Overall, my skills as a Software Engineer allow me to approach complex problems with a logical and analytical mindset and to develop efficient and effective solutions.
          </Typography>
        </Box>
         
         
      </Box>
    </Box>
  );
};

export default Resume;
