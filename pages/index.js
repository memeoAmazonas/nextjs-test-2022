import { HomeButton, MenuButton, PageContainer } from 'components';
import { Stack } from "@mui/material";
import ROUTES from 'components/navigation/routes';

export default function App() {
  return (
    <>
      <main>
        <PageContainer isNav={false}>
          <Stack
            spacing={12}
            sx={{ minHeight: '90vh' }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {ROUTES.map((it) => (<HomeButton key={it.label} {...it} />))}
          </Stack>
        </PageContainer>
      </main>
    </>
  );
}
