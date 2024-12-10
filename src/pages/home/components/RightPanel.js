import { Colors } from "../../../constants";

const RightPanel = () => {
  return (
    <div className="relative w-1/2 pl-16 flex flex-col gap-3 justify-center align-center h-full rounded-3xl pr-10">
      <div className="w-full h-1/3 flex justify-center gap-3">
        <div className="w-1/3 h-full rounded-3xl" style={{ border: `2px solid ${Colors.White(70)}` }}>
        </div>
        <div className="w-1/3 h-full rounded-3xl" style={{ border: `2px solid ${Colors.White(70)}` }}>
        </div>
        <div className="w-1/3 h-full rounded-3xl" style={{ border: `2px solid ${Colors.White(70)}` }}>
        </div>
      </div>
      
      <div className="w-full h-1/3 flex justify-center gap-3">
        <div className="w-1/2 h-full rounded-3xl" style={{ border: `2px solid ${Colors.White(70)}` }}>
        </div>
        <div className="w-1/2 h-full rounded-3xl" style={{ border: `2px solid ${Colors.White(70)}` }}>
        </div>
      </div>

      <div className="w-full h-1/6 flex justify-center gap-3">
        <div className="w-full h-full rounded-3xl" style={{ border: `2px solid ${Colors.White(70)}` }}>
        </div>
      </div>
    </div>
  )
};

export default RightPanel;