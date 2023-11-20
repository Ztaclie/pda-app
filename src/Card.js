function Card({ image, title, social, content }) {
  const cardStyle = {
    minHeight: "200px",
  };
  const imgStyle = {
    maxHeight: "300px",
  };

  return (
    <div className="card m-3" style={cardStyle}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="img1" style={imgStyle} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">{title}</p>
        <p className="subtitle is-6">@{social}</p>
        <div className="content">{content}</div>
      </div>
    </div>
  );
}

export default Card;
