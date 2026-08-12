import certJuniorWebDev from "../assets/img/certificates/cert-junior-web-developer.jpg";
import certSoftwareEngineering from "../assets/img/certificates/cert-software-engineering.jpg";
import certCybersecurity from "../assets/img/certificates/cert-cisco-cybersecurity.jpg";
import certCcna from "../assets/img/certificates/cert-ccna-networks.jpg";
import certIbmAi from "../assets/img/certificates/cert-ibm-ai.jpg";
import certIbmData from "../assets/img/certificates/cert-ibm-data-analyst.png";
import certFutsal from "../assets/img/certificates/cert-futsal-series.jpg";
import bemGroup from "../assets/img/organization/bem-minat-bakat-group.jpg";
import bemMika from "../assets/img/organization/bem-minat-bakat-mika.jpg";
import logoMercuBuana from "../assets/img/logos/logo-mercu.png";
import logoSmkTelkom from "../assets/img/logos/logo-smk-telkom.png";

// Maps the `image` string used in i18n/content.js certificate entries
// to the actual imported asset, so Vite can bundle/optimize them.
export const certImages = {
  certJuniorWebDev,
  certSoftwareEngineering,
  certCybersecurity,
  certCcna,
  certIbmAi,
  certIbmData,
  certFutsal,
};

// Maps the `photos` string used in i18n/content.js experience entries
// to a small gallery of imported assets.
export const photoGroups = {
  bemMinatBakat: [bemGroup, bemMika],
};

// Maps the `logo` string used in i18n/content.js education entries
// to the school/university logo asset.
export const schoolLogos = {
  mercuBuana: logoMercuBuana,
  smkTelkom: logoSmkTelkom,
};
