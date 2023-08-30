import { useAtom } from "jotai";
import { Button, Input } from "react-daisyui";
import { loginModalAtom } from "../../../../app/store";
import Modal from "../Modal";

const LoginModal = () => {
  const [isLoginModalShown, setIsLoginModalShown] = useAtom(loginModalAtom);

  return (
    <Modal title='Login In' onClose={() => setIsLoginModalShown(false)}>
      <p className='mt-4 text-sm'>Login to your Account</p>

      <form className='mt-6 grid gap-6'>
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

export default LoginModal;
