async function getArticle(id: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
}

type ArticleProps = {
  params: {
    id: number;
  };
};

const Article = async ({ params: { id } }: ArticleProps) => {
  const article = await getArticle(id);
  console.log(article);
  return (
    <>
      <h1 className="title">{article.title}</h1>
      <p>{article.body}</p>
    </>
  );
};

export default Article;
