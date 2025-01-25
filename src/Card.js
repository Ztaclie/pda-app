import PropTypes from "prop-types";

const styles = {
  card: {
    minHeight: "200px",
  },
  image: {
    maxHeight: "300px",
    objectFit: "cover",
  },
};

function Card({ image, title, social, content, imageAlt }) {
  return (
    <article className="card m-3" style={styles.card}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt={imageAlt || title} style={styles.image} />
        </figure>
      </div>
      <div className="card-content">
        <h2 className="title is-4">{title}</h2>
        {social && (
          <p className="subtitle is-6">
            <a
              href={`https://twitter.com/${social}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{social}
            </a>
          </p>
        )}
        <div className="content">{content}</div>
      </div>
    </article>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  social: PropTypes.string,
  content: PropTypes.node.isRequired,
  imageAlt: PropTypes.string,
};

Card.defaultProps = {
  social: "",
  imageAlt: "",
};

export default Card;
