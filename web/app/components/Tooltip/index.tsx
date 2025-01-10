import { Button } from "@/app/components/ui/button"
import {
  Tooltip as TooltipUi,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "@/app/components/ui/tooltip"

type TooltipProps = {
  children: React.ReactNode,
  title: React.ReactNode,
}

const Tooltip = ({title, children}:TooltipProps)  => {
  return (
    <TooltipProvider delayDuration={300}>
      <TooltipUi>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          {title}
          <TooltipArrow className={"fill-black dark:fill-white"} />
        </TooltipContent>
      </TooltipUi>
    </TooltipProvider>
  )
}

export default Tooltip
