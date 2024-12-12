import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Colors } from "../../../constants";

const Container = styled('div')({
  cursor: 'pointer', 
  color: Colors.Black(70),
  '&:hover': { transform: 'scale(110%)', transition: 'transform .3s ease-out' },
  '&:active': { transform: 'scale(90%)', transition: 'transform .1s ease-out' }
});

const NavItem = ({ icon, text, url = '#', onClick = null, color = Colors.White(85)  }) => {
  return (
    <Container 
      onClick={onClick ? onClick : (() => window.open(url, "_blank"))}
      className={`flex justify-center align-end gap-3 p-3 hover:animate-pulse`}
    >
      <FontAwesomeIcon icon={icon} size="2xl" color={color} />
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: color }}>{text}</Typography>
    </Container>
  )
}

export default NavItem;