import { readdir } from "fs/promises";
import Link from "next/link";

export default async function Home() {
  const components = await readdir(`${process.cwd()}/src/components/`);

  return (
    <main className="container flex min-h-screen flex-col items-center p-24 text-gray-300">
      <div className="flex flex-col gap-8">
        <div>
          The components below are dynamically loaded with <code>import()</code>
        </div>
        <ul className="flex flex-col gap-2 list-disc list-inside">
          <li>
            <code>button.tsx</code> is a server component
          </li>
          <li>
            <code>input.tsx</code> is a client component
          </li>
          <li>
            <code>form.tsx</code> is a server component that contains a client
            component
          </li>
        </ul>
        <nav className="flex flex-col gap-4 ">
          {components.map((c) => (
            <Link
              className="underline hover:text-white transition-colors"
              key={c}
              href={`/components/${c}`}
            >
              {c}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
