import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

function EmailSignup() {

    const submitForm = async (values, formik) => {
      console.log(values);
      const { email } = values;
      try {
        const payload = {
          email_address: email,
        };

      await axios.post('/.netlify/functions/add-email-subscriber', payload);
      alert('Contact details added successfully.');
      formik.resetForm();
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <div className="mt-4 flex flex-col items-center">
  
      <Formik
      className='w-full lg:mx-10 lg:w-fit h-fit'
        initialValues={{email: "" }}
        validationSchema={SignupSchema}
        onSubmit={submitForm}
      >
         {(formik) => (
        <Form className="rounded-md relative flex justify-center items-center w-full ">
          <div className="my-2 flex flex-col">
            <label htmlFor="email" className="block mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <Field
                id="email"
                className="w-full h-10 rounded-md pl-2 md:pl-4"
                name="email"
                placeholder="your@email.com"
              ></Field>
            <ErrorMessage
              component="div"
              name="email"
              className="text-red-700"
            />
          </div>
          <button
            disabled={!formik.isValid || !formik.dirty}
            type="submit"
            className="transition duration-100 ml-3 lg:mt-0 lg:ml-3 p-2 bg-pink-400 hover:scale-105 rounded-md text-lg md:text-xl font-thin text-white"
          >
  Submit
          </button>
        </Form>
        )}
      </Formik>

  </div>
  );
}

export default EmailSignup;
