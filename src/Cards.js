import Card from "./Card";
import Alexa from "./images/alexa.png";
import Cortana from "./images/cortana.png";
import Siri from "./images/siri.png";

const styles = {
  container: {
    maxWidth: "1000px",
    width: "95%",
    margin: "1.5rem auto",
    padding: "0 1rem",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    alignItems: "stretch",
  },
  sectionTitle: {
    marginBottom: "2rem",
    textAlign: "center",
    color: "#363636",
  },
  cardGroup: {
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    padding: "2rem 1.5rem",
    boxShadow: "0 2px 3px rgba(10, 10, 10, 0.1)",
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
      <div style={styles.cardGroup}>
        <h2 style={styles.sectionTitle} className="is-size-4">
          Popular AI Assistants
        </h2>
        <div style={styles.cardGrid}>
          {assistants.map((assistant) => (
            <Card
              key={assistant.social}
              {...assistant}
              className="has-background-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
