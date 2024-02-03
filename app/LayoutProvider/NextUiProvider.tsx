'use client'
import React, { PropsWithChildren } from 'react'
import { NextUIProvider } from '@nextui-org/react'
const NextUiProvider = ({ children }: PropsWithChildren<{}>) => {
    return <NextUIProvider>{children}</NextUIProvider>
}

export default NextUiProvider
