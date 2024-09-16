import { useState } from "react";
import i18n from "../i18n/i18n";
import styled from "styled-components";
import { QUERIES } from "../constants";

export default function LanguageSelector({ className }) {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  return (
    <LanguageSelectorContainer>
      <Selector
        defaultValue={selectedLanguage}
        onChange={chooseLanguage}
        className={className}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ru">Русский</option>
      </Selector>
    </LanguageSelectorContainer>
  );
}

const Selector = styled.select`
  color: #ccc;
  background: transparent;
  border: none;
`;

const LanguageSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;

  @media ${QUERIES.bigTabletAndUp} {
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;
