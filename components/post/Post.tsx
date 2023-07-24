type PostProps = {
  title: string;
  content: string;
  date: string;
};

const Post = ({ title, content, date }: PostProps) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{content}</p>
      <span>{date}</span>
    </li>
  );
};

export default Post;
