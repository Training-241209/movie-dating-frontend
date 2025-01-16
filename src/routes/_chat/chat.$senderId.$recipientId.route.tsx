import { createFileRoute } from '@tanstack/react-router'
import {
  ChatBoxCard,
  ChatBoxCentering,
  ChatBoxContents,
} from '@/components/shared/chat'

export const Route = createFileRoute('/_chat/chat/$senderId/$recipientId')({
  component: RouteComponent,
})



function RouteComponent() {
  //Call get messages from websocket
  const { senderId, recipientId } = Route.useParams()
  return (
    <div>
      <ChatBoxCentering isSidebarOpen={true}>
        <ChatBoxCard>
          <ChatBoxContents
            sender={senderId}
            recipient={recipientId}
            isSideBarOpen
          ></ChatBoxContents>
        </ChatBoxCard>
      </ChatBoxCentering>
    </div>
  )
}
