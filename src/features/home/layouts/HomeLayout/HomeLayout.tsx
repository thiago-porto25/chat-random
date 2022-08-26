import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Unsubscribe } from "firebase/firestore"
import {
  ClickableIcon,
  Logo,
  MoreIcon,
  Popup,
  PopupItem,
  Spacer,
} from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import { useAppDispatch, useAppSelector } from "@src/shared/hooks"
import { LoadingLayout } from "@src/shared/layouts"

import { logout, selectAuthUser } from "@src/features/auth/store/auth.slice"

import {
  findOrCreateChat,
  initializeCreatedChatListener,
  selectChatFindStatus,
  selectChatId,
} from "@src/features/chat/store/chat.slice"

import { DefaultContent, NoChatContent } from "@features/home/components"
import {
  HomeLayoutContainer,
  HomeLayoutWrapper,
  SettingsContainer,
} from "./styles"

export const HomeLayout: React.FC = () => {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const router = useRouter()
  const dispatch = useAppDispatch()
  const authUser = useAppSelector(selectAuthUser)
  const chatId = useAppSelector(selectChatId)
  const status = useAppSelector(selectChatFindStatus)

  const openSettings = () => setSettingsOpen(true)

  const dispatchChat = () => {
    if (authUser)
      dispatch(
        findOrCreateChat({ navigate: router.push, authUserId: authUser?.uid })
      )
  }

  const dispatchTryWithBot = () => {
    // TODO: will become dispatch
    // TODO: UPDATE NoChatContent with content explaining that a chat has been open and we are waiting for someone to enter it, add a loading indicator. Give the user the choice to wait to chat with a bot
    console.log("navigate to chat with bot")
  }

  const dispatchLogout = () => {
    dispatch(logout())
  }

  useEffect(() => {
    let unsub: Unsubscribe | null = null

    if (chatId && status === "created") {
      unsub = dispatch(
        initializeCreatedChatListener({ navigate: router.push, chatId })
      )
    }

    return () => {
      if (unsub !== null) unsub()
    }
  }, [status, chatId, dispatch, router.push])

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

        <Logo size={{ sm: "xxl", md: "xxl", lg: "uul" }} />
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
