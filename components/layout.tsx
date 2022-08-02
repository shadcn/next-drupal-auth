import Link from "next/link"

import { PreviewAlert } from "components/preview-alert"
import { useSession, signOut } from "next-auth/react"

export function Layout({ children }) {
  const { data, status } = useSession()
  return (
    <>
      <PreviewAlert />
      <div className="max-w-screen-md px-6 mx-auto">
        <header>
          <div className="container flex items-center justify-between py-6 mx-auto">
            <Link href="/" passHref>
              <a className="text-2xl font-semibold no-underline">
                Next.js for Drupal
              </a>
            </Link>
            {status === "authenticated" && (
              <p>
                You are logged in as <strong>{data.user.email}</strong> -{" "}
                <button onClick={() => signOut()}>Sign out</button>
              </p>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin" passHref>
                <a>Sign in</a>
              </Link>
            )}
          </div>
        </header>
        <main className="container py-10 mx-auto">{children}</main>
      </div>
    </>
  )
}
