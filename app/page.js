import InfoBoxes from "@/components/InfoBoxes";
import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
const HomePage = () => {
  console.log(process.env.MONGODB_URI);
  
  return (  
    <>
    <Hero/>
    <InfoBoxes/>
    <HomeProperties/>
    </>
  );
}

 
export default HomePage;  