import { useEffect, useState } from "react";
import instance from "../config/axiosConfig";

const CompleteAchievementList = (props) => {
  const { idPlayer, lastAchievement } = props;

  const initAchievements = [];

  const [completeAchievementList, setCompleteAchievementList] = useState(
    initAchievements
  );

  useEffect(() => {
    if (idPlayer !== "") {
      instance
        .get(`/player/my_achievement/${idPlayer}`)
        .then((res) =>
          setCompleteAchievementList(res.data.achievements_complete)
        );
    }
    setCompleteAchievementList(initAchievements);
  }, [idPlayer, lastAchievement]);

  return (
    <ul>
      {completeAchievementList.map((e) => {
        return (
          <li key={e.name}>
            {e.name} - {e.points}pts
          </li>
        );
      })}
    </ul>
  );
};

export default CompleteAchievementList;
