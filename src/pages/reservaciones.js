import React from "react"
import Layout from "../components/layout"
import ReservationsWidget from "../components/reservations-widget/reservations-widget.component"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

const Reservations = () => {
  return (
    <Layout
      seo={{
        title: "Reservaciones | Manqa ",
        metaDesc: "Reserva una mesa en Manqa",
        metaRobotsNoindex: "index",
        metaRobotsNofollow: "follow",
      }}
      hideFooter
      hideHeader
    >
      <QueryClientProvider client={queryClient}>
        <ReservationsWidget />
      </QueryClientProvider>
    </Layout>
  )
}

export default Reservations
