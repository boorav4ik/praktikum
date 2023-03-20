import { useAuth } from '../../../hooks/useAuth'
import {AuthButton} from "./AuthButton";
import {RegButton} from "./RegButton";

export function LoginButtons() {
  const [{ user }] = useAuth()

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
