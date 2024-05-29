import Image from "next/image";
import activeAssistantIcon from "@/img/active.gif"
import notActiveAssistantIcon from "@/img/notactive.png"
function Recorder() {
  return (
    <div className="flex items-center justify-center text-white">
        <Image
            src={activeAssistantIcon} 
            width={350}
            height={350}
            priority
            alt="Recording"
        />
    </div>
  )
  
    

}

export default Recorder