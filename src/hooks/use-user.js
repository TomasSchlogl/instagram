import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});

  const { user } = useContext(userContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      setActiveUser(response);
    }
  }, [user]);
}
