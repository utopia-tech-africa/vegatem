import PartnershipCards from "./components/partnership-cards";

export default function Partnership() {
  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <p className="mb-3 font-satoshi text-sm text-primary-1 font-extrabold">
          Partnerships
        </p>

        <h4 className="mx-auto max-w-3xl text-3xl font-semibold font-clash text-secondary-1 leading-[130%] md:text-4xl">
          Become a{" "}
          <span className="text-primary-1 font-extrabold leading-[150%]">
            Vegatem®
          </span>{" "}
          distribution partner and help lead the fight against malaria.
        </h4>
      </div>

      <div className="mx-auto max-w-7xl">
        <PartnershipCards />
      </div>
    </section>
  );
}
