import { Toolbar, AppBar, AppBarProps, Typography } from "@mui/material";
import { SearchComponent } from "./Search/SearchComponent";

export function AppToolbar(props: AppToolbarProps): JSX.Element {
  const { ...other } = props;

  return (
    <AppBar {...other}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          Material UI Playground
        </Typography>
        <SearchComponent />
      </Toolbar>
    </AppBar>
  );
}

export { Toolbar };

type AppToolbarProps = Omit<AppBarProps, "children">;
