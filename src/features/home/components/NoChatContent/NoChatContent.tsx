import { Typography, Button, Spacer } from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import { INoChatContent } from "@features/home/types"

export const NoChatContent: React.FC<INoChatContent> = ({ handleClick }) => {
  return (
    <>
      <Typography textStyle="heading2" as="h1" data-testid={testId.noChatTitle}>
        It seems there&apos;s no one to chat at the moment
      </Typography>

      <Spacer variant="stack" size={{ sm: "xxxs", md: "xxxs", lg: "nn" }} />

      <Typography textStyle="subHeading1" as="p">
        No worries, you can wait here until we find someone to chat or you can
        try out our app by chatting with one of our bots
      </Typography>

      <Spacer variant="stack" size={{ sm: "md", md: "md", lg: "sm" }} />

      <Button
        variant="secondary"
        ripple
        w="auto"
        px="xxs"
        h="xs"
        onClick={handleClick}
        data-testid={testId.tryButton}
      >
        Try with bot
      </Button>
    </>
  )
}
