import { Button, Typography } from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import type { IHeader } from "@features/chat/types"

import { Container } from "./styles"

export const Header: React.FC<IHeader> = ({ onLeave }) => {
  return (
    <Container>
      <Typography textStyle="heading3" as="h1">
        Random person
      </Typography>

      <Button
        onClick={onLeave}
        variant="secondary"
        w="auto"
        h="auto"
        py="qk"
        px="xxxs"
        ripple
        data-testid={testId.chatLeave}
      >
        Leave
      </Button>
    </Container>
  )
}
