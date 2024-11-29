import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { Colors } from "../../../constants";

const NavItem = ({ icon, text, url = '#' }) => {
  return (
    <div 
      onClick={() => window.open(url, "_blank")}
      className="flex justify-center align-end gap-3 p-3"
      style={{ cursor: 'pointer', color: Colors.White }}
    >
      <FontAwesomeIcon icon={icon} size="2xl" />
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{text}</Typography>
    </div>
  )
}

export default NavItem;