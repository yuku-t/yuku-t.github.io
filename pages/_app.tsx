import React from "react"
import App from "next/app"
import Head from "next/head"
import Router from "next/router"
import withGA from "next-ga"

import "src/main.scss"
import "src/configureFontAwesome"

import { SITE_NAME } from "src/constants"
import Layout from "src/components/Layout/Layout"

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>{SITE_NAME}</title>
          <link rel="apple-touch-icon" sizes="57x57" href="/static/icons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/icons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/icons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/icons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/icons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/icons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/icons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/icons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/icons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/icons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
          <link rel="icon" href="/static/icons/favicon.ico" />
          <link rel="manifest" href="/static/config/manifest.json" />
          <meta name="msapplication-TileColor" content="#00BCD4" />
          <meta name="msapplication-TileImage" content="/static/icons/ms-icon-144x144.png" />
          <meta name="msapplication-config" content="/static/config/browserconfig.xml" />
          <meta name="google-site-verification" content="uoCr1A890A-K8B7GkFUvLlQ5ihZlFyR6gzvt4F-62u0" />
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700|Damion" rel="stylesheet" />
          <link rel="alternate" type="application/rss+xml" href="/static/rss-feed.xml" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

export default withGA("UA-4932407-15", Router)(MyApp)
