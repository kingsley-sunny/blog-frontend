import vesselImg from "@/public/vessel.webp";
import Image from "next/image";
import Link from "next/link";
import ProfileImage from "../../../Global/ProfileImage";

const BannerCard = () => {
  return (
    <Link href={"/business/nack"} className='lg:grid grid-cols-10 lg:gap-12 '>
      <div className='col-span-4 relative w-full h-64 lg:h-96 overflow-hidden rounded-xl'>
        <Image src={vesselImg} fill alt='Blog image - trending' style={{ objectFit: "cover" }} />
      </div>

      <div className='col-span-6 lg:flex lg:items-center'>
        <div className=''>
          {/* the category tag and date */}
          <div className='mt-2'>
            <span className='font-semibold'>Business</span> - {"  "}
            <span className='text-neutral/70 dark:text-gray-400 text-sm'>
              {new Date().toDateString()}
            </span>
          </div>

          {/* The heading and the text */}
          <div className='mt-5'>
            <h2 className='text-2xl lg:text-4xl lg:leading-[45px] font-bold'>
              Your most Unhappy customers are your greatest source of learning
            </h2>

            <p className='mt-4 text-neutral/70 dark:text-gray-400 text-sm'>
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean
            </p>
          </div>

          {/* The author */}
          <div className='flex space-x-3 mt-2 items-center'>
            <ProfileImage iconClassName='w-10 h-10 lg:w-14 lg:h-14' />

            <div className=''>
              <h3 className='text-sm font-bold leading-tight'>Ezeobi Sunny</h3>
              <p className='text-neutral/70 dark:text-gray-400 text-sm'>Ordinary User</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BannerCard;
