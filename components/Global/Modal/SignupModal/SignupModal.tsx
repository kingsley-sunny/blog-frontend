import { useAtom } from "jotai";
import { Button, Input } from "react-daisyui";
import { signupModalAtom } from "../../../../app/store";
import Modal from "../Modal";

const SignupModal = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useAtom(signupModalAtom);

  return (
    <Modal title='Sign up with us' onClose={() => setIsSignupModalOpen(false)}>
      <p className='mt-4 text-sm'>Sign up with us to create,like or comment a post</p>

      <form className='mt-6 grid gap-6'>
        <div className='space-y-2'>
          <label>Full Name</label>
          <Input
            size='md'
            placeholder='Enter your full name'
            title='nack'
            className='w-full'
            bordered
            color='neutral'
            type='text'
          />
        </div>

        <div className='space-y-2'>
          <label>Username</label>
          <Input
            size='md'
            placeholder='Enter your username'
            title='nack'
            className='w-full'
            bordered
            color='neutral'
            type='text'
          />
        </div>

        <div className='space-y-2'>
          <label>Email Address</label>
          <Input
            size='md'
            placeholder='Enter your Email Address'
            title='nack'
            className='w-full'
            bordered
            color='neutral'
            type='email'
          />
        </div>

        <div className='space-y-2'>
          <label>Password</label>
          <Input
            size='md'
            placeholder='Enter your Password'
            title='nack'
            className='w-full'
            bordered
            color='neutral'
            type='password'
          />
        </div>

        <Button type='submit' className='text-sm font-black' color='primary'>
          Login{" "}
        </Button>
      </form>
    </Modal>
  );
};

export default SignupModal;
