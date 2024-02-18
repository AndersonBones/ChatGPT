import * as HoverCard from '@radix-ui/react-hover-card';
import { ReactNode } from 'react';
import { HoverCardContent } from './styles';

interface HoverCardProps{
    triggerChild:ReactNode,
    content:ReactNode,
    side:"bottom" | "left" | "top" | "right"
}
export default function HoverContainer({content, triggerChild, side}:HoverCardProps) {
    return (
        <HoverCard.Root openDelay={0} closeDelay={0}>
            <HoverCard.Trigger asChild >
                {triggerChild}
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCardContent className="HoverCardContent" side={side} sideOffset={0}>
                    {content}
                    <HoverCard.Arrow className="HoverCardArrow" />
                </HoverCardContent>
            </HoverCard.Portal>
        </HoverCard.Root>
    )
}