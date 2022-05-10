import SideBar from "./components/SideBar"
import Feed from "./components/Feed"
import RightBar from "./components/RightBar"
import NavBar from "./components/NavBar"
import Add from "./components/Add"
import { useState } from "react";
import { Box, Container, Stack, createTheme, ThemeProvider, Paper } from "@mui/material";
function App() {
  const [mode, setMode] = useState("light")
  const DarkMode = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={DarkMode}>
      <Paper>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Paper>
    </ThemeProvider>

  )
}

export default App;
