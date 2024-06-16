import { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import styles from "./Main.module.css"

const Main = () => {

	const {onSent, recentPrompt, showResult, Loading, resultData, setInput, input, } = useContext(Context)

	return (
		<div className={styles.main}>
			<div className={styles.nav}>
				<p>Gemini AI</p>
				<img src={assets.user_icon} alt="" />
			</div>
			<div className={styles.mainContainer}>

				{!showResult 
				? 
				<>
				<div className={styles.greet}>
					<p><span>Привет, БОБА :)</span></p>
					<p>Чем могу вам помочь?</p>
				</div>
				<div className={styles.cards}>
					<div className={styles.card}>
						<p>С чего начать обуения программированию</p>
						<img src={assets.compass_icon} alt="" />
					</div>
					<div className={styles.card}>
						<p>Кратко изложите эту концепцию: городское планирование</p>
						<img src={assets.bulb_icon} alt="" />
					</div>
					<div className={styles.card}>
						<p>Мозговой штурм для сплочения команды во время нашего рабочего совещания</p>
						<img src={assets.message_icon} alt="" />
					</div>
					<div className={styles.card}>
						<p>Какой язык программирование знает Денис</p>
						<img src={assets.code_icon} alt="" />
					</div>
				</div>
				</>
				:
				<div className={styles.result}>
					<div className={styles.resultTitle}>
						<img src={assets.user_icon} alt="" />
						<p>{recentPrompt}</p>
					</div>
					<div className={styles.resultData}>
						<img src={assets.gemini_icon} alt="" />
						{Loading 
						? <>
						<div className={styles.loading}>
							<hr />
							<hr />
							<hr />
						</div>
						</>
						: <p dangerouslySetInnerHTML={{__html:resultData}}>
							{resultData}
						</p>
						}
						
					</div>
				</div>
				}

				
				<div className={styles.mainBottom}>
					<div className={styles.searchBox}>
						<input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Введите запрос здесь" />
						<div>
							<img src={assets.gallery_icon} alt="" />
							<img src={assets.mic_icon} alt="" />
							<img onClick={() => onSent()} src={assets.send_icon} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
