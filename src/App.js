import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

import './App.css';

const cardContent = [1, 2, 3, 4, 5, 6]
const firstThreeCardContent = cardContent.slice(0, 3)
const restOfCardContent = cardContent.slice(3)

function App() {
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <>
      <div className="cardGrid">
        {firstThreeCardContent.map((item, index) => (
          <Card sx={{ minWidth: 275 }} key={index}>
            <CardContent>
              <h1>Card {item}</h1>
            </CardContent>
          </Card>
        ))}
      </div>
      <Collapse in={collapsed}>
        <div className="cardGrid">
          {restOfCardContent.map((item, index) => (
            <Card sx={{ minWidth: 275 }} key={index}>
              <CardContent>
                <h1>Card {item}</h1>
              </CardContent>
            </Card>
          ))}
        </div>
      </Collapse>


      <Button variant="contained" onClick={() => setCollapsed(!collapsed)}>Click Me</Button>
    </>
  );
}

export default App;
