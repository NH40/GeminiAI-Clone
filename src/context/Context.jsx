import { createContext, useState } from 'react'
import run from "../config/gemini"

export const Context = createContext()
// eslint-disable-next-line react/prop-types
const ContextProvider = ({children}) => {

	const [input, setInput] = useState("")
	const [recentPrompt, setRecentPrompt] = useState("")
	const [prevPrompt, setPrevPrompt] = useState([]);
	const [showResult, setShowResult] = useState(false)
	const [Loading, setLoading] = useState(false)
	const [resultData, setResultData] = useState("")


	const onSent = async () => {
		setResultData("")
		setLoading(true)
		setShowResult(true)
		setRecentPrompt(input)
		const res = await run(input)
		setResultData(res)
		setLoading(false)
		setInput("")
	}
	const contextValue = {
		prevPrompt,
		setPrevPrompt,
		onSent,
		setRecentPrompt,
		recentPrompt,
		showResult,
		Loading,
		resultData,
		input,
		setInput

	}
	return (
		<Context.Provider value={contextValue}>
			{children}
		</Context.Provider>
	)
}

export default ContextProvider