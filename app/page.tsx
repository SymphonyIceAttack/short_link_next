'use client'
import { Button, Input, Snippet } from '@nextui-org/react'

import { useState } from 'react'

export default function Home() {
    const [LinkUrl, setLinkUrl] = useState('')
    const [errorMessage, seterrorMessage] = useState('')
    const [isErrorMessageShow, setisErrorMessageShow] = useState(false)
    const [isShortLinkShow, setisShortLinkShow] = useState(false)
    const [shortLink, setshortLink] = useState('')

    const Submit = () => {
        fetch('https://shorlinkplatorm.onrender.com/generateLink', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url: LinkUrl,
            }),
        })
            .then(async (res) => {
                return [res.status, await res.json()]
            })
            .then(([status, obj]) => {
                if (status === 406) {
                    setisErrorMessageShow(true)
                    setisShortLinkShow(false)
                    seterrorMessage(obj.error)
                }
                if (status === 202) {
                    setisErrorMessageShow(false)
                    setisShortLinkShow(true)
                    setshortLink(obj.url)
                }
            })
    }
    return (
        <main className="flex items-center justify-between h-[80vh]  bg-white">
            <form
                className="w-[80%] mx-auto pt-8"
                onSubmit={(e) => {
                    e.preventDefault()
                    Submit()
                }}>
                <div className="my-4">
                    <p className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                        Shorten Your URL
                    </p>
                </div>
                <div className="w-[80%] flex gap-8 items-center my-4">
                    <Input
                        size={'lg'}
                        variant="bordered"
                        label="Enter your URL"
                        type="url"
                        value={LinkUrl}
                        onChange={(e) => {
                            setLinkUrl(e.target.value)
                        }}
                    />
                    <Button size="lg" type="submit" color="secondary">
                        Shorten
                    </Button>
                </div>
                {isShortLinkShow && (
                    <Snippet variant="bordered">
                        {`https://shorlinkplatorm.onrender.com/s?s=${shortLink}`}
                    </Snippet>
                )}
                {isErrorMessageShow && (
                    <Snippet variant="bordered">{errorMessage}</Snippet>
                )}
            </form>
        </main>
    )
}
