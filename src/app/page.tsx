import S from "@/components/s/S";
import HeroSection from "../components/hero/Herosection";
import Vedio from "@/components/vedio/Vedio";
import WiatList from "../components/waitlist/WiatList"
import HowItWorks from "@/components/how/Howitworks";
import A from "@/components/a/A";
import Product from "@/components/product/Product";
import Faq from "@/components/faq/Faq";
import Form from "@/components/form/Form"
import Footer from "@/components/footer/Footer"
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Vedio />
      <WiatList />
      <S />
      <HowItWorks />
      <A />
      <Product />
      <Faq />
      <Form />
      <Footer />
    </main>
  );
}
