import { useEffect, useState } from "react"
import instance from "../config/axiosConfig"

const BoardList = (props) => {

  const {idPlayer, handleInput} = props

  const initBoards = [{
    "name": "",
    "id_admin": "",
    "id_board": "",
    "date_end": ""
  }]

  const [boardList, setBoardList] = useState(initBoards)

  useEffect(() => {
    if ( idPlayer !== '') {
      instance.get(`/player/boards/?id_player=${idPlayer}`)
      .then(res => setBoardList([...initBoards,...res.data.boardDTOSet]))
    } else {
      setBoardList(initBoards)
    }
  },[idPlayer])


  return (
    <select name="board" onClick = {handleInput}>
      {boardList.map(e => (
        <option key={e.id_board} value = {e.id_board}>{e.name}</option>
      ))}
    </select>
  )
}

export default BoardList;