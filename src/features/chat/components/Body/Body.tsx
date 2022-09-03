import { Message, Spacer } from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import { useAppSelector } from "@src/shared/hooks"

import { selectAuthUser } from "@src/features/auth/store/selectors"

import type { IBody } from "@features/chat/types"

import { Container } from "./styles"

export const Body: React.FC<IBody> = ({ messages }) => {
  const authUser = useAppSelector(selectAuthUser)

  return (
    <Container data-testid={testId.messagesContainer}>
      <Spacer variant="stack" size="xxxs" />

      {messages.length > 0 &&
        messages.map((message, i) => (
          <>
            <Message
              message={message.content}
              timestamp={message.timestamp.toDate()}
              sent={authUser?.uid === message.authorId}
              key={`message-${i}-${message.authorId[0]}`}
            />
            <Spacer variant="stack" size="xxxs" />
          </>
        ))}
    </Container>
  )
}
