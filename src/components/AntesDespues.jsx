
import ReactCompareImage from "react-compare-image";
import antes from "../assets/antes.jpg";
import despues from "../assets/despues.jpg";

export default function AntesDespues() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Antes / Después</h2>
      <div className="mx-auto w-full max-w-md md:max-w-2xl lg:max-w-xl" data-aos="zoom-in">
        <ReactCompareImage leftImage={antes} rightImage={despues} />
      </div>
    </section>
  );
}
