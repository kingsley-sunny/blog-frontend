import Link from "next/link";
import { HiArrowCircleRight } from "react-icons/hi";
import BlogCard from "../../../Global/BlogCard";
import Container from "../../../Global/Container";

const CategoriesSection = () => {
  return (
    <Container className=''>
      <h1 className='text-xl lg:text-3xl text-center mt-9 lg:mt-16 font-black'>Politics</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      <div className='mt-8'>
        <Link href={"/"} className='flex space-x-2 items-center'>
          <span className=''>Click to see more news on Politics</span>
          <HiArrowCircleRight className='w-7 h-7' />
        </Link>
      </div>
    </Container>
  );
};

export default CategoriesSection;
