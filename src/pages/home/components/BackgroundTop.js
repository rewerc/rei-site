import { Colors } from "../../../constants";

const BackgroundTop = () => {
  return (
    <div 
      className="absolute w-full h-screen top-0 left-0" 
      style={{ 
        background: `linear-gradient(135deg, ${Colors.Teal()}, ${Colors.SteelBlue()} 75%)`
      }}
    >
    </div>
  );
}

export default BackgroundTop;