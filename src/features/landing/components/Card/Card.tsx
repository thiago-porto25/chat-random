import Image from "next/image"
import { Button, Logo, Spacer, Typography } from "@thiagoporto/minim-ui"

import { useBreakpoint } from "@src/shared/hooks"
import {
  CardButtonsContainer,
  CardContainer,
  CardImgContainer,
  CardMainContainer,
  CardTabletImageContainer,
} from "./styles"
import landingImage from "@src/../public/images/landing/landing-image.svg"

export const Card: React.FC = () => {
  const breakpoint = useBreakpoint()

  return (
    <CardContainer>
      {breakpoint === "lg" && (
        <CardImgContainer>
          <Image
            src={landingImage}
            alt="Two people chatting through their phones."
            priority
          />
        </CardImgContainer>
      )}

      <CardMainContainer>
        <Logo size="sm" />

        <Spacer variant="stack" size={{ sm: "nn", md: "xxs", lg: "xxs" }} />

        <Typography textStyle="heading1" as="h1" data-testid="welcome-message">
          Join Chat Random Today
        </Typography>

        <Spacer variant="stack" size={{ sm: "xs", md: "xs", lg: "sm" }} />

        <Typography textStyle="subHeading1" as="p">
          Find someone to chat around the world right now, anonymously and
          securely.
        </Typography>

        <Spacer variant="stack" size={{ sm: "xs", md: "lg", lg: "xxs" }} />

        {(breakpoint === "sm" || breakpoint === "md") && (
          <>
            <CardTabletImageContainer>
              <div>
                <Image
                  src={landingImage}
                  alt="Two people chatting through their phones."
                  priority
                />
              </div>
            </CardTabletImageContainer>

            <Spacer variant="stack" size={{ sm: "xs", md: "xs", lg: "none" }} />
          </>
        )}

        <CardButtonsContainer>
          <Button data-testid="login-button">Login</Button>

          <Spacer
            variant="stack"
            size={{ sm: "xxxs", md: "xxxs", lg: "xxxs" }}
          />

          <Button
            bgColor="gray100"
            hoverBgColor="gray80"
            activeBgColor="gray80"
            disabledBgColor="gray100"
            data-testid="register-button"
          >
            Sign up
          </Button>

          <Spacer variant="stack" size={{ sm: "none", md: "md", lg: "xxs" }} />
        </CardButtonsContainer>
      </CardMainContainer>
    </CardContainer>
  )
}
