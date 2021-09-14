import { useEffect, useState } from "react"
import instance from "../config/axiosConfig"

const BoardAchivements = (props) => {

  const {idBoard, lastAchivement} = props

  const initBoards = []

  const [BoardAchievements, setBoardAchivements] = useState(initBoards)

  useEffect(() => {
    instance.get(`/admin/get_achievements/${idBoard}`)
        .then(res => setBoardAchivements(res.data.achievementDTOSet))
  },[idBoard, lastAchivement])


  return (
    <ul>
      {BoardAchievements.map(e => (
        <li key={e.id}>{e.name} - {e.points} - {e.plan_type}</li>
      ))}
    </ul>
  )
}

export default BoardAchivements;