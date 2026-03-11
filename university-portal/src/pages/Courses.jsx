import courses from "../data/courses"
import { Grid, Card, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"

function Courses() {
  return (
    <Grid container spacing={3} padding={3}>

      {courses.map((course) => (

        <Grid item xs={12} md={4} key={course.id}>

          <Card
            component={Link}
            to={`/course/${course.id}`}
            sx={{ textDecoration: "none" }}
          >

            <CardContent>

              <Typography variant="h5">
                {course.name}
              </Typography>

            </CardContent>

          </Card>

        </Grid>

      ))}

    </Grid>
  )
}

export default Courses