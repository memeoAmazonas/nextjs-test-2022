import { Container, Grid, Toolbar, Box } from "@mui/material";
import { Card, Header } from "components";

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Container color="secondary" sx={{pt: 6, bgcolor: (t)=>t.palette.primary.main}} maxWidth="sm">
        <Grid sx={{ minHeight: 'calc(100vh - 80px)', pt:2, pb:2 }} container>
          <Grid item xs={12}>
            <Card />
            <Card />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
