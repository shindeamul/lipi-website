import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";



export const BlogBySlugAtom = atomFamily<any,string>({
    key:"BlogBySlugAtom",
    default: selectorFamily<any,string>({
            key:"BlogBySlugSelector",
            get: (slug:string) => async () =>{
                try{
                    const response = await axios.get(`${import.meta.env.VITE_GOOGLE_SHEET_API}?action=blog&slug=${encodeURIComponent(slug)}`);
                    return response.data.blog;
                }
                catch(e:any){
                    throw new Error(e.response?.data?.msg || e.message);
                }
            }
    })
});