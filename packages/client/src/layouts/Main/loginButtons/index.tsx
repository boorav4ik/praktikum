import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import {AuthButton} from "./AuthButton";
import {RegButton} from "./RegButton";
import Toolbar from "@mui/material/Toolbar";

export function LoginButtons() {
  const [{ user }, { signout }] = useAuth()
  const navigate = useNavigate()

  return (
      <div style={{
          width: "fit-content",
          display: "flex",
          gap: "10px",
          marginLeft: "30"
      }}>
          <AuthButton/>
          {!user && <RegButton/>}
      </div>
  )
}
