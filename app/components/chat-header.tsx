'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { MenuIcon, SparklesIcon } from 'lucide-react'

import { Trash2 } from 'lucide-react'

interface ChatHeaderProps {
  selectedModel: string
  onModelChange: (model: string) => void
  onMenuClick: () => void
  onClearConversation?: () => void
}

export function ChatHeader({ selectedModel, onModelChange, onMenuClick, onClearConversation }: ChatHeaderProps) {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <MenuIcon className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center lg:hidden">
              <span className="text-accent-foreground font-bold text-sm">K</span>
            </div>
            <h1 className="text-lg font-semibold text-foreground">Kodhad AI</h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => onClearConversation?.()}>
            <Trash2 className="h-4 w-4 mr-2" />
            Limpiar
          </Button>

          <Select value={selectedModel} onValueChange={onModelChange}>
            <SelectTrigger className="w-[200px] bg-secondary border-border">
              <div className="flex items-center gap-2">
                <SparklesIcon className="h-4 w-4 text-accent" />
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Kodhad AI Default</SelectItem>
              <SelectItem value="pro">Kodhad AI Pro</SelectItem>
              <SelectItem value="ultra">Kodhad Ultra</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  )
}
