import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType,
  titleColor: string
}
const Billboard = ({data, titleColor}: BillboardProps) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div 
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{backgroundImage: `url(${data?.imageUrl})`}}>
        <div className="w-full h-full flex flex-col text-center gap-y-8 items-center justify-center">
          <div className={`font-bold text-${titleColor} text-3xl md:text-5xl lg:text-6xl sm:max-w-xl max-w-xs`}>
            {data.label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billboard