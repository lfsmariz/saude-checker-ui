import { useEffect, useState } from "react"
import instance from "../config/axiosConfig"

const BoardPlayers = (props) => {

  const {idBoard, lastPlayer} = props

  const initBoards = []

  const [BoardAchievements, setBoardPlayers] = useState(initBoards)

  useEffect(() => {
    instance.get(`/admin/board_players/${idBoard}`)
        .then(res => setBoardPlayers(res.data.players))
  },[idBoard, lastPlayer])


  return (
    <ul>
      {BoardAchievements.map(e => (
        <li key={e.id}>{e.name} - {e.points}pts - {e.planType} plan</li>
      ))}
    </ul>
  )
}

export default BoardPlayers;