import Link from 'next/link'

export default function Logo() {
  return (
    <>
     <Link href={'/'} passHref>
      <div className="app-brand">
        <img src="/img/logo.svg" alt="Tech Modify" />
      </div>
      </Link>
    </>
  );
}