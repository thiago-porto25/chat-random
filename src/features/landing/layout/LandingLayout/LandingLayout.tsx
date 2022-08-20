import { useState } from "react"
import { Modal, ModalContent } from "@thiagoporto/minim-ui"

import { LoginLayout, RegisterLayout } from "@src/features/auth"

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
            <LoginLayout close={setIsLoginModalOpen} />
          </ModalContent>
        </Modal>

        <Modal isOpen={isRegisterModalOpen} close={setIsRegisterModalOpen}>
          <ModalContent>
            <RegisterLayout close={setIsRegisterModalOpen} />
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
