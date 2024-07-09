'use client'
import NavigationBar from "@/component/navigationbar/page"
import Link from "next/link"
import './homelayout.scss'
import Homepage from "./homepage/page"
export default function Home() {
  return (
    <>
      {/* <NavigationBar /> */}
      <Homepage />
    </>
  )
}