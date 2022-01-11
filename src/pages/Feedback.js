import React from "react";
// formspree form
import { useForm, ValidationError } from "@formspree/react";

const Feedback = () => {
  const [state, handleSubmit] = useForm("meqnoypj");

  if (state.submitting) {
    return <h1 className="container feedback-page">Submitting...</h1>;
  }
  if (state.succeeded) {
    return (
      <h1 className="container feedback-page">Thank you for your feedback!</h1>
    );
  }

  return (
    <section className="container feedback-page">
      <h2>Give us your feedback!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Roman"
            required
          />
          <ValidationError
            field="name"
            prefix="Name : "
            errors={state.errors}
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="my_email@example.com"
          />
          <ValidationError
            field="email"
            prefix="Email : "
            errors={state.errors}
          />
        </div>
        <div className="form-input">
          <label htmlFor="feedback">Your feedback</label>
          <textarea
            name="feedback"
            id="feedback"
            placeholder="Type your feedback here"
            required
          ></textarea>
          <ValidationError
            field="feedback"
            prefix="Feedback : "
            errors={state.errors}
          />
        </div>
        <button
          className="btn btn-submit"
          type="submit"
          disabled={state.submitting}
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Feedback;
