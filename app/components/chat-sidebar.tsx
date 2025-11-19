'use client'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PlusIcon, MessageSquareIcon, ChevronLeftIcon } from 'lucide-react'

interface Conversation {
  id: number
  title: string
  time?: string
}

interface ChatSidebarProps {
  isOpen: boolean
  onToggle: () => void
  conversations: Conversation[]
  onNewConversation: () => void
  onSelectConversation: (id: number) => void
}

export function ChatSidebar({ isOpen, onToggle, conversations, onNewConversation, onSelectConversation }: ChatSidebarProps) {
  return (
    <>
      <aside 
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed lg:relative z-50 h-screen w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 ease-in-out flex flex-col`}
      >
        <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">K</span>
            </div>
            <span className="font-semibold text-sidebar-foreground">Kodhad AI</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-sidebar-foreground"
            onClick={onToggle}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-3">
          <Button 
            className="w-full justify-start gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={onNewConversation}
          >
            <PlusIcon className="h-4 w-4" />
            Nueva conversación
          </Button>
        </div>

        <ScrollArea className="flex-1 px-3">
          <div className="space-y-1">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                className="w-full text-left p-3 rounded-lg hover:bg-sidebar-accent transition-colors group"
                onClick={() => onSelectConversation(conv.id)}
              >
                <div className="flex items-start gap-2">
                  <MessageSquareIcon className="h-4 w-4 text-sidebar-foreground/60 mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-sidebar-foreground font-medium truncate">
                      {conv.title}
                    </p>
                    <p className="text-xs text-sidebar-foreground/50 mt-1">
                      {conv.time}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-sidebar-border">
          <div className="text-xs text-sidebar-foreground/50 text-center">
            © 2025 Kodhad AI
          </div>
        </div>
      </aside>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  )
}