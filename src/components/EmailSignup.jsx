import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../utils/useSupabase";

function EmailSignup() {
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
  const [isEmailExists, setIsEmailExists] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
 
  } = useForm();

  const handleSignup = async (value) => {
    const { email } = value;

    // Reset the state and clear the error message
    setIsEmailExists(false);

    // Check if email already exists in the database
    // const { data, error } = await supabase
    //   .from("email")
    //   .select()
    //   .eq("email", email);

    // if (error) {
    //   console.error(error);
    //   return;
    // }

    // if (data.length > 0) {
    //   // Email already exists
    //   setIsEmailExists(true);
    //   return;
    // }

    // Insert the email into the database
  //   await supabase.from("email").insert([{ email: email }]).select();
  //   setIsSignupSuccessful(true);
  };

  const handleInputChange = () => {
    // Clear the error message when the input value changes
    if (isEmailExists) {
      setIsEmailExists(false);
    }
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <div className="w-full lg:mx-10  lg:w-fit h-fit">
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="rounded-md relative flex justify-center items-center">
            <input
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              className="w-full h-10 rounded-md pl-2 md:pl-4"
              type="email"
              placeholder="your@email.com"
              onChange={handleInputChange} // Clear error message on input change
            />

            <button
              type="submit"
              className="transition duration-100 ml-3 lg:mt-0 lg:ml-3 p-2 bg-pink-400 hover:scale-105 rounded-md text-lg md:text-xl font-thin text-white"
              disabled={isSignupSuccessful}
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      {errors.email && (
        <p className={`font-normal tracking-widest text-xl text-red-500 mt-2`}>
          {errors.email.type === "required" && "This field is required."}
          {errors.email.type === "pattern" && "Invalid email address."}
        </p>
      )}
      {isEmailExists && (
        <div className="font-normal tracking-widest text-xl text-red-500 mt-2">
          Email already exists!
        </div>
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
