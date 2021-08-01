import { useEffect, useState } from "react"
import instance from "../config/axiosConfig"

const BoardList = (props) => {

  const {typeUser, idUser, handleInput, lastBoard} = props

  const initBoards = [{
    "name": "",
    "id_admin": "",
    "id_board": "",
    "date_end": ""
  }]

  const [boardList, setBoardList] = useState(initBoards)

  useEffect(() => {
    if ( idUser !== '') {
      if (typeUser === 'player'){
        instance.get(`/player/boards/?id_player=${idUser}`)
        .then(res => setBoardList([...initBoards,...res.data.boardDTOSet]))
      } else if (typeUser === 'admin'){
        instance.get(`/admin/boards/${idUser}`)
        .then(res => setBoardList([...initBoards,...res.data.boards]))
      }
    } else {
      setBoardList(initBoards)
    }
  },[idUser, lastBoard])


  return (
    <div>
      <label>Selecione o board:</label>
      <select name="board" onClick = {handleInput}>
        {boardList.map(e => (
          <option key={e.id_board} value = {e.id_board}>{e.name}</option>
        ))}
      </select>
    </div>
  )
}

export default BoardList;