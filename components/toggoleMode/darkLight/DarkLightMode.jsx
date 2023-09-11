 "use client";
import { useTheme } from "next-themes";
import { FiMoon } from "@react-icons/all-files/fi/FiMoon";
import { BsSun } from "@react-icons/all-files/bs/BsSun";
import styles from './themeMode.module.css'
import { useState } from "react";


function DarkLightMode() {
     const { theme, setTheme } = useTheme();
     const [isChecked, setIsChecked] = useState(false);;


     function handleChange(event) {
      setIsChecked(event.target.checked);
      isChecked ? setTheme("light") : setTheme("dark")
    }
  return (
    <div>

<label className={styles.uiswitch}>
  <input type="checkbox" checked={isChecked} onChange={handleChange}/>
  <div className={styles.slider}>
    <div className={styles.circle}></div>
  </div>
</label>


     {/* {theme === "dark" ? (
        <BsSun className="text-xl text-blue-gray-100" cursor="pointer" onClick={() => setTheme("light")} />
      ) : (
        <FiMoon className="text-xl text-blue-gray-100" cursor="pointer" onClick={() => setTheme("dark")} />
      )} */}
      </div>
  )
}

export default DarkLightMode



