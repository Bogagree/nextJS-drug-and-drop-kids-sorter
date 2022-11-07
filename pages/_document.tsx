import React from 'react';
import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from 'next/document'
import {GetServerSideProps} from 'next';
import {resetServerContext} from 'react-beautiful-dnd';

type Props = {}

export default class MyDocument extends Document<Props> {

    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        resetServerContext()
        return {...initialProps}
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
                    <title>_document</title>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
