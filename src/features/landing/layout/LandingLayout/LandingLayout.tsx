import { useState } from "react"
import { Modal, ModalContent } from "@thiagoporto/minim-ui"

import { Card } from "@features/landing/components"
import { LandingLayoutContainer, LandingLayoutWrapper } from "./styles"

export const LandingLayout: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

  const openLoginModal = () => setIsLoginModalOpen(true)
  const openRegisterModal = () => setIsRegisterModalOpen(true)

  return (
    <LandingLayoutWrapper>
      <LandingLayoutContainer>
        <Modal isOpen={isLoginModalOpen} close={setIsLoginModalOpen}>
          <ModalContent>
            <div data-testid="login-modal">testingasdasdasd</div>
          </ModalContent>
        </Modal>

        <Modal isOpen={isRegisterModalOpen} close={setIsRegisterModalOpen}>
          <ModalContent>
            <div data-testid="register-modal">testing</div>
          </ModalContent>
        </Modal>

        <Card
          openLoginModal={openLoginModal}
          openRegisterModal={openRegisterModal}
        />
      </LandingLayoutContainer>
    </LandingLayoutWrapper>
  )
}
