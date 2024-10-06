import { useEffect, useState } from "react";
import i18n from "../i18n/i18n";
import styled from "styled-components";
import { QUERIES } from "../constants";

export default function LanguageSelector({ className }) {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    // Check if the user is on an iOS device
    const isiOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isiOS) {
      // Add the 'ios-selector' class if it's an iOS device
      document.querySelectorAll(".mobile-language-selector").forEach((el) => {
        el.classList.add("ios-selector");
      });
    }
  }, []);

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
        className={`mobile-language-selector ${className}`}
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
  background: hsla(20, 25%, 89%, 0.98);
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
