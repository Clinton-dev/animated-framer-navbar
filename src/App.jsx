import Navbar from "./components/Navbar";

function App() {
  return (
    <body className="bg-stone-950 min-h-screen text-white flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col flex-1">
        <h1>Main body Content</h1>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </body>
  );
}

export default App;
