import Card from "./Card";
import Alexa from "./images/alexa.png";
import Cortana from "./images/cortana.png";
import Siri from "./images/siri.png";

const styles = {
  container: {
    maxWidth: "1200px",
    width: "90%",
    margin: "2rem auto",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    alignItems: "stretch",
  },
};

function Cards() {
  const assistants = [
    {
      image: Alexa,
      title: "Alexa",
      social: "alexa99",
      content: "I'll help you buy stuff off Amazon",
      imageAlt: "Amazon Alexa logo",
    },
    {
      image: Cortana,
      title: "Cortana",
      social: "cortana12",
      content: "Personal assistant by Microsoft",
      imageAlt: "Microsoft Cortana logo",
    },
    {
      image: Siri,
      title: "Siri",
      social: "siri44",
      content: "I don't get a lot of updates anymore",
      imageAlt: "Apple Siri logo",
    },
  ];

  return (
    <section style={styles.container}>
      <div style={styles.cardGrid}>
        {assistants.map((assistant) => (
          <Card key={assistant.social} {...assistant} />
        ))}
      </div>
    </section>
  );
}

export default Cards;
