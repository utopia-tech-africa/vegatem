import {
  partnershipImg1,
  partnershipImg2,
  partnershipImg3,
} from "@/assets/img";
import PartnershipCard from "./partnership-card";

export default function PartnershipCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      <PartnershipCard
        image={partnershipImg1}
        category="Pharmacy"
        title="Retail pharmacy partnership opportunities"
        description="Vegatem is dedicated to forging strong alliances with retail pharmacies. Together, we can ensure that more communities gain access to vital malaria treatment."
      />

      <PartnershipCard
        image={partnershipImg2}
        category="Health"
        title="Hospital and clinic integration"
        description="Partner with Vegatem to integrate our treatment into your hospital or clinic. We are committed to supporting healthcare providers in the fight against malaria."
      />

      <PartnershipCard
        image={partnershipImg3}
        category="NGO’s"
        title="NGO partnerships for community impact"
        description="Join us in our mission to combat malaria. We are actively seeking passionate distributors to expand the reach of Vegatem and improve global health outcomes."
      />
    </div>
  );
}
