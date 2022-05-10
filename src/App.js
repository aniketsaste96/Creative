import SideBar from "./components/SideBar"
import Feed from "./components/Feed"
import RightBar from "./components/RightBar"
import NavBar from "./components/NavBar"
import { Box, Container, Stack } from "@mui/material";
function App() {
  return (
    <Box>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>

    </Box>
  )
}

export default App;
