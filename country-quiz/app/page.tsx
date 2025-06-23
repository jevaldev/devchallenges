import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>Hello world</div>
      <Link href={"/congrats"}> Congrats page </Link>;
    </main>
  );
}
