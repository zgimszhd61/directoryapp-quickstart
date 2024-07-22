import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Tools from "./components/Tools";

export default function Home() {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <Tools />
      </div>
    </main>
  );
}
