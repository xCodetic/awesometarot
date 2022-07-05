import * as React from "react";

import { Container, styled } from '@mui/material';

const TEST = styled("div")(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
}))

export const Test = () => {
    return (
        <TEST>
            <Container maxWidth="lg">
                <h1>Hello</h1>
            </Container>
        </TEST>
    );
}
