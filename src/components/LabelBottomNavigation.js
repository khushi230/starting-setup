import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import { Stack } from "@mui/system";
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation fullWidth sx={{}} value={value} onChange={handleChange}>
      <Stack direction="row" spacing={20}>
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeRoundedIcon />}
        />

        <BottomNavigationAction
          label="Charts"
          value="charts"
          icon={<BarChartRoundedIcon />}
        />
        <BottomNavigationAction
          label="Account"
          value="account"
          icon={<PersonRoundedIcon />}
        />
      </Stack>
    </BottomNavigation>
  );
}
