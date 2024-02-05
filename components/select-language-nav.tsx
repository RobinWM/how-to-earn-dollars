"use client"

import { useRouter } from "next/navigation"
import { localesList } from "@/config"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

interface SelectLanguageNavProps extends React.HTMLAttributes<HTMLDivElement> {
  lng: "zh" | "en" | undefined
}

export function SelectLanguageNav({ lng }: SelectLanguageNavProps) {
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Icons.globe className="transition-all scale-100" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center" className="w-6">
        {localesList.map((list, index) => (
          <div key={list.code}>
            <DropdownMenuItem
              className="cursor-pointer"
              style={{
                color: list.code === lng ? "red" : "",
                fontWeight: list.code === lng ? 800 : 400,
              }}
              onSelect={(event: any) => {
                event.preventDefault()
                router.push(`/${list.code}`)
              }}
            >
              <span>{list.name}</span>
            </DropdownMenuItem>
            {index < localesList.length - 1 && <DropdownMenuSeparator />}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
