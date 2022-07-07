import * as React from "react";

import { styled } from '@mui/material';

const DEFAULT_FOOTER = styled("footer")(({ theme }) => ({
    width: " 100%",
    height: 100,
    borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    '& img': {
        marginLeft: "0.5rem",
    },
    '& a': {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}))

footer {
    display: block;
    text - align: center;
    padding: 30px 0;
    margin - top: 60px;
    color: #777;
    border - top: 1px solid #eaeaea;
}

export const DefaultFooter = () => {
    return (
        <DEFAULT_FOOTER>
            Copyright 2021 Ninja List
        </DEFAULT_FOOTER>
    );
}
