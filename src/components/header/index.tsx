import * as React from "react";

import Link from "next/link";
import { styled } from '@mui/material';

const DEFAULT_HEADER = styled("nav")(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,

    nav {
        margin: 10px auto 80px;
        padding: 10px 0;
        display: flex;
        justify- content: flex - end;
align - items: flex - end;
border - bottom: 1px solid #ddd;
      }
      nav a {
    margin - left: 12px;
}
nav.logo {
    margin - right: auto;
}
}))

export const DefaultHeader = () => {
    return (
        <DEFAULT_HEADER>
            <div className="logo">
                <h1>Ninja List</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas/"><a>Ninja Listing</a></Link>
        </DEFAULT_HEADER>
    );
}
