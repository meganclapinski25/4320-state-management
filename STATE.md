## Reflection: Redux vs. TanStack Query

### What felt awkward in Assignment 4?

The most awkward part of Assignment 4 was the repetitiveness of `createAsyncThunk`.
Every API call required three separate reducer cases (pending, fulfilled, rejected)
and manually tracking a `status` field in each slice. It felt like a lot of work
just to fetch and display data 

### What improved with TanStack Query?

TanStack Query removed most of that boilerplate. A single `useQuery` call replaces
all of the loading, error, and success states we manually wired up in Assignment 4.

### What state still belongs in Redux?

- **UI state** shared across distant components 
- **User session and auth state**  that needs to be
  globally accessible across the whole app
- **Locally created state** like favorites that the user owns and that may be
  persisted to AsyncStorage — state that doesn't come from a server response

### When would Redux be inappropriate for server state?

Redux becomes a poor fit for a server state when you need freshness and something responsive to the data. Redux needs the develper to manuially trigger fetches for data and breaks when multiple components fetch the same data.