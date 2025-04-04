"use client"

import { cn } from "@/lib/utils"
import { useEditorStore } from "@/store/use-editor-store"
import { Undo2Icon, type LucideIcon } from "lucide-react"

interface TollbarButtonProps {
    onClick?: () => void
    isActive?: boolean
    icon: LucideIcon
}
const TollbarButton = ({
    onClick,
    isActive,
    icon: Icon
}: TollbarButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn("text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
                isActive && "bg-neutral-200/80"
            )}
        >
            <Icon className="size-4" />
        </button>
    )
}
export const Toolbar = () => {
    const {editor} = useEditorStore();

    const sections:{
        label: string
        icon: LucideIcon
        onClick: () => void
        isActive?: boolean
    }[][] =[
        [
         {
            label:"Undo",
            icon: Undo2Icon,
            onClick: () => editor?.chain().focus().undo().run(),
        }   
        ]
        
    ]
    return (
        <div className="bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h[40px] flex items-center gap-x-0.5 overflow-x-auto">
           {sections[0].map((section) => (
               <TollbarButton
                   key={section.label}
                   {...section}
               />
           ))}
        </div>)
}