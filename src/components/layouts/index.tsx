import { DefaultFooter } from 'components/footer';
import { DefaultHeader } from 'components/header';
import { NextPage } from 'next';
import { styled } from '@mui/material';

interface ILayoutProps {
    children: any;
}
interface IDefaultLayoutProps extends ILayoutProps { }


const DEFAULT_LAYOUT = styled("div")(({ theme }) => ({
    maxWidth: 960,
    margin: "0 auto",
}))

export const DefaultLayout = (props: IDefaultLayoutProps) => {
    const { children } = props;
    return (
        <DEFAULT_LAYOUT>
            <DefaultHeader />
            {children}
            <DefaultFooter />
        </DEFAULT_LAYOUT>
    );
}

type PageWithDefaultLayoutType = NextPage & { layout: typeof DefaultLayout };
export type PageWithLayoutType = PageWithDefaultLayoutType;
