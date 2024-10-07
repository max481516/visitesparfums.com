import { ValidationError } from "@formspree/react";
import { FaRegCheckCircle } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { QUERIES } from "../constants";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const { t } = useTranslation();

  // Custom handler to manage both reCAPTCHA and form submission via fetch
  const handleCustomSubmit = async (event) => {
    event.preventDefault();

    // Check if reCAPTCHA is completed
    if (!recaptchaValue) {
      setFormError(true); // Set an error if reCAPTCHA is not completed
      return;
    }

    // Prepare the form data for submission
    const form = event.target;
    const formData = new FormData(form);
    formData.append("g-recaptcha-response", recaptchaValue);

    // Use fetch to submit the form data
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      // Check response status
      if (response.ok) {
        setFormSubmitted(true);
        setFormError(false);
      } else {
        setFormError(true);
      }
    } catch (error) {
      setFormError(true);
    }
  };

  // Handle ReCAPTCHA value change
  const onRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setFormError(false); // Reset form error when reCAPTCHA is completed
  };

  // Render success message
  if (formSubmitted) {
    return (
      <ConfirmationWrapper>
        <FaRegCheckCircle color="var(--color-green)" size={50} />
        <ConfirmationMessage>
          {t("Modal.ConfirmationMessage")}
        </ConfirmationMessage>
      </ConfirmationWrapper>
    );
  }

  // Render error message
  if (formError) {
    return (
      <ErrorWrapper>
        <BiErrorCircle color="red" size={40} />
        <ErrorMessage>
          {t("Modal.ErrorMessage")}{" "}
          <ErrorMailLink href="mailto:npascalis@gmail.com">
            npascalis@gmail.com
          </ErrorMailLink>
        </ErrorMessage>
      </ErrorWrapper>
    );
  }

  // Render form
  return (
    <FormContainer
      onSubmit={handleCustomSubmit}
      action="https://formspree.io/f/mqazzaer"
      method="POST"
    >
      <fieldset id="fs-frm-inputs">
        <Label htmlFor="full-name">{t("Modal.FullName")}</Label>
        <Input
          type="text"
          name="name"
          id="full-name"
          placeholder={t("Modal.FullNamePlaceholder")}
          required
        />
        <ValidationError prefix="Name" field="name" />

        <Label htmlFor="email-address">{t("Modal.Email")}</Label>
        <Input
          type="email"
          name="email"
          id="email-address"
          placeholder="email@domain.com"
          required
        />
        <ValidationError prefix="Email" field="email" />

        <Label htmlFor="message">{t("Modal.Message")}</Label>
        <Textarea
          rows="5"
          name="message"
          id="message"
          placeholder={t("Modal.MessagePlaceholder")}
          required
        />
        <ValidationError prefix="Message" field="message" />
      </fieldset>
      <RecaptchaWrapper>
        <ReCAPTCHA
          className="g-recaptcha"
          sitekey="6LfkRVoqAAAAAFWMl8Bm4XHtDGPaFd0SnvYaGjR_"
          data-action="LOGIN"
          onChange={onRecaptchaChange}
        />
      </RecaptchaWrapper>
      <SubmitButton type="submit" disabled={!recaptchaValue}>
        {t("Modal.Submit")}
      </SubmitButton>
      <ContactText>
        {t("Modal.ContactText")} <br />
        <MailLink href="mailto:npascalis@gmail.com">
          npascalis@gmail.com
        </MailLink>
      </ContactText>
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

  &::placeholder {
    opacity: 0.5;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  &::placeholder {
    opacity: 0.5;
  }
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

  &:focus-visible {
    outline: 2px solid var(--color-yellow);
  }
`;

const ConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: fit-content;
  padding: 8px 0;
  margin: 30px auto;
  border-radius: 4px;
`;

const ConfirmationMessage = styled.p`
  font-size: 1.5rem;
`;

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: fit-content;
  padding: 8px 0;
  margin: 30px auto;
  border-radius: 4px;
`;

const ErrorMessage = styled.div`
  text-align: center;
`;

const ErrorMailLink = styled.a`
  color: var(--color-green);
  text-decoration: none;
  transition: color 0.4s ease-in-out;

  &:hover {
    color: var(--color-dark-green);
  }
`;

const RecaptchaWrapper = styled.div`
  margin-top: 1rem;
`;

const ContactText = styled.p`
  text-align: center;
  font-size: calc(10rem / 16);
  margin-top: calc(6rem / 16);
  margin-bottom: calc(-22rem / 16);

  @media ${QUERIES.bigTabletAndUp} {
    margin-top: calc(26rem / 16);
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: calc(36rem / 16);
  }
`;

const MailLink = styled.a`
  color: var(--color-green);
  text-decoration: none;
  transition: color 0.4s ease-in-out;

  &:hover {
    color: var(--color-dark-green);
  }
`;
