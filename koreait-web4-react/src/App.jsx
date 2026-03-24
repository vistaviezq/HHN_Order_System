import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./mini-project/Main";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
        }
    }
});

function App() {
    return (
        <Main />
    );
}

export default App;
