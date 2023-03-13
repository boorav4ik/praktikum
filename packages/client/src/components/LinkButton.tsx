import { ButtonProps } from "@mui/material";
import { Link, LinkProps } from "react-router-dom";
import { Button } from "./Button";

export function LinkButton(props: ButtonProps & LinkProps) {
  return <Button component={Link} {...props} />
}