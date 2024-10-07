import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaRegCheckCircle } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import useStores from "../stores/useStores";

export default function ContactModalForm() {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [recaptchaError, setRecaptchaError] = useState(false);
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mqazzaer");
  const showModal = useStores((state) => state.showModal);
  const toggleModal = useStores((state) => state.toggleModal);

  // Handle ReCAPTCHA value change
  const onRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setRecaptchaError(false);
  };

  // Custom handler to manage both reCAPTCHA and form submission
  const handleCustomSubmit = (event) => {
    event.preventDefault();

    // Check if reCAPTCHA is completed
    if (!recaptchaValue) {
      setRecaptchaError(true);
      return;
    }

    // If reCAPTCHA is completed, proceed with Formspree submission
    handleSubmit(event);
  };

  // Do not render if the modal is not supposed to be visible
  if (!showModal) {
    return null;
  }

  // Modal content based on submission state
  let modalContent;
  if (state.succeeded) {
    modalContent = (
      <ConfirmationWrapper>
        <FaRegCheckCircle color="var(--color-green)" size={50} />
        <ConfirmationMessage>
          {t("Modal.ConfirmationMessage")}
        </ConfirmationMessage>
      </ConfirmationWrapper>
    );
  } else if (recaptchaError || state.errors) {
    modalContent = (
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
  } else {
    modalContent = (
      <FormContainer onSubmit={handleCustomSubmit}>
        <fieldset id="fs-frm-inputs">
          <Label htmlFor="full-name">{t("Modal.FullName")}</Label>
          <Input
            type="text"
            name="name"
            id="full-name"
            placeholder={t("Modal.FullNamePlaceholder")}
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <Label htmlFor="email-address">{t("Modal.Email")}</Label>
          <Input
            type="email"
            name="email"
            id="email-address"
            placeholder="email@domain.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <Label htmlFor="message">{t("Modal.Message")}</Label>
          <Textarea
            rows="5"
            name="message"
            id="message"
            placeholder={t("Modal.MessagePlaceholder")}
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </fieldset>
        <RecaptchaWrapper>
          <ReCAPTCHA
            className="g-recaptcha"
            sitekey="6LfkRVoqAAAAAFWMl8Bm4XHtDGPaFd0SnvYaGjR_"
            onChange={onRecaptchaChange}
          />
        </RecaptchaWrapper>
        <SubmitButton type="submit" disabled={state.submitting}>
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

  return (
    <Overlay onClick={() => toggleModal()}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={toggleModal}>&times;</CloseButton>
        {modalContent}
      </ModalContainer>
    </Overlay>
  );
}

// Styled Components for Modal and Form
const Overlay = styled.div`
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: hsl(20, 25%, 95%);
  padding: 0.5rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const CloseButton = styled.span`
  position: absolute;
  top: -5px;
  right: 10px;
  font-size: 2rem;
  cursor: pointer;
  color: var(--color-green);
`;

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
  margin-bottom: -0.5rem;
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
`;

const MailLink = styled.a`
  color: var(--color-green);
  text-decoration: none;
  transition: color 0.4s ease-in-out;

  &:hover {
    color: var(--color-dark-green);
  }
`;
