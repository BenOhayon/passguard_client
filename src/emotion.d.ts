import "@emotion/react";

declare module "@emotion/react" {
    export interface Theme {
        colors: {
            primary: string;
        },
        dimensions: {
            mobile: string;
            tablet: string;
            desktop: string;
        },
        sizes: {
            topBar: string;
        }
    }
}