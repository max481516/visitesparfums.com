import styled from "styled-components";
import useStores from "../stores/useStores";

export default function ContactModal({ children }) {
  const showModal = useStores((state) => state.showModal);
  const toggleModal = useStores((state) => state.toggleModal);

  if (!showModal) {
    return null;
  }

  const handleOverlayClick = (e) => {
    e.stopPropagation();
    toggleModal();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={toggleModal}>&times;</CloseButton>
        {children}
      </ModalContainer>
    </Overlay>
  );
}

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
