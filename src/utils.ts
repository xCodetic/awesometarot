import { join } from 'path';

export const generateUrl = (itemPath: string) => {
    return join('/awesometarot', itemPath);
}