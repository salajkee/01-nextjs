import Link from '@/node_modules/next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <ul>
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="/about">О нас</Link>
          </li>
          <li>
            <Link href="/articles">Статьи</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { Header };
