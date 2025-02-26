import { Ubuntu_Mono } from "next/font/google";

const font = Ubuntu_Mono({subsets:["latin"], weight:["400","700"]});

const LtrGrid = ({ltrs, color}:{ltrs: string[], color: string}) => {
    const cellclassName = `flex justify-center items-center`
    return (
        <div
        className={`grid grid-row-2 grid-col-2 gap-[2px] sm:border-[2px] border-[1px] border-[${color}] ${font.className} text-[${color}]
        text-[12px] sm:text-[16px] sm:w-[35px] sm:h-[35px] w-[28px] h-[28px]`}
        style={{
            color:color,
            borderColor:color,
        }}>
            
        <div className={cellclassName}>{ltrs[0]}</div>
        <div className={cellclassName}>{ltrs[1]}</div>
        <div className={cellclassName}>{ltrs[2]}</div>
        <div className={cellclassName}>{ltrs[3]}</div>
        </div>
    );
}
export default LtrGrid;