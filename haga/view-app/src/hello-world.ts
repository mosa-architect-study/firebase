
import {get} from "./adaptors/cloud-functions"

export default async (elm:HTMLElement) => {
    elm.textContent = "Loading!"
    const res = await get("/visit");
    if(res.message){
        elm.textContent = res.message
    } else {
        elm.textContent = `あなたは ${res.count} 人目の訪問者です。`
    }
}