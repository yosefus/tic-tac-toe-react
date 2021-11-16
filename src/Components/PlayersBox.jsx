import React from 'react';
import { Card } from 'react-bootstrap';

export default function PlayersBox({ players, ties }) {
  const { player1, player2 } = players;

  return (
    <div dir="rtl" className="d-flex justify-content-between pt-3 pb-3">
      <Card className="trans-back">
        <Card.Body>
          <Card.Title>שחקן 1</Card.Title>
          <Card.Subtitle>{player1.name}</Card.Subtitle>
          <Card.Text>
            ניקוד: {player1.wins} <br />
          </Card.Text>
        </Card.Body>
      </Card>
      {ties && (
        <Card className="trans-back">
          <Card.Body>
            <Card.Title>משחקים שנגמרו בשיוויון</Card.Title>
            <Card.Subtitle>{ties}</Card.Subtitle>
          </Card.Body>
        </Card>
      )}
      <Card className="trans-back">
        <Card.Body>
          <Card.Title>שחקן 2</Card.Title>
          <Card.Subtitle>{player2.name}</Card.Subtitle>
          <Card.Text>
            ניקוד: {player2.wins} <br />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
