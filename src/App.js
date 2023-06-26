import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

import './App.css';

const THE_CARDS = [1, 2, 3, 4, 5, 6]


function App() {
  const [collapsed, setCollapsed] = React.useState(false)
  const [cardContent, setCardContent] = React.useState([])

  const firstThreeCards = cardContent.slice(0, 3)
  const restOfCards = cardContent.slice(3)

  React.useEffect(() => {
    setTimeout(() => {
      setCardContent(THE_CARDS)
    }, 1000)
  }, [])

  if (cardContent.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <div className="cardGrid">
        {firstThreeCards.map((item, index) => (
          <Card sx={{ minWidth: 275 }} key={index} as="a" href="/">
            <CardContent>
              <h1>Card {item}</h1>
            </CardContent>
          </Card>
        ))}
      </div>
      <Collapse in={collapsed}>
        <div className="cardGrid">
          {restOfCards.map((item, index) => (
            <Card sx={{ minWidth: 275 }} key={index} as="a" href="/">
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
