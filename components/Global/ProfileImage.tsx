import Image from "next/image";
import { HiUserCircle } from "react-icons/hi";
import { cn } from "../../base/functions/cn";

const ProfileImage = ({
  image,
  className,
  iconClassName,
}: {
  image?: string;
  className?: string;
  iconClassName?: string;
}) => {
  return (
    <div className={cn("relative", className)}>
      {image ? (
        <Image src={image} width={400} height={400} alt='profile image' />
      ) : (
        <div className=''>
          <HiUserCircle className={cn("w-7 h-7", iconClassName)} />
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
