import { Container, Typography } from "@mui/material";
import { Box } from "@mui/material";
import ImageCollage from "../ImageCollage";
import CustomizedAccordions from "./Accordian";
import { Paper } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import BasicModal from "./modal";

const Tour = () => {
  return (
    <div>
      <Container sx={{ width: 900 }}>
        <Typography variant="h3" component="h1" marginTop={3}>
          Explore the world
        </Typography>
        <Box marginTop={3} sx={{ display: "flex" }}>
          <img
            src="https://cdn.aarp.net/content/dam/aarp/travel/tips/2020/12/1140-las-vegas-sign.jpg"
            alt="Las Vegas"
            height={325}
          />
          <ImageCollage></ImageCollage>
        </Box>
        <Box>
          <Typography variant="h6" component="h4" marginTop={3}>
            About this ticket
          </Typography>
          <Typography variant="paragraph" component="p" marginTop={3}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Box>
        <Box marginBottom={10}>
          <Typography variant="h6" component="h4" marginTop={3}>
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="paragraph"
            component="p"
            marginTop={3}
            marginBottom={2}
          >
            <CustomizedAccordions />
          </Typography>
        </Box>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation>
            <BasicModal />
          </BottomNavigation>
        </Paper>
      </Container>
    </div>
  );
};
export default Tour;
