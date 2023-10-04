/**
 * MSButton Component
 *
 * The `MSButton` component is a custom button component that extends the MUI (Material-UI) Button component.
 * It provides an interface for rendering buttons with various styles and configurations.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - The text content to be displayed inside the button.
 * @param {string} props.color - The color of the button. Possible values: "primary", "secondary", "error", "info", "success", "warning".
 * @param {string} props.variant - The variant of the button. Possible values: "contained", "outlined", "text".
 * @param {Function} props.onClick - The event handler function to be called when the button is clicked.
 * @param {string} props.size - The size of the button. Possible values: "small", "medium", "large".
 * @param {boolean} props.disabled - If true, the button will be disabled and not clickable.
 *
 * @returns {React.ReactNode} The `MSButton` component.
 */

import { MSButtonProps } from "../../@types/components";
import { Button } from "@mui/material";
import { styles } from "./MSButton.styles";

const MSButton = ({
  title,
  variant = 'contained',
  endIcon,
  startIcon,
  sx,
  onClick,
  disabled
}: MSButtonProps) => {
  return (
    <Button 
      sx={[(variant === 'outlined')?  styles.outlined : styles.button, sx,]} 
      variant={variant} 
      startIcon={startIcon}  
      endIcon={endIcon}
      size="small"
      onClick={onClick}
      disabled={disabled}
    
    >
      {title}
    </Button>
  );
};

export default MSButton;
