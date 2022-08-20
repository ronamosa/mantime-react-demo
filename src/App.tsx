import { MantineProvider, Text, Button, Stack } from "@mantine/core";
import { theme } from "./theme";
import { FooterSimple } from "./components/FooterSimple"
import { HeaderMenu } from "./components/HeaderMenu"
import { StatsRingCard } from "./components/StatsRingCard"

export default function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <HeaderMenu links={[]} />
      <Stack align="center" mt={50}>
        <Text size="xl" weight={500}>
          Microservices Dashboard
        </Text>
        <Button>Health Check</Button>
        <StatsRingCard title={"Services"} completed={4} total={5} stats={[
          {
            "value": 20,
            "label": "Healthy"
          },
          {
            "value": 5,
            "label": "Pending"
          }
        ]} />
      </Stack>
      <FooterSimple links={[]}/>
    </MantineProvider>
  );
}
