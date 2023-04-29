export function Button({
  label,
  ...props
}: {
  label: string
  onClick: () => void
}) {
  return <button {...props}>{label}</button>
}
