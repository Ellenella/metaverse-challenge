import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black flex">
      <h1>I am a Login Screen!</h1>
      <div className="flex flex-col absolute z-20 h-4/6 w-full place-items-end justify-center p-20 space-y-8">
        {/*Papafam Logo */}
        <Image
          className="object-cover rounded-full"
          src="https://i.ibb.co/PM77Wwq/animation.jpg"
          height={200}
          width={200}
        />
        {/*Login Button */}
        <button
          onClick={() => authenticate()}
          className="bg-blue-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the Metaverse
        </button>
      </div>
      <div className="w-full h-full">
        <Image
          src="https://i.ibb.co/GtC2nk6/metaverse.jpg"
          layout="fill"
          objectFit="cover"
        />
        <h1>Metaverse Sign In</h1>
      </div>
    </div>
  );
}

export default Login;
