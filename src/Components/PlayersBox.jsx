import React from 'react';
import { Card } from 'react-bootstrap';

export default function PlayersBox({ players, ties }) {
  const { player1, player2 } = players;

  return (
    <div dir="rtl" className="d-flex justify-content-between pt-1 pb-1">
      <Card className="trans-back">
        <Card.Body>
          <Card.Title>שחקן X</Card.Title>
          <Card.Subtitle>{player1.name}</Card.Subtitle>
          <Card.Text>
            ניקוד: {player1.wins} <br />
          </Card.Text>
        </Card.Body>
      </Card>
      {ties && (
        <Card className="trans-back">
          <Card.Body>
            <Card.Title>שיוויון</Card.Title>
            <Card.Subtitle className="text-center">{ties}</Card.Subtitle>
          </Card.Body>
        </Card>
      )}
      <Card className="trans-back text-start">
        <Card.Body>
          <Card.Title>שחקן O</Card.Title>
          <Card.Subtitle>{player2.name}</Card.Subtitle>
          <Card.Text>
            ניקוד: {player2.wins} <br />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
