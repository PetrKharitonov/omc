"use client";

import { useWindowWidth } from "../hooks/useWindowWidth";
import PartnersSwiper from "./swipers/PartnersSwiper";
import PartnerCard from "./cards/PartnerCard";

const AboutPartners = ({ partners }) => {
  const windowWidth = useWindowWidth();

  return (
    <div>
      {windowWidth > 730 ? (
        <div className="about-partners-container">
          {partners.map((partner) => {
            let title = partner.node.partner.title;
            let description = partner.node.partner.opisanie;
            let link = partner.node.partner.link;
            let logo = partner.node.partner.logo;
            let docs = [];
            if (partner.node.partner.doc1 != null)
              docs.push(partner.node.partner.doc1);
            if (partner.node.partner.doc2 != null)
              docs.push(partner.node.partner.doc2);
            if (partner.node.partner.doc3 != null)
              docs.push(partner.node.partner.doc3);

            return (
              <PartnerCard
                logo={logo}
                title={title}
                description={description}
                link={link}
                docs={docs}
                key={title}
              />
            );
          })}
        </div>
      ) : (
        <PartnersSwiper partners={partners} />
      )}
    </div>
  );
};

export default AboutPartners;
