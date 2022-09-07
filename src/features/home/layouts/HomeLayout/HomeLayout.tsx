import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Unsubscribe } from "firebase/firestore"
import {
  ClickableIcon,
  Loading,
  Logo,
  MoreIcon,
  Popup,
  PopupItem,
  Spacer,
} from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import { useAppDispatch, useAppSelector } from "@src/shared/hooks"
import { LoadingLayout } from "@src/shared/layouts"
import { CHAT } from "@src/shared/constants/routes"

import {
  chatWithBotAction,
  resetChatStateAction,
} from "@src/features/chat/store/chat.slice"
import { findOrCreateChatEffect } from "@src/features/chat/store/effects/findOrCreateChat.effect"
import { ListenChatEffect } from "@src/features/chat/store/effects/ListenChat.effect"
import { deleteChatEffect } from "@src/features/chat/store/effects/deleteChat.effect"

import { logoutEffect } from "@src/features/auth/store/effects/logout.effect"
import { selectAuthUser } from "@src/features/auth/store/selectors"
import {
  selectChatId,
  selectChatFindStatus,
} from "@src/features/chat/store/selectors"

import { DefaultContent, NoChatContent } from "@features/home/components"
import {
  HomeLayoutContainer,
  HomeLayoutWrapper,
  SettingsContainer,
} from "./styles"

export const HomeLayout: React.FC = () => {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const authUser = useAppSelector(selectAuthUser)
  const chatId = useAppSelector(selectChatId)
  const status = useAppSelector(selectChatFindStatus)
  const router = useRouter()
  const dispatch = useAppDispatch()

  const openSettings = () => setSettingsOpen(true)

  const dispatchChat = () => {
    if (authUser)
      dispatch(
        findOrCreateChatEffect({
          navigate: router.push,
          authUserId: authUser?.uid,
        })
      )
  }

  const dispatchTryWithBot = () => {
    if (authUser) {
      dispatch(chatWithBotAction(authUser))
      router.push(`/${CHAT}`)
    }
  }

  const dispatchLogout = () => {
    dispatch(logoutEffect())
    if (chatId) dispatch(deleteChatEffect({ chatId }))
  }

  useEffect(() => {
    let unsub: Unsubscribe | null = null

    if (chatId && status === "created") {
      unsub = dispatch(ListenChatEffect({ navigate: router.push, chatId }))
    }

    return () => {
      if (unsub !== null) unsub()
    }
  }, [status, chatId, dispatch, router.push])

  useEffect(() => {
    dispatch(resetChatStateAction())
  }, [dispatch])

  if (status === "loading") return <LoadingLayout />

  return (
    <HomeLayoutWrapper>
      <HomeLayoutContainer>
        <SettingsContainer>
          <ClickableIcon
            onClick={openSettings}
            data-testid={testId.settingsButton}
          >
            <MoreIcon />
          </ClickableIcon>

          <Popup isOpen={settingsOpen} close={setSettingsOpen}>
            <PopupItem
              text="Logout"
              onClick={dispatchLogout}
              data-testid={testId.logoutButton}
            />
          </Popup>
        </SettingsContainer>

        {status === "created" ? (
          <Loading />
        ) : (
          <Logo size={{ sm: "xxl", md: "xxl", lg: "uul" }} />
        )}

        <Spacer variant="stack" size={{ sm: "md", md: "md", lg: "sm" }} />

        {status === "created" ? (
          <NoChatContent handleClick={dispatchTryWithBot} />
        ) : (
          <DefaultContent handleClick={dispatchChat} />
        )}
      </HomeLayoutContainer>
    </HomeLayoutWrapper>
  )
}
