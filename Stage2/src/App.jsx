import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Details from "./Pages/Details";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Nav from "./Component/Nav";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

function App() {
    return (
        <>
            <Router>
                <Nav />
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/details/:id" element={<Details />} />
                    </Routes>
                </QueryClientProvider>
            </Router>
        </>
    );
}

export default App;
