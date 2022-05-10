import "./App.css";
import { Button, Typography, styled } from "@mui/material";
import { Settings, KeyboardArrowRight } from "@mui/icons-material";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "green",
    margin: 5,
    color: "white",
    "&:hover": {
      backgroundColor: "purple",
    },
  });
  return (
    <div>
      <Button
        startIcon={<KeyboardArrowRight />}
        color="otherColor"
        variant="contained"
        size="small"
      >
        Text
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        startIcon={<Settings />}
      >
        Setting
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        h1. Heading
      </Typography>
      <BlueButton>My Custom Button</BlueButton>
    </div>
  );
}

export default App;
