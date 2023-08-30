import Container from "../Container";

const Footer = () => {
  return (
    <div className='bg-base-200 mt-16'>
      <Container className='py-12 text-center text-gray-500'>
        <p className=''>
          Copyright ©2023 All rights reserved | This template is made with by EKC SUNNY
        </p>

        <p className='mt-8 text-center'>
          <span className=''>Terms & Conditions / </span>
          <span className=''>Privacy Policy</span>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
