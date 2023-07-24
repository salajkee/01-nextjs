import Link from '@/node_modules/next/link';

type ArticleType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getArticles() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return response.json();
}

const Articles = async () => {
  const articles = await getArticles();
  return (
    <>
      <h1 className="title">Статьи</h1>
      <ul className="articles__list">
        {articles.map((article: ArticleType) => (
          <li key={article.id}>
            <Link href={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Articles;
