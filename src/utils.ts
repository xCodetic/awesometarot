import { join } from 'path';

const LINK_PREFIX = process.env.NEXT_PUBLIC_LINK_PREFIX || '';

export const generateUrl = (itemPath: string) => {
    return join(LINK_PREFIX, itemPath);
}