import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@nextui-org/react";

const Home = () => {
  const navigate = useNavigate();

  const dropdownHandler = () => {
    navigate("/dropdownMenu");
  };

  const dropdownTreeHandler = () => {
    navigate("/dropdownTree");
  };

  return (
    <div>
      <Grid.Container gap={2}>
        <Grid>
          <Button shadow color="primary" auto onClick={dropdownHandler}>
            Dropdown Menu
          </Button>
        </Grid>
        <Grid>
          <Button shadow color="secondary" auto onClick={dropdownTreeHandler}>
            Dropdown Tree
          </Button>
        </Grid>
        <Grid>
          <Button shadow color="success" auto>
            Comming soon....
          </Button>
        </Grid>
        <Grid>
          <Button shadow color="warning" auto>
            Comming soon....
          </Button>
        </Grid>
        <Grid>
          <Button shadow color="error" auto>
            Comming soon....
          </Button>
        </Grid>
        <Grid>
          <Button shadow color="gradient" auto>
            Comming soon....
          </Button>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Home;
