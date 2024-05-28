import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1>Lets build an Ai assistant</h1>
      {/* {Header} */}
      <header>
        <Image
          alt="Logo"
          src="https://i.imgur.com/MCHWJZS.png" height={50} width={50}
        />
      </header>
      {/* {Form} */}
    </main>
  );
}
