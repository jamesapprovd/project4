import { faker } from "@faker-js/faker";
// @mui
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
// components
import Page from "../components/Page";
import Iconify from "../components/Iconify";
// sections
import { AppWidgetSummary } from "../sections/@dashboard/app";

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi there, Welcome to the RoboCorp dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="New clients"
              total={12}
              icon={"ant-design:android-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="New Projects"
              total={1352831}
              color="info"
              icon={"ant-design:apple-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Documents pending signing"
              total={2}
              color="warning"
              icon={"ant-design:windows-filled"}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
