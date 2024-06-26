import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import { FaRegCheckCircle } from "react-icons/fa";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mqazzaer");

  if (state.succeeded) {
    return (
      <Wrapper>
        <FaRegCheckCircle color="var(--color-green)" size={50} />
        <ConfirmationMessage>Thank you for your message!</ConfirmationMessage>
      </Wrapper>
    );
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <fieldset id="fs-frm-inputs">
        <Label htmlFor="full-name">Full Name</Label>
        <Input
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <Label htmlFor="email-address">Email Address</Label>
        <Input
          type="email"
          name="email"
          id="email-address"
          placeholder="email@domain.com"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <Label htmlFor="message">Message</Label>
        <Textarea
          rows="5"
          name="message"
          id="message"
          placeholder="Your message here"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
      </fieldset>
      <SubmitButton type="submit" disabled={state.submitting}>
        Submit
      </SubmitButton>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: var(--color-green);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-dark-green);
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15dvh;
  gap: 1rem;
`;

const ConfirmationMessage = styled.p`
  font-size: 1.5rem;
`;
