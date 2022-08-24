import { Button, Spacer, Typography } from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import { IDefaultContent } from "@features/home/types"

export const DefaultContent: React.FC<IDefaultContent> = ({ handleClick }) => {
  return (
    <>
      <Typography textStyle="heading1" as="h1">
        Start chatting worldwide
      </Typography>

      <Spacer variant="stack" size={{ sm: "xxl", md: "xxl", lg: "xl" }} />

      <Button
        variant="primary"
        large
        ripple
        onClick={handleClick}
        data-testid={testId.chatNowButton}
      >
        Chat now
      </Button>
    </>
  )
}
