import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function Navigation() {
  return (
    <div>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <NavLink style={{textDecoration:"none"}} to="/">
          <Button>Home</Button>
        </NavLink>
        <NavLink style={{textDecoration:"none"}} to="/movies">
          <Button>Movies</Button>
        </NavLink>
      </ButtonGroup>
    </div>
  );
}
