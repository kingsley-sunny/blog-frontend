import BannerSection from "./BannerSection/BannerSection";
import CategoriesSection from "./CategoriesSection/CategoriesSection";

const HomePage = () => {
  return (
    <div>
      <BannerSection />

      <div className='mt-8 space-y-12'>
        <CategoriesSection />
        <CategoriesSection />
        <CategoriesSection />
        <CategoriesSection />
      </div>
    </div>
  );
};

export default HomePage;
