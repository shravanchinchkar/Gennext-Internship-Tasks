function App() {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute top-0 w-[100%] h-[2.5rem] bg-[url(/assets/images/kumauni.svg)] bg-repeat-x"></div>
      <div className="absolute bottom-0 w-[100%] h-[2.5rem] bg-[url(/assets/images/kumauni.svg)] bg-repeat-x"></div>
      <div className="absolute left-0 z-0 w-[2.5rem] h-[100%] bg-[url(/assets/images/kumauni.svg)] bg-repeat-y"></div>
      <div className="absolute right-0 w-[2.5rem] h-[100%] bg-[url(/assets/images/kumauni.svg)] bg-repeat-y rotate-180"></div>
    </div>
  );
}
export default App;
