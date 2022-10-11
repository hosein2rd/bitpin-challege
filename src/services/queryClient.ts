import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, enabled: true } },
});

export default queryClient;
