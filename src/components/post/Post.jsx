import './post.css';

export default function Post(props) {
  const { image, title, author, content, date } = props.post;

  return (
    <article>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <p>{author} - {date}</p>
    </article>
  );
};

