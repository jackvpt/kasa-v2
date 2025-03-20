import { useState, useEffect } from "react"

export function useFetch(url) {
	const [data, setData] = useState(null)
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		if (!url) return
		setLoading(true)
		async function fetchData() {
			try {
				const response = await fetch(url,{
					headers:{
						"Content-Type": "application/json",
						Accept: "application/json"
					}
				})
				const responseData = await response.json()
				setData(responseData)
			} catch (err) {
				console.log(err)
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [url])
	return { isLoading, data, error }
}


