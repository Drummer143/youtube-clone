import { Box } from "@mui/system";
import { BrowserRouter, RouterProvider } from "react-router-dom";

import { Navbar } from "./components";
import router from "./router";

function App() {
    return (
        <Box>
            <Navbar />
            <RouterProvider router={router} />
        </Box>
    )
}

export default App;
