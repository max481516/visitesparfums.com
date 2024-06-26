import { useState } from "react";
import i18n from "../i18n/i18n";
import styled from "styled-components";

export default function LanguageSelector({ className }) {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  return (
    <LanguageSelectorContainer
      defaultValue={selectedLanguage}
      onChange={chooseLanguage}
      className={className}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="ru">Русский</option>
    </LanguageSelectorContainer>
  );
}

const LanguageSelectorContainer = styled.select`
  color: #fff;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  border: 1px solid #ccc;
  padding: 0.5em 1em;
  font-size: 1em;
  background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><path fill="%23FFFFFF" d="M0 3.5l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 0.5em top 50%;
  background-size: 0.65em auto;
  cursor: pointer;
  width: 105px;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(
    -50%
  ); // This shifts the element to the left by 50% of its own width, effectively centering it horizontally

  &:focus {
    outline: 2px solid var(--color-green);
  }
`;
