import { join } from 'path';

const LINK_PREFIX = process.env.NEXT_PUBLIC_LINK_PREFIX || '';

export const generateUrl = (itemPath: string) => {
    return join(LINK_PREFIX, itemPath);
}

export const getClickHandler = (onClick: any, onDblClick?: any, delay?: number) => {
    let timeoutID: number | undefined;
    delay = delay || 250;
    return (event: React.MouseEvent<HTMLElement>) => {
        if (!timeoutID) {
            event.stopPropagation();
            const mouseEven = {
                ctrlKey: event.ctrlKey,
                stopPropagation: () => event.stopPropagation(),
            };
            event.persist();
            timeoutID = window.setTimeout(() => {
                onClick && onClick(mouseEven);
                timeoutID = undefined;
            }, delay);
        } else {
            window.clearTimeout(timeoutID);
            timeoutID = undefined;
            onDblClick && onDblClick(event);
        }
    };
}