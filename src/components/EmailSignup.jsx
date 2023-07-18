import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

function EmailSignup() {
  const [email, setEmail] = useState("");

  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
  const { register, trigger, formState: { errors } } = useForm();

  const handleSignup = async (e) => {
    e.preventDefault();

    const isValid = await trigger();
    if (!isValid) {
      return;
    }

    try {
      await axios.post('/api/addMember', {
        email: email
      });

      setIsSignupSuccessful(true);
      setEmail( "");
    } catch (error) {
      console.log(error);
      // Handle error case
    }
  };

  const handleChange = (e) => {
    setEmail( e.target.value);
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <div className="w-full lg:mx-10  lg:w-fit h-fit">
        <form className="rounded-md relative flex justify-center items-center">
          <input
            onChange={handleChange}
            className="w-full h-10 rounded-md pl-2 md:pl-4"
            type="email"
            placeholder="your@email.com"
            required
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />

          <button
            onClick={handleSignup}
            className="transition duration-100 ml-3 lg:mt-0 lg:ml-3 p-2 bg-pink-400 hover:scale-105 rounded-md text-lg md:text-xl font-thin text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
      {errors.email && (
        <p className="font-normal tracking-widest text-xl text-red-500 mt-2">
          {errors.email.type === "required" && "This field is required."}
          {errors.email.type === "pattern" && "Invalid email address."}
        </p>
      )}
      {isSignupSuccessful && (
        <div className="font-normal tracking-widest text-xl text-green-500 mt-2">
          Email Sign-up successful!
        </div>
      )}
    </div>
  );
}

export default EmailSignup;
