import { BoxStyles } from "./styles";
import { classes } from "./utils";

export default function Alert({
  icon,
  children,
  className,
  actionButton,
  closeButton,
}) {
  return (
    <div className={classes("flex w-full", BoxStyles, className)}>
      {icon && <div className="flex justify-center items-center">{icon}</div>}
      <div className="grow flex justify-start items-center">{children}</div>
      {actionButton && (
        <div className="flex justify-center items-center">{actionButton}</div>
      )}
      {closeButton && (
        <div className="flex justify-center items-center">{closeButton}</div>
      )}
    </div>
  );
}
