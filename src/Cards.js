import Card from "./Card";
import Alexa from "./images/alexa.png";
import Cortana from "./images/cortana.png";
import Siri from "./images/siri.png";

function Cards() {
  const cardsStyle = {
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
    marginTop: "20px",
  };

  return (
    <div className="Cards" style={cardsStyle}>
      <Card
        image={Alexa}
        title="Alexa"
        social="alexa99"
        content="I'll help you buy stuff off Amazon"
      />
      <Card
        image={Cortana}
        title="Cortana"
        social="cortana12"
        content="Personal assistant by Microsoft"
      />
      <Card
        image={Siri}
        title="Siri"
        social="siri44"
        content="I don't get a lot of updates anymore "
      />
    </div>
  );
}

export default Cards;
