import { useState } from 'react'
import { assets } from "../../assets/assets"
import "./Sidebar.module.css"
import styles from "./Sidebar.module.css"

const Sidebar = () => {
	const [extended, setExtended] = useState(false)

	return (
		<div className={styles.sidebar}>
			<div className={styles.top}>
				<img onClick={() => setExtended(!extended)} className={styles.menu} src={assets.menu_icon} alt="" />
				<div className={styles.newChat}>
					<img src={assets.plus_icon} alt="" />
					{extended ? <p>Новые чаты</p> : null }
				</div>
				{extended 
				? <div className={styles.recent}>
					<p className={styles.recentTitle}>Недавние</p>
					<div className={styles.recentEntry}>
						<img src={assets.message_icon} alt="" />
						<p>What is react...</p>
					</div>
				</div>
				: null}
			</div>
			<div className={styles.bottom}>
				<div className={styles.bottomItem}>
					<img src={assets.question_icon} alt="" />
					{extended ? <p>Помощь</p> : null}
				</div>
				<div className={styles.bottomItem}>
					<img src={assets.history_icon} alt="" />
					{extended ? <p>Активация</p> : null}
				</div>
				<div className={styles.bottomItem}>
					<img src={assets.setting_icon} alt="" />
					{extended ? <p>Настройки</p> : null}
				</div>
			</div>
		</div>
	)
}

export default Sidebar
