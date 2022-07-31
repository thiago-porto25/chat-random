import { Card } from "../../components"

import { LandingLayoutContainer, LandingLayoutWrapper } from "./styles"

export const LandingLayout: React.FC = () => {
  return (
    <LandingLayoutWrapper>
      <LandingLayoutContainer>
        <Card />
      </LandingLayoutContainer>
    </LandingLayoutWrapper>
  )
}
