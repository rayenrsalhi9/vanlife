import { useRouteError } from "react-router-dom"

export default function ErrorMsg() {
    const error = useRouteError()
    return (
        <div className="error-msg">
            <pre>{error.statusText} - {error.status}</pre>
            <h1>Error: {error.message}</h1>
        </div>
    )
}
