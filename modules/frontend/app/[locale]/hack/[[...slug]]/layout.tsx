import type {ReactNode} from "react";

export type SlugParams = {
    params: {
        slug?: string[]
    }
}

export default function SlugLayout({children}: { children: ReactNode }) {
    return <main className="section">
        {children}
    </main>
}