import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

function TourCard(props) {
  console.log(props.tour);
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img src={props.tour.image} alt="Niagra falls" className="img" />
        <Box paddingX={1}>
          <Link to={`/${props.tour.name}`}>
            <Typography variant="subtitle1" component="h2">
              {props.tour.name}
            </Typography>
          </Link>

          <Box sx={{ display: "flex", allignItems: "right" }}>
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {props.tour.duration}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", allignItems: "centered" }} marginTop={3}>
            <Rating size="small" name="read-only" value={4.5} precision={0.5} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {props.tour.rating}
            </Typography>
            <Typography variant="body3" component="p" marginLeft={1.5}>
              {props.tour.numberOfReviews}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="h3" marginTop={0}>
              From C $ {props.tour.price}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

export default TourCard;
