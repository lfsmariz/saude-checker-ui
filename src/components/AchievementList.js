import { useEffect, useState } from "react"
import instance from "../config/axiosConfig"

const AchievementList = (props) => {

  const {idPlayer, idBoard, handleInput} = props

  const initAchievements = [
    {
      "id": '',
      "name": "",
      "points": '',
      "board_name": ""
    }
  ]

  const [achievementList, setAchievementList] = useState(initAchievements)

  useEffect(() => {
    if ( idPlayer !== '' && idBoard !== '') {
      instance.get(`/admin/get_achievements/?id_board=${idBoard}&id_user=${idPlayer}`)
      .then(res => setAchievementList([...initAchievements,...res.data.achievementDTOSet]))
    }
    setAchievementList(initAchievements)
  },[idPlayer, idBoard])


  return (
    <select name="achievement" onClick = {handleInput}>
      {achievementList.map(e => {
        return <option key={e.id} value = {e.id}>{e.name} - {e.points}pts</option>
      })}
    </select>
  )
}

export default AchievementList;