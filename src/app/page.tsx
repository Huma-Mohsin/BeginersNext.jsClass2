import Button from "../../Components/Button";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 style={{ fontSize: '2.5rem', color: '#4a90e2', textAlign: 'center', margin: '0' }}>
        Learning Websites
      </h1>
<Header/>
      <br/>
      <Button/> {/**Render */}
      <Footer/>
      <div />
    </div>
  );
}
