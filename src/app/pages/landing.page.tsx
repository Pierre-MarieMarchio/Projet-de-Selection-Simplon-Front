import { BlaguesComponet } from "../components/blagues/blagues.component";
import { PresentationBanner } from "../components/presentation-banner/presentation-banner.component";

export const LandingPage = () => {
  return (
    <div className="page">
      <PresentationBanner />
      <BlaguesComponet />
    </div>
  );
};
