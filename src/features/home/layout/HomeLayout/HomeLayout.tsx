import { useState } from "react"
import {
  ClickableIcon,
  Logo,
  MoreIcon,
  Popup,
  PopupItem,
  Spacer,
} from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import { useAppDispatch } from "@src/shared/hooks"
import { LoadingLayout } from "@src/shared/layouts"

import { DefaultContent, NoChatContent } from "@features/home/components"
import {
  HomeLayoutContainer,
  HomeLayoutWrapper,
  SettingsContainer,
} from "./styles"

export const HomeLayout: React.FC = () => {
  const [chatNotFound, setChatNotFound] = useState(false)
  const [loading, setLoading] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const dispatch = useAppDispatch()

  const openSettings = () => setSettingsOpen(true)

  const dispatchChat = () => {
    // TODO: will become dispatch
    setLoading(true)

    setTimeout(() => {
      setChatNotFound(true)
      setLoading(false)
    }, 2000)
  }

  const dispatchTryWithBot = () => {
    // TODO: will become dispatch
    console.log("navigate to chat with bot")
  }

  const dispatchLogout = () => {
    // TODO: will become dispatch
    console.log("Logged out")
  }

  if (loading) return <LoadingLayout />

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
        {chatNotFound ? (
          <NoChatContent handleClick={dispatchTryWithBot} />
        ) : (
          <DefaultContent handleClick={dispatchChat} />
        )}
      </HomeLayoutContainer>
    </HomeLayoutWrapper>
  )
}
