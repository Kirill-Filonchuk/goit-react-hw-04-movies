import { NavLink, useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function Navigation() {
  const location = useLocation();
  return (
    <div>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        {/* <NavLink style={{textDecoration:"none"}} to="/"> */}
         <NavLink style={{textDecoration:"none"}} to={{pathname:"/", state:{from:location}}}>
          <Button>Home</Button>
        </NavLink>
        {/* <NavLink style={{textDecoration:"none"}} to="/movies"> */}
        <NavLink style={{textDecoration:"none"}} to={{pathname:"/movies", state:{from:location ??"/"}}}>
          <Button>Movies</Button>
        </NavLink>
      </ButtonGroup>
    </div>
  );
}
